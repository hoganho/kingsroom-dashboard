import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum SyncMethod {
  SCRAPE = "SCRAPE",
  API = "API",
  MANUAL = "MANUAL"
}

export enum AssetCondition {
  NEW = "NEW",
  GOOD = "GOOD",
  FAIR = "FAIR",
  POOR = "POOR",
  RETIRED = "RETIRED"
}

export enum VenueStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  PENDING = "PENDING"
}

export enum GameType {
  TOURNAMENT = "TOURNAMENT",
  CASH_GAME = "CASH_GAME"
}

export enum GameStatus {
  SCHEDULED = "SCHEDULED",
  LIVE = "LIVE",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
  FINISHED = "FINISHED"
}

export enum TournamentType {
  FREEZEOUT = "FREEZEOUT",
  REBUY = "REBUY",
  SATELLITE = "SATELLITE",
  DEEPSTACK = "DEEPSTACK"
}

export enum PlayerAccountStatus {
  ACTIVE = "ACTIVE",
  SUSPENDED = "SUSPENDED",
  PENDING_VERIFICATION = "PENDING_VERIFICATION"
}

export enum PlayerAccountCategory {
  NEW = "NEW",
  RECREATIONAL = "RECREATIONAL",
  REGULAR = "REGULAR",
  VIP = "VIP",
  LAPSED = "LAPSED"
}

export enum TransactionType {
  BUY_IN = "BUY_IN",
  DEPOSIT = "DEPOSIT",
  TICKET_AWARD = "TICKET_AWARD",
  TICKET_REDEMPTION = "TICKET_REDEMPTION",
  WITHDRAWAL = "WITHDRAWAL"
}

export enum MessageStatus {
  SENT = "SENT",
  DELIVERED = "DELIVERED",
  FAILED = "FAILED",
  READ = "READ"
}

export enum UserRole {
  SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
  VENUE_MANAGER = "VENUE_MANAGER",
  TOURNAMENT_DIRECTOR = "TOURNAMENT_DIRECTOR",
  MARKETING = "MARKETING"
}

export enum StaffRole {
  DEALER = "DEALER",
  FLOOR_MANAGER = "FLOOR_MANAGER",
  SERVICE = "SERVICE",
  TOURNAMENT_DIRECTOR = "TOURNAMENT_DIRECTOR"
}

export enum TicketStatus {
  ACTIVE = "ACTIVE",
  EXPIRED = "EXPIRED",
  USED = "USED"
}



type EagerDataSync = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DataSync, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly syncedAt: string;
  readonly method: SyncMethod | keyof typeof SyncMethod;
  readonly sourceUrl?: string | null;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDataSync = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DataSync, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly syncedAt: string;
  readonly method: SyncMethod | keyof typeof SyncMethod;
  readonly sourceUrl?: string | null;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DataSync = LazyLoading extends LazyLoadingDisabled ? EagerDataSync : LazyDataSync

export declare const DataSync: (new (init: ModelInit<DataSync>) => DataSync) & {
  copyOf(source: DataSync, mutator: (draft: MutableModel<DataSync>) => MutableModel<DataSync> | void): DataSync;
}

type EagerAsset = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Asset, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly type: string;
  readonly condition: AssetCondition | keyof typeof AssetCondition;
  readonly acquiredDate: string;
  readonly lastCheckedDate: string;
  readonly venueId: string;
  readonly venue?: Venue | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAsset = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Asset, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly type: string;
  readonly condition: AssetCondition | keyof typeof AssetCondition;
  readonly acquiredDate: string;
  readonly lastCheckedDate: string;
  readonly venueId: string;
  readonly venue: AsyncItem<Venue | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Asset = LazyLoading extends LazyLoadingDisabled ? EagerAsset : LazyAsset

export declare const Asset: (new (init: ModelInit<Asset>) => Asset) & {
  copyOf(source: Asset, mutator: (draft: MutableModel<Asset>) => MutableModel<Asset> | void): Asset;
}

type EagerVenue = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Venue, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly address?: string | null;
  readonly city?: string | null;
  readonly country?: string | null;
  readonly details?: VenueDetails | null;
  readonly assets?: (Asset | null)[] | null;
  readonly games?: (Game | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly venueDetailsId?: string | null;
}

type LazyVenue = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Venue, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly address?: string | null;
  readonly city?: string | null;
  readonly country?: string | null;
  readonly details: AsyncItem<VenueDetails | undefined>;
  readonly assets: AsyncCollection<Asset>;
  readonly games: AsyncCollection<Game>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly venueDetailsId?: string | null;
}

export declare type Venue = LazyLoading extends LazyLoadingDisabled ? EagerVenue : LazyVenue

export declare const Venue: (new (init: ModelInit<Venue>) => Venue) & {
  copyOf(source: Venue, mutator: (draft: MutableModel<Venue>) => MutableModel<Venue> | void): Venue;
}

type EagerVenueDetails = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VenueDetails, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly venueId: string;
  readonly startDate: string;
  readonly status: VenueStatus | keyof typeof VenueStatus;
  readonly lastCustomerSuccessVisit?: string | null;
  readonly totalGamesHeld?: number | null;
  readonly averagePlayersPerGame?: number | null;
  readonly gameNights?: (string | null)[] | null;
  readonly venue?: Venue | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVenueDetails = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VenueDetails, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly venueId: string;
  readonly startDate: string;
  readonly status: VenueStatus | keyof typeof VenueStatus;
  readonly lastCustomerSuccessVisit?: string | null;
  readonly totalGamesHeld?: number | null;
  readonly averagePlayersPerGame?: number | null;
  readonly gameNights?: (string | null)[] | null;
  readonly venue: AsyncItem<Venue | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type VenueDetails = LazyLoading extends LazyLoadingDisabled ? EagerVenueDetails : LazyVenueDetails

export declare const VenueDetails: (new (init: ModelInit<VenueDetails>) => VenueDetails) & {
  copyOf(source: VenueDetails, mutator: (draft: MutableModel<VenueDetails>) => MutableModel<VenueDetails> | void): VenueDetails;
}

type EagerGame = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Game, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly type: GameType | keyof typeof GameType;
  readonly status: GameStatus | keyof typeof GameStatus;
  readonly gameDateTime: string;
  readonly venueId: string;
  readonly seriesName?: string | null;
  readonly isAdHoc?: boolean | null;
  readonly tournamentStructureId?: string | null;
  readonly cashStructureId?: string | null;
  readonly registrationStatus?: string | null;
  readonly gameVariant?: string | null;
  readonly prizepool?: number | null;
  readonly totalEntries?: number | null;
  readonly totalRebuys?: number | null;
  readonly totalAddons?: number | null;
  readonly totalDuration?: string | null;
  readonly gameTags?: (string | null)[] | null;
  readonly venue?: Venue | null;
  readonly tournamentStructure?: TournamentStructure | null;
  readonly cashStructure?: CashStructure | null;
  readonly playerResults?: (PlayerResult | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGame = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Game, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly type: GameType | keyof typeof GameType;
  readonly status: GameStatus | keyof typeof GameStatus;
  readonly gameDateTime: string;
  readonly venueId: string;
  readonly seriesName?: string | null;
  readonly isAdHoc?: boolean | null;
  readonly tournamentStructureId?: string | null;
  readonly cashStructureId?: string | null;
  readonly registrationStatus?: string | null;
  readonly gameVariant?: string | null;
  readonly prizepool?: number | null;
  readonly totalEntries?: number | null;
  readonly totalRebuys?: number | null;
  readonly totalAddons?: number | null;
  readonly totalDuration?: string | null;
  readonly gameTags?: (string | null)[] | null;
  readonly venue: AsyncItem<Venue | undefined>;
  readonly tournamentStructure: AsyncItem<TournamentStructure | undefined>;
  readonly cashStructure: AsyncItem<CashStructure | undefined>;
  readonly playerResults: AsyncCollection<PlayerResult>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Game = LazyLoading extends LazyLoadingDisabled ? EagerGame : LazyGame

export declare const Game: (new (init: ModelInit<Game>) => Game) & {
  copyOf(source: Game, mutator: (draft: MutableModel<Game>) => MutableModel<Game> | void): Game;
}

type EagerTournamentStructure = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TournamentStructure, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly type: TournamentType | keyof typeof TournamentType;
  readonly buyIn: number;
  readonly rake: number;
  readonly startingStack: number;
  readonly hasGuarantee?: boolean | null;
  readonly guaranteeAmount?: number | null;
  readonly levels?: (TournamentLevel | null)[] | null;
  readonly games?: (Game | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTournamentStructure = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TournamentStructure, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly type: TournamentType | keyof typeof TournamentType;
  readonly buyIn: number;
  readonly rake: number;
  readonly startingStack: number;
  readonly hasGuarantee?: boolean | null;
  readonly guaranteeAmount?: number | null;
  readonly levels: AsyncCollection<TournamentLevel>;
  readonly games: AsyncCollection<Game>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TournamentStructure = LazyLoading extends LazyLoadingDisabled ? EagerTournamentStructure : LazyTournamentStructure

export declare const TournamentStructure: (new (init: ModelInit<TournamentStructure>) => TournamentStructure) & {
  copyOf(source: TournamentStructure, mutator: (draft: MutableModel<TournamentStructure>) => MutableModel<TournamentStructure> | void): TournamentStructure;
}

type EagerTournamentLevel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TournamentLevel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly structureId: string;
  readonly levelNumber: number;
  readonly durationMinutes: number;
  readonly smallBlind: number;
  readonly bigBlind: number;
  readonly ante?: number | null;
  readonly breakMinutes?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTournamentLevel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TournamentLevel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly structureId: string;
  readonly levelNumber: number;
  readonly durationMinutes: number;
  readonly smallBlind: number;
  readonly bigBlind: number;
  readonly ante?: number | null;
  readonly breakMinutes?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TournamentLevel = LazyLoading extends LazyLoadingDisabled ? EagerTournamentLevel : LazyTournamentLevel

export declare const TournamentLevel: (new (init: ModelInit<TournamentLevel>) => TournamentLevel) & {
  copyOf(source: TournamentLevel, mutator: (draft: MutableModel<TournamentLevel>) => MutableModel<TournamentLevel> | void): TournamentLevel;
}

type EagerRakeStructure = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RakeStructure, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly rakePercentage: number;
  readonly maxRake: number;
  readonly cashStructures?: (CashStructure | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRakeStructure = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RakeStructure, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly rakePercentage: number;
  readonly maxRake: number;
  readonly cashStructures: AsyncCollection<CashStructure>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RakeStructure = LazyLoading extends LazyLoadingDisabled ? EagerRakeStructure : LazyRakeStructure

export declare const RakeStructure: (new (init: ModelInit<RakeStructure>) => RakeStructure) & {
  copyOf(source: RakeStructure, mutator: (draft: MutableModel<RakeStructure>) => MutableModel<RakeStructure> | void): RakeStructure;
}

type EagerCashStructure = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CashStructure, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly smallBlind: number;
  readonly bigBlind: number;
  readonly minBuyIn: number;
  readonly maxBuyIn: number;
  readonly rakeStructureId: string;
  readonly rakeStructure?: RakeStructure | null;
  readonly games?: (Game | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCashStructure = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CashStructure, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly smallBlind: number;
  readonly bigBlind: number;
  readonly minBuyIn: number;
  readonly maxBuyIn: number;
  readonly rakeStructureId: string;
  readonly rakeStructure: AsyncItem<RakeStructure | undefined>;
  readonly games: AsyncCollection<Game>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CashStructure = LazyLoading extends LazyLoadingDisabled ? EagerCashStructure : LazyCashStructure

export declare const CashStructure: (new (init: ModelInit<CashStructure>) => CashStructure) & {
  copyOf(source: CashStructure, mutator: (draft: MutableModel<CashStructure>) => MutableModel<CashStructure> | void): CashStructure;
}

type EagerPlayer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Player, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly registrationVenueId: string;
  readonly account?: PlayerAccount | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly playerAccountId?: string | null;
}

type LazyPlayer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Player, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly registrationVenueId: string;
  readonly account: AsyncItem<PlayerAccount | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly playerAccountId?: string | null;
}

export declare type Player = LazyLoading extends LazyLoadingDisabled ? EagerPlayer : LazyPlayer

export declare const Player: (new (init: ModelInit<Player>) => Player) & {
  copyOf(source: Player, mutator: (draft: MutableModel<Player>) => MutableModel<Player> | void): Player;
}

type EagerPlayerAccount = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PlayerAccount, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly playerId: string;
  readonly creationDate: string;
  readonly status: PlayerAccountStatus | keyof typeof PlayerAccountStatus;
  readonly category: PlayerAccountCategory | keyof typeof PlayerAccountCategory;
  readonly tier?: string | null;
  readonly totalGamesPlayed?: number | null;
  readonly averageBuyIn?: number | null;
  readonly lastPlayedDate?: string | null;
  readonly venuesVisited?: (string | null)[] | null;
  readonly transactions?: (PlayerTransaction | null)[] | null;
  readonly results?: (PlayerResult | null)[] | null;
  readonly tickets?: (PlayerTicket | null)[] | null;
  readonly marketingPreferences?: PlayerMarketingPreferences | null;
  readonly player?: Player | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly playerAccountMarketingPreferencesId?: string | null;
}

type LazyPlayerAccount = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PlayerAccount, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly playerId: string;
  readonly creationDate: string;
  readonly status: PlayerAccountStatus | keyof typeof PlayerAccountStatus;
  readonly category: PlayerAccountCategory | keyof typeof PlayerAccountCategory;
  readonly tier?: string | null;
  readonly totalGamesPlayed?: number | null;
  readonly averageBuyIn?: number | null;
  readonly lastPlayedDate?: string | null;
  readonly venuesVisited?: (string | null)[] | null;
  readonly transactions: AsyncCollection<PlayerTransaction>;
  readonly results: AsyncCollection<PlayerResult>;
  readonly tickets: AsyncCollection<PlayerTicket>;
  readonly marketingPreferences: AsyncItem<PlayerMarketingPreferences | undefined>;
  readonly player: AsyncItem<Player | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly playerAccountMarketingPreferencesId?: string | null;
}

export declare type PlayerAccount = LazyLoading extends LazyLoadingDisabled ? EagerPlayerAccount : LazyPlayerAccount

export declare const PlayerAccount: (new (init: ModelInit<PlayerAccount>) => PlayerAccount) & {
  copyOf(source: PlayerAccount, mutator: (draft: MutableModel<PlayerAccount>) => MutableModel<PlayerAccount> | void): PlayerAccount;
}

type EagerPlayerTransaction = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PlayerTransaction, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly playerAccountId: string;
  readonly type: TransactionType | keyof typeof TransactionType;
  readonly amount: number;
  readonly transactionDate: string;
  readonly notes?: string | null;
  readonly gameId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPlayerTransaction = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PlayerTransaction, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly playerAccountId: string;
  readonly type: TransactionType | keyof typeof TransactionType;
  readonly amount: number;
  readonly transactionDate: string;
  readonly notes?: string | null;
  readonly gameId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PlayerTransaction = LazyLoading extends LazyLoadingDisabled ? EagerPlayerTransaction : LazyPlayerTransaction

export declare const PlayerTransaction: (new (init: ModelInit<PlayerTransaction>) => PlayerTransaction) & {
  copyOf(source: PlayerTransaction, mutator: (draft: MutableModel<PlayerTransaction>) => MutableModel<PlayerTransaction> | void): PlayerTransaction;
}

type EagerPlayerResult = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PlayerResult, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly playerAccountId: string;
  readonly gameId: string;
  readonly finishingPlace?: number | null;
  readonly prizeWon?: number | null;
  readonly totalRunners?: number | null;
  readonly game?: Game | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPlayerResult = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PlayerResult, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly playerAccountId: string;
  readonly gameId: string;
  readonly finishingPlace?: number | null;
  readonly prizeWon?: number | null;
  readonly totalRunners?: number | null;
  readonly game: AsyncItem<Game | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PlayerResult = LazyLoading extends LazyLoadingDisabled ? EagerPlayerResult : LazyPlayerResult

export declare const PlayerResult: (new (init: ModelInit<PlayerResult>) => PlayerResult) & {
  copyOf(source: PlayerResult, mutator: (draft: MutableModel<PlayerResult>) => MutableModel<PlayerResult> | void): PlayerResult;
}

type EagerPlayerMarketingMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PlayerMarketingMessage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly playerId: string;
  readonly marketingMessageId: string;
  readonly status: MessageStatus | keyof typeof MessageStatus;
  readonly sentAt: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPlayerMarketingMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PlayerMarketingMessage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly playerId: string;
  readonly marketingMessageId: string;
  readonly status: MessageStatus | keyof typeof MessageStatus;
  readonly sentAt: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PlayerMarketingMessage = LazyLoading extends LazyLoadingDisabled ? EagerPlayerMarketingMessage : LazyPlayerMarketingMessage

export declare const PlayerMarketingMessage: (new (init: ModelInit<PlayerMarketingMessage>) => PlayerMarketingMessage) & {
  copyOf(source: PlayerMarketingMessage, mutator: (draft: MutableModel<PlayerMarketingMessage>) => MutableModel<PlayerMarketingMessage> | void): PlayerMarketingMessage;
}

type EagerPlayerMarketingPreferences = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PlayerMarketingPreferences, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly playerAccountId: string;
  readonly optOutSms?: boolean | null;
  readonly optOutEmail?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPlayerMarketingPreferences = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PlayerMarketingPreferences, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly playerAccountId: string;
  readonly optOutSms?: boolean | null;
  readonly optOutEmail?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PlayerMarketingPreferences = LazyLoading extends LazyLoadingDisabled ? EagerPlayerMarketingPreferences : LazyPlayerMarketingPreferences

export declare const PlayerMarketingPreferences: (new (init: ModelInit<PlayerMarketingPreferences>) => PlayerMarketingPreferences) & {
  copyOf(source: PlayerMarketingPreferences, mutator: (draft: MutableModel<PlayerMarketingPreferences>) => MutableModel<PlayerMarketingPreferences> | void): PlayerMarketingPreferences;
}

type EagerTicketTemplate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TicketTemplate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly value: number;
  readonly validityDays: number;
  readonly originGameId?: string | null;
  readonly targetGameId?: string | null;
  readonly playerTickets?: (PlayerTicket | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTicketTemplate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TicketTemplate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly value: number;
  readonly validityDays: number;
  readonly originGameId?: string | null;
  readonly targetGameId?: string | null;
  readonly playerTickets: AsyncCollection<PlayerTicket>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TicketTemplate = LazyLoading extends LazyLoadingDisabled ? EagerTicketTemplate : LazyTicketTemplate

export declare const TicketTemplate: (new (init: ModelInit<TicketTemplate>) => TicketTemplate) & {
  copyOf(source: TicketTemplate, mutator: (draft: MutableModel<TicketTemplate>) => MutableModel<TicketTemplate> | void): TicketTemplate;
}

type EagerPlayerTicket = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PlayerTicket, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly playerAccountId: string;
  readonly ticketTemplateId: string;
  readonly assignedAt: string;
  readonly expiryDate: string;
  readonly status: TicketStatus | keyof typeof TicketStatus;
  readonly usedInGameId?: string | null;
  readonly ticketTemplate?: TicketTemplate | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPlayerTicket = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PlayerTicket, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly playerAccountId: string;
  readonly ticketTemplateId: string;
  readonly assignedAt: string;
  readonly expiryDate: string;
  readonly status: TicketStatus | keyof typeof TicketStatus;
  readonly usedInGameId?: string | null;
  readonly ticketTemplate: AsyncItem<TicketTemplate | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PlayerTicket = LazyLoading extends LazyLoadingDisabled ? EagerPlayerTicket : LazyPlayerTicket

export declare const PlayerTicket: (new (init: ModelInit<PlayerTicket>) => PlayerTicket) & {
  copyOf(source: PlayerTicket, mutator: (draft: MutableModel<PlayerTicket>) => MutableModel<PlayerTicket> | void): PlayerTicket;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly role: UserRole | keyof typeof UserRole;
  readonly preferences?: (UserPreference | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly role: UserRole | keyof typeof UserRole;
  readonly preferences: AsyncCollection<UserPreference>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerStaff = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Staff, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName?: string | null;
  readonly role: StaffRole | keyof typeof StaffRole;
  readonly assignedVenueId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStaff = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Staff, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName?: string | null;
  readonly role: StaffRole | keyof typeof StaffRole;
  readonly assignedVenueId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Staff = LazyLoading extends LazyLoadingDisabled ? EagerStaff : LazyStaff

export declare const Staff: (new (init: ModelInit<Staff>) => Staff) & {
  copyOf(source: Staff, mutator: (draft: MutableModel<Staff>) => MutableModel<Staff> | void): Staff;
}

type EagerUserPreference = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserPreference, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly page: string;
  readonly widget: string;
  readonly preference?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserPreference = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserPreference, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly page: string;
  readonly widget: string;
  readonly preference?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserPreference = LazyLoading extends LazyLoadingDisabled ? EagerUserPreference : LazyUserPreference

export declare const UserPreference: (new (init: ModelInit<UserPreference>) => UserPreference) & {
  copyOf(source: UserPreference, mutator: (draft: MutableModel<UserPreference>) => MutableModel<UserPreference> | void): UserPreference;
}

type EagerSocialPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SocialPost, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly socialAccountId: string;
  readonly content: string;
  readonly imageUrl?: string | null;
  readonly postedAt: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySocialPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SocialPost, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly socialAccountId: string;
  readonly content: string;
  readonly imageUrl?: string | null;
  readonly postedAt: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SocialPost = LazyLoading extends LazyLoadingDisabled ? EagerSocialPost : LazySocialPost

export declare const SocialPost: (new (init: ModelInit<SocialPost>) => SocialPost) & {
  copyOf(source: SocialPost, mutator: (draft: MutableModel<SocialPost>) => MutableModel<SocialPost> | void): SocialPost;
}

type EagerSocialAccount = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SocialAccount, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly platform: string;
  readonly accountName: string;
  readonly apiKey?: string | null;
  readonly apiSecret?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySocialAccount = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SocialAccount, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly platform: string;
  readonly accountName: string;
  readonly apiKey?: string | null;
  readonly apiSecret?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SocialAccount = LazyLoading extends LazyLoadingDisabled ? EagerSocialAccount : LazySocialAccount

export declare const SocialAccount: (new (init: ModelInit<SocialAccount>) => SocialAccount) & {
  copyOf(source: SocialAccount, mutator: (draft: MutableModel<SocialAccount>) => MutableModel<SocialAccount> | void): SocialAccount;
}

type EagerMarketingMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MarketingMessage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly subject?: string | null;
  readonly emailBody?: string | null;
  readonly smsBody?: string | null;
  readonly sentMessages?: (PlayerMarketingMessage | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMarketingMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MarketingMessage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly subject?: string | null;
  readonly emailBody?: string | null;
  readonly smsBody?: string | null;
  readonly sentMessages: AsyncCollection<PlayerMarketingMessage>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MarketingMessage = LazyLoading extends LazyLoadingDisabled ? EagerMarketingMessage : LazyMarketingMessage

export declare const MarketingMessage: (new (init: ModelInit<MarketingMessage>) => MarketingMessage) & {
  copyOf(source: MarketingMessage, mutator: (draft: MutableModel<MarketingMessage>) => MutableModel<MarketingMessage> | void): MarketingMessage;
}