// This service contains the logic for parsing HTML from a tournament webpage.
// It is now tailored to the "CasinoWare" plugin structure and includes more fields.

import * as cheerio from 'cheerio';
import type { GameData, MissingField, PlayerResultData } from '../types/game';

type CheerioAPI = ReturnType<typeof cheerio.load>;

/**
 * A helper to parse numeric values from strings like "$1,000" or "50,000".
 */
const parseNumeric = (str: string | null | undefined): number | undefined => {
    if (!str) return undefined;
    const num = parseInt(str.replace(/[^0-9.-]+/g, ''), 10);
    return isNaN(num) ? undefined : num;
};

/**
 * Robustly parses the guarantee string (e.g., "$5000 GTD").
 * @param text The string to parse.
 * @returns An object with guarantee information.
 */
const parseGuarantee = (text: string | null | undefined): { hasGuarantee: boolean, guaranteeAmount?: number } => {
    if (!text) {
        return { hasGuarantee: false };
    }
    
    const guaranteeRegex = /(gtd|guaranteed|g'teed)/i;
    if (guaranteeRegex.test(text)) {
        const amount = parseNumeric(text);
        return {
            hasGuarantee: true,
            guaranteeAmount: amount
        };
    }

    return { hasGuarantee: false };
};

/**
 * Extracts the level structure from an embedded script tag.
 */
const getTournamentLevelsFromScript = (html: string): GameData['levels'] => {
    const scriptContentRegex = /const cw_tt_levels = (\[.*?\]);/s;
    const match = html.match(scriptContentRegex);

    if (match && match[1]) {
        try {
            const levelsJson = JSON.parse(match[1]);
            return levelsJson.map((level: any) => ({
                levelNumber: level.ID || 0,
                durationMinutes: level.duration || 0,
                smallBlind: level.smallblind || 0,
                bigBlind: level.bigblind || 0,
                ante: level.ante || 0,
            }));
        } catch (error) {
            console.error('Failed to parse levels JSON from script:', error);
            return [];
        }
    }
    return [];
};

/**
 * Extracts player results from the results table.
 */
const getPlayerResults = ($: CheerioAPI): PlayerResultData[] => {
    const results: PlayerResultData[] = [];
    $('h4.cw-text-center:contains("Result")').next('table').find('tbody tr').each((i, el) => {
        const rank = parseInt($(el).find('td').eq(0).text().trim(), 10);
        const name = $(el).find('td').eq(2).text().trim();
        const winnings = parseNumeric($(el).find('td').eq(3).text().trim()) || 0;

        if (!isNaN(rank) && name) {
            results.push({ rank, name, winnings });
        }
    });
    return results;
};


/**
 * Main parser function that orchestrates the individual scraping functions.
 * @param html The raw HTML string of the webpage.
 * @returns An object containing the found data and a list of missing fields.
 */
export const parseTournamentHtml = (html: string): { data: GameData, missingFields: MissingField[] } => {
    const $ = cheerio.load(html);
    const missingFields: MissingField[] = [];

    // --- Game Model Fields ---
    const tournamentName = $('.cw-game-title').first().text().trim();
    const dateTimeString = $('#cw_clock_start_date_time_local').text().trim();
    const status = $('label:contains("Status")').first().next('strong').text().trim() || 'SCHEDULED';
    
    // Find registration status by looking for its label, navigating to the parent, and cleaning the text.
    const registrationDiv = $('label:contains("Registration")').parent();
    const registrationStatus = registrationDiv.text().replace(/Registration/g, '').trim();

    const gameVariant = $('#cw_clock_shortlimitgame').text().trim();
    const prizepool = parseNumeric($('#cw_clock_prizepool').text().trim());
    const totalEntries = parseNumeric($('#cw_clock_playersentries').text().trim());
    const totalRebuys = parseNumeric($('#cw_clock_rebuys').text().trim());
    const totalAddons = parseNumeric($('div:contains("Add-Ons")').next().text().trim()); // Example selector
    const totalDuration = $('div.cw-clock-label:contains("Total Time")').next().text().trim();
    const gameTags = $('.cw-game-buyins .cw-badge').map((i, el) => $(el).text().trim()).get();
    
    if (!tournamentName) missingFields.push({ model: 'Game', field: 'name', reason: 'Could not find .cw-game-title.' });
    if (!dateTimeString) missingFields.push({ model: 'Game', field: 'gameDateTime', reason: 'Could not find #cw_clock_start_date_time_local.' });
    if (!registrationStatus) missingFields.push({ model: 'Game', field: 'registrationStatus', reason: 'Could not find registration status.' });
    if (!gameVariant) missingFields.push({ model: 'Game', field: 'gameVariant', reason: 'Could not find #cw_clock_shortlimitgame.' });
    if (prizepool === undefined) missingFields.push({ model: 'Game', field: 'prizepool', reason: 'Could not find or parse #cw_clock_prizepool.' });
    if (totalEntries === undefined) missingFields.push({ model: 'Game', field: 'totalEntries', reason: 'Could not find or parse #cw_clock_playersentries.' });
    if (totalRebuys === undefined) missingFields.push({ model: 'Game', field: 'totalRebuys', reason: 'Could not find or parse #cw_clock_rebuys.' });
    if (totalAddons === undefined) missingFields.push({ model: 'Game', field: 'totalAddons', reason: 'Field for "Add-Ons" not found on page.' });

    // --- TournamentStructure Model Fields ---
    const guaranteeText = $('.cw-game-shortdesc').text().trim();
    const { hasGuarantee, guaranteeAmount } = parseGuarantee(guaranteeText);
    const buyIn = parseNumeric($('#cw_clock_buyin').text().trim());
    const startingStack = parseNumeric($('#cw_clock_startchips').text().trim());
    
    if (buyIn === undefined) missingFields.push({ model: 'TournamentStructure', field: 'buyIn', reason: 'Could not find or parse #cw_clock_buyin.' });
    if (startingStack === undefined) missingFields.push({ model: 'TournamentStructure', field: 'startingStack', reason: 'Could not find or parse #cw_clock_startchips.' });
    if (hasGuarantee && guaranteeAmount === undefined) missingFields.push({ model: 'TournamentStructure', field: 'guaranteeAmount', reason: 'Found a guarantee but could not parse the amount.' });
    missingFields.push({ model: 'TournamentStructure', field: 'tournamentType', reason: 'Tournament Type (e.g., Freezeout) is not specified.' });
    missingFields.push({ model: 'TournamentStructure', field: 'rake', reason: 'Rake is not specified separately.' });

    // --- Other Data ---
    const levels = getTournamentLevelsFromScript(html);
    if (levels.length === 0) missingFields.push({ model: 'TournamentLevel', field: 'levels', reason: 'Could not find `cw_tt_levels` script variable.' });

    const results = getPlayerResults($);

    // --- Fields That Cannot Be Reliably Scraped for DB Population ---
    const unScrapableFields: MissingField[] = [
        { model: 'Venue', field: 'all fields', reason: 'Venue data must be provided manually.' },
        { model: 'Player', field: 'all fields', reason: 'Player IDs and static info are not on this page.' },
        { model: 'PlayerAccount', field: 'all fields', reason: 'Player account data is not on this page.' },
        { model: 'PlayerResult', field: 'all fields', reason: 'Cannot link scraped names to Player Accounts automatically.' },
        { model: 'PlayerTransaction', field: 'all fields', reason: 'Player transactions are not available.' },
        { model: 'PlayerTicket', field: 'all fields', reason: 'Player ticket data is not available.' },
        { model: 'CashStructure', field: 'all fields', reason: 'This page is for Tournaments, not Cash Games.' },
        { model: 'RakeStructure', field: 'all fields', reason: 'This page is for Tournaments, not Cash Games.' },
    ];
    
    const data: GameData = {
        name: tournamentName,
        gameDateTime: dateTimeString,
        status: status.toUpperCase(),
        registrationStatus: registrationStatus || undefined,
        gameVariant: gameVariant || undefined,
        prizepool,
        totalEntries,
        totalRebuys,
        totalAddons,
        totalDuration: totalDuration || undefined,
        gameTags,
        buyIn,
        startingStack,
        hasGuarantee,
        guaranteeAmount,
        levels,
        results,
        otherDetails: {},
        rawHtml: html,
    };

    if (!data.name && levels.length === 0) {
        throw new Error("Failed to find critical tournament data. The page layout may have changed.");
    }

    return { data, missingFields: [...missingFields, ...unScrapableFields] };
};