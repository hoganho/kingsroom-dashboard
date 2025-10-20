// This service acts as an abstraction layer for fetching game data.
// It decides whether to use the scraper or a direct API call.

import axios from 'axios';
import { parseTournamentHtml } from './scraperService';
import type { GameData, MissingField } from '../types/game';

// Configuration - change this if you need to scrape from a different site
const KINGS_ROOM_BASE_URL = 'https://kingsroom.com.au/tournament/?id=';

/**
 * Fetches game data by scraping a tournament page.
 * @param urlOrId Can be:
 * - Just an ID (e.g., "2" or "15")
 * - A full URL (e.g., "https://kingsroom.com.au/tournament/?id=2")
 * @returns A promise that resolves to the structured GameData.
 */
export const getGameDataFromScrape = async (urlOrId: string): Promise<{ data: GameData, missingFields: MissingField[] }> => {
    // Determine if input is a full URL or just an ID
    let url: string;
    
    if (urlOrId.startsWith('http://') || urlOrId.startsWith('https://')) {
        // Full URL provided
        url = urlOrId;
    } else {
        // Just an ID provided - construct the full URL
        url = KINGS_ROOM_BASE_URL + urlOrId;
        console.log(`[DataProvider] Converted ID "${urlOrId}" to URL: ${url}`);
    }
    
    console.log(`[DataProvider] Fetching data via SCRAPE for: ${url}`);
    let html = '';
    
    try {
        // Using a CORS proxy for client-side fetching
        const proxyUrl = `https://cors-anywhere.herokuapp.com/${url}`;
        
        // You might need to add a header for some proxies
        const response = await axios.get(proxyUrl, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        });
        
        html = response.data;
        
        // Log some debug info about what we received
        console.log(`[DataProvider] Received HTML (length: ${html.length} characters)`);
        
        // Parse the HTML
        const { data, missingFields } = parseTournamentHtml(html);
        
        // Return parsed data with raw HTML included
        return { data, missingFields };
    } catch (error: any) {
        console.error('[DataProvider] Error in getGameDataFromScrape:', error);
        console.error('[DataProvider] Failed URL:', url);
        
        if (html) {
            throw {
                message: `Parsing failed for ${url}: ${error.message || 'Failed to parse HTML'}`,
                rawHtml: html,
                originalError: error
            };
        }
        
        throw {
            message: `Failed to fetch HTML from ${url}: ${error.message || 'Network error'}`,
            rawHtml: '',
            originalError: error
        };
    }
};

/**
 * MOCK: Fetches game data from a theoretical external API.
 * In a real application, this would make a request to another backend.
 * @param apiId The ID of the game on the external platform.
 * @returns A promise that resolves to mock GameData.
 */
export const getGameDataFromApi = async (apiId: string): Promise<GameData> => {
    console.log(`[DataProvider] Fetching data via API for ID: ${apiId}`);
    // Simulate an API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Return hardcoded mock data (no rawHtml for API source)
    return {
        name: `API Game #${apiId}`,
        gameDateTime: 'Fetched via API at ' + new Date().toLocaleString(),
        status: 'LIVE',
        buyIn: 500,
        startingStack: 50000,
        tournamentType: 'DEEPSTACK',
        levels: [
            { levelNumber: 1, durationMinutes: 30, smallBlind: 100, bigBlind: 200, ante: 200 }
        ],
        otherDetails: {},
        // Note: No rawHtml or results for API fetches
    };
};