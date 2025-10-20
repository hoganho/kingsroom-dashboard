// This file defines the shared data structures for our game data feature.

// Represents a single player's result from the scraped data
export type PlayerResultData = {
    rank: number;
    name: string;
    winnings: number;
};

// A structured representation of the data we expect to find.
// This closely aligns with the `Game` and `TournamentStructure` models.
export type GameData = {
    // Game model fields
    name: string;
    gameDateTime: string;
    status: string; // e.g., 'LIVE', 'SCHEDULED', 'FINISHED'
    seriesName?: string;

    // TournamentStructure model fields
    tournamentType?: string; // e.g., 'FREEZEOUT'
    buyIn?: number;
    rake?: number;
    startingStack?: number;

    // TournamentLevel model fields
    levels: {
        levelNumber: number;
        durationMinutes: number;
        smallBlind: number;
        bigBlind: number;
        ante: number;
    }[];

    // Player results if available on the page
    results?: PlayerResultData[];

    // Other scraped details that don't fit a specific model field
    otherDetails: Record<string, string>;
    rawHtml?: string;
};

// Describes a piece of information we wanted but could not find.
export type MissingField = {
    model: string;
    field: string;
    reason: string;
};


// Defines the possible sources for our game data.
export type DataSource = 'SCRAPE' | 'API';

// Represents the status of a job for a single game.
export type JobStatus = 'IDLE' | 'FETCHING' | 'READY_TO_SAVE' | 'LIVE' | 'DONE' | 'ERROR' | 'SAVING';

// This is the main state object for a single game being tracked in our context.
export interface GameState {
    id: string; // A unique identifier (URL for scrapes, API ID for API)
    source: DataSource;
    status: JobStatus;
    data?: GameData;
    missingFields?: MissingField[]; // To track what we couldn't parse
    lastFetched?: string; // ISO string timestamp
    errorMessage?: string;
    saveResult?: any; // To store the result from the backend
}