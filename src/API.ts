/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type DataSync = {
  __typename: "DataSync",
  id: string,
  syncedAt: string,
  method: SyncMethod,
  sourceUrl?: string | null,
  title?: string | null,
  content?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export enum SyncMethod {
  SCRAPE = "SCRAPE",
  API = "API",
  MANUAL = "MANUAL",
}


export type CreateDataSyncInput = {
  id?: string | null,
  syncedAt: string,
  method: SyncMethod,
  sourceUrl?: string | null,
  title?: string | null,
  content?: string | null,
  _version?: number | null,
};

export type ModelDataSyncConditionInput = {
  syncedAt?: ModelStringInput | null,
  method?: ModelSyncMethodInput | null,
  sourceUrl?: ModelStringInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelDataSyncConditionInput | null > | null,
  or?: Array< ModelDataSyncConditionInput | null > | null,
  not?: ModelDataSyncConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelSyncMethodInput = {
  eq?: SyncMethod | null,
  ne?: SyncMethod | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateDataSyncInput = {
  id: string,
  syncedAt?: string | null,
  method?: SyncMethod | null,
  sourceUrl?: string | null,
  title?: string | null,
  content?: string | null,
  _version?: number | null,
};

export type DeleteDataSyncInput = {
  id: string,
  _version?: number | null,
};

export type CreateAssetInput = {
  id?: string | null,
  name: string,
  type: string,
  condition: AssetCondition,
  acquiredDate: string,
  lastCheckedDate: string,
  venueId: string,
  _version?: number | null,
};

export enum AssetCondition {
  NEW = "NEW",
  GOOD = "GOOD",
  FAIR = "FAIR",
  POOR = "POOR",
  RETIRED = "RETIRED",
}


export type ModelAssetConditionInput = {
  eq?: AssetCondition | null,
  ne?: AssetCondition | null,
};

export type Asset = {
  __typename: "Asset",
  id: string,
  name: string,
  type: string,
  condition: AssetCondition,
  acquiredDate: string,
  lastCheckedDate: string,
  venueId: string,
  venue?: Venue | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Venue = {
  __typename: "Venue",
  id: string,
  name: string,
  address?: string | null,
  city?: string | null,
  country?: string | null,
  details?: VenueDetails | null,
  assets?: ModelAssetConnection | null,
  games?: ModelGameConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  venueDetailsId?: string | null,
};

export type VenueDetails = {
  __typename: "VenueDetails",
  id: string,
  venueId: string,
  startDate: string,
  status: VenueStatus,
  lastCustomerSuccessVisit?: string | null,
  totalGamesHeld?: number | null,
  averagePlayersPerGame?: number | null,
  gameNights?: Array< string | null > | null,
  venue?: Venue | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export enum VenueStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  PENDING = "PENDING",
}


export type ModelAssetConnection = {
  __typename: "ModelAssetConnection",
  items:  Array<Asset | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelGameConnection = {
  __typename: "ModelGameConnection",
  items:  Array<Game | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Game = {
  __typename: "Game",
  id: string,
  name: string,
  type: GameType,
  status: GameStatus,
  gameDateTime: string,
  venueId: string,
  seriesName?: string | null,
  isAdHoc?: boolean | null,
  tournamentStructureId?: string | null,
  cashStructureId?: string | null,
  venue?: Venue | null,
  tournamentStructure?: TournamentStructure | null,
  cashStructure?: CashStructure | null,
  playerResults?: ModelPlayerResultConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export enum GameType {
  TOURNAMENT = "TOURNAMENT",
  CASH_GAME = "CASH_GAME",
}


export enum GameStatus {
  SCHEDULED = "SCHEDULED",
  LIVE = "LIVE",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}


export type TournamentStructure = {
  __typename: "TournamentStructure",
  id: string,
  name: string,
  type: TournamentType,
  buyIn: number,
  rake: number,
  startingStack: number,
  levels?: ModelTournamentLevelConnection | null,
  games?: ModelGameConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export enum TournamentType {
  FREEZEOUT = "FREEZEOUT",
  REBUY = "REBUY",
  SATELLITE = "SATELLITE",
  DEEPSTACK = "DEEPSTACK",
}


export type ModelTournamentLevelConnection = {
  __typename: "ModelTournamentLevelConnection",
  items:  Array<TournamentLevel | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type TournamentLevel = {
  __typename: "TournamentLevel",
  id: string,
  structureId: string,
  levelNumber: number,
  durationMinutes: number,
  smallBlind: number,
  bigBlind: number,
  ante?: number | null,
  breakMinutes?: number | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type CashStructure = {
  __typename: "CashStructure",
  id: string,
  name: string,
  smallBlind: number,
  bigBlind: number,
  minBuyIn: number,
  maxBuyIn: number,
  rakeStructureId: string,
  rakeStructure?: RakeStructure | null,
  games?: ModelGameConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type RakeStructure = {
  __typename: "RakeStructure",
  id: string,
  name: string,
  rakePercentage: number,
  maxRake: number,
  cashStructures?: ModelCashStructureConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelCashStructureConnection = {
  __typename: "ModelCashStructureConnection",
  items:  Array<CashStructure | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPlayerResultConnection = {
  __typename: "ModelPlayerResultConnection",
  items:  Array<PlayerResult | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type PlayerResult = {
  __typename: "PlayerResult",
  id: string,
  playerAccountId: string,
  gameId: string,
  finishingPlace?: number | null,
  prizeWon?: number | null,
  totalRunners?: number | null,
  game?: Game | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateAssetInput = {
  id: string,
  name?: string | null,
  type?: string | null,
  condition?: AssetCondition | null,
  acquiredDate?: string | null,
  lastCheckedDate?: string | null,
  venueId?: string | null,
  _version?: number | null,
};

export type DeleteAssetInput = {
  id: string,
  _version?: number | null,
};

export type CreateVenueInput = {
  id?: string | null,
  name: string,
  address?: string | null,
  city?: string | null,
  country?: string | null,
  _version?: number | null,
  venueDetailsId?: string | null,
};

export type ModelVenueConditionInput = {
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  city?: ModelStringInput | null,
  country?: ModelStringInput | null,
  and?: Array< ModelVenueConditionInput | null > | null,
  or?: Array< ModelVenueConditionInput | null > | null,
  not?: ModelVenueConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  venueDetailsId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateVenueInput = {
  id: string,
  name?: string | null,
  address?: string | null,
  city?: string | null,
  country?: string | null,
  _version?: number | null,
  venueDetailsId?: string | null,
};

export type DeleteVenueInput = {
  id: string,
  _version?: number | null,
};

export type CreateVenueDetailsInput = {
  id?: string | null,
  venueId: string,
  startDate: string,
  status: VenueStatus,
  lastCustomerSuccessVisit?: string | null,
  totalGamesHeld?: number | null,
  averagePlayersPerGame?: number | null,
  gameNights?: Array< string | null > | null,
  _version?: number | null,
};

export type ModelVenueDetailsConditionInput = {
  venueId?: ModelIDInput | null,
  startDate?: ModelStringInput | null,
  status?: ModelVenueStatusInput | null,
  lastCustomerSuccessVisit?: ModelStringInput | null,
  totalGamesHeld?: ModelIntInput | null,
  averagePlayersPerGame?: ModelFloatInput | null,
  gameNights?: ModelStringInput | null,
  and?: Array< ModelVenueDetailsConditionInput | null > | null,
  or?: Array< ModelVenueDetailsConditionInput | null > | null,
  not?: ModelVenueDetailsConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelVenueStatusInput = {
  eq?: VenueStatus | null,
  ne?: VenueStatus | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateVenueDetailsInput = {
  id: string,
  venueId?: string | null,
  startDate?: string | null,
  status?: VenueStatus | null,
  lastCustomerSuccessVisit?: string | null,
  totalGamesHeld?: number | null,
  averagePlayersPerGame?: number | null,
  gameNights?: Array< string | null > | null,
  _version?: number | null,
};

export type DeleteVenueDetailsInput = {
  id: string,
  _version?: number | null,
};

export type CreateGameInput = {
  id?: string | null,
  name: string,
  type: GameType,
  status: GameStatus,
  gameDateTime: string,
  venueId: string,
  seriesName?: string | null,
  isAdHoc?: boolean | null,
  tournamentStructureId?: string | null,
  cashStructureId?: string | null,
  _version?: number | null,
};

export type ModelGameConditionInput = {
  name?: ModelStringInput | null,
  type?: ModelGameTypeInput | null,
  status?: ModelGameStatusInput | null,
  gameDateTime?: ModelStringInput | null,
  venueId?: ModelIDInput | null,
  seriesName?: ModelStringInput | null,
  isAdHoc?: ModelBooleanInput | null,
  tournamentStructureId?: ModelIDInput | null,
  cashStructureId?: ModelIDInput | null,
  and?: Array< ModelGameConditionInput | null > | null,
  or?: Array< ModelGameConditionInput | null > | null,
  not?: ModelGameConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelGameTypeInput = {
  eq?: GameType | null,
  ne?: GameType | null,
};

export type ModelGameStatusInput = {
  eq?: GameStatus | null,
  ne?: GameStatus | null,
};

export type UpdateGameInput = {
  id: string,
  name?: string | null,
  type?: GameType | null,
  status?: GameStatus | null,
  gameDateTime?: string | null,
  venueId?: string | null,
  seriesName?: string | null,
  isAdHoc?: boolean | null,
  tournamentStructureId?: string | null,
  cashStructureId?: string | null,
  _version?: number | null,
};

export type DeleteGameInput = {
  id: string,
  _version?: number | null,
};

export type CreateTournamentStructureInput = {
  id?: string | null,
  name: string,
  type: TournamentType,
  buyIn: number,
  rake: number,
  startingStack: number,
  _version?: number | null,
};

export type ModelTournamentStructureConditionInput = {
  name?: ModelStringInput | null,
  type?: ModelTournamentTypeInput | null,
  buyIn?: ModelFloatInput | null,
  rake?: ModelFloatInput | null,
  startingStack?: ModelIntInput | null,
  and?: Array< ModelTournamentStructureConditionInput | null > | null,
  or?: Array< ModelTournamentStructureConditionInput | null > | null,
  not?: ModelTournamentStructureConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelTournamentTypeInput = {
  eq?: TournamentType | null,
  ne?: TournamentType | null,
};

export type UpdateTournamentStructureInput = {
  id: string,
  name?: string | null,
  type?: TournamentType | null,
  buyIn?: number | null,
  rake?: number | null,
  startingStack?: number | null,
  _version?: number | null,
};

export type DeleteTournamentStructureInput = {
  id: string,
  _version?: number | null,
};

export type CreateTournamentLevelInput = {
  id?: string | null,
  structureId: string,
  levelNumber: number,
  durationMinutes: number,
  smallBlind: number,
  bigBlind: number,
  ante?: number | null,
  breakMinutes?: number | null,
  _version?: number | null,
};

export type ModelTournamentLevelConditionInput = {
  structureId?: ModelIDInput | null,
  levelNumber?: ModelIntInput | null,
  durationMinutes?: ModelIntInput | null,
  smallBlind?: ModelIntInput | null,
  bigBlind?: ModelIntInput | null,
  ante?: ModelIntInput | null,
  breakMinutes?: ModelIntInput | null,
  and?: Array< ModelTournamentLevelConditionInput | null > | null,
  or?: Array< ModelTournamentLevelConditionInput | null > | null,
  not?: ModelTournamentLevelConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateTournamentLevelInput = {
  id: string,
  structureId?: string | null,
  levelNumber?: number | null,
  durationMinutes?: number | null,
  smallBlind?: number | null,
  bigBlind?: number | null,
  ante?: number | null,
  breakMinutes?: number | null,
  _version?: number | null,
};

export type DeleteTournamentLevelInput = {
  id: string,
  _version?: number | null,
};

export type CreateRakeStructureInput = {
  id?: string | null,
  name: string,
  rakePercentage: number,
  maxRake: number,
  _version?: number | null,
};

export type ModelRakeStructureConditionInput = {
  name?: ModelStringInput | null,
  rakePercentage?: ModelFloatInput | null,
  maxRake?: ModelFloatInput | null,
  and?: Array< ModelRakeStructureConditionInput | null > | null,
  or?: Array< ModelRakeStructureConditionInput | null > | null,
  not?: ModelRakeStructureConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateRakeStructureInput = {
  id: string,
  name?: string | null,
  rakePercentage?: number | null,
  maxRake?: number | null,
  _version?: number | null,
};

export type DeleteRakeStructureInput = {
  id: string,
  _version?: number | null,
};

export type CreateCashStructureInput = {
  id?: string | null,
  name: string,
  smallBlind: number,
  bigBlind: number,
  minBuyIn: number,
  maxBuyIn: number,
  rakeStructureId: string,
  _version?: number | null,
};

export type ModelCashStructureConditionInput = {
  name?: ModelStringInput | null,
  smallBlind?: ModelFloatInput | null,
  bigBlind?: ModelFloatInput | null,
  minBuyIn?: ModelFloatInput | null,
  maxBuyIn?: ModelFloatInput | null,
  rakeStructureId?: ModelIDInput | null,
  and?: Array< ModelCashStructureConditionInput | null > | null,
  or?: Array< ModelCashStructureConditionInput | null > | null,
  not?: ModelCashStructureConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateCashStructureInput = {
  id: string,
  name?: string | null,
  smallBlind?: number | null,
  bigBlind?: number | null,
  minBuyIn?: number | null,
  maxBuyIn?: number | null,
  rakeStructureId?: string | null,
  _version?: number | null,
};

export type DeleteCashStructureInput = {
  id: string,
  _version?: number | null,
};

export type CreatePlayerInput = {
  id?: string | null,
  firstName: string,
  lastName?: string | null,
  email?: string | null,
  phone?: string | null,
  registrationVenueId: string,
  _version?: number | null,
  playerAccountId?: string | null,
};

export type ModelPlayerConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  registrationVenueId?: ModelIDInput | null,
  and?: Array< ModelPlayerConditionInput | null > | null,
  or?: Array< ModelPlayerConditionInput | null > | null,
  not?: ModelPlayerConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  playerAccountId?: ModelIDInput | null,
};

export type Player = {
  __typename: "Player",
  id: string,
  firstName: string,
  lastName?: string | null,
  email?: string | null,
  phone?: string | null,
  registrationVenueId: string,
  account?: PlayerAccount | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  playerAccountId?: string | null,
};

export type PlayerAccount = {
  __typename: "PlayerAccount",
  id: string,
  playerId: string,
  creationDate: string,
  status: PlayerAccountStatus,
  category: PlayerAccountCategory,
  tier?: string | null,
  totalGamesPlayed?: number | null,
  averageBuyIn?: number | null,
  lastPlayedDate?: string | null,
  venuesVisited?: Array< string | null > | null,
  transactions?: ModelPlayerTransactionConnection | null,
  results?: ModelPlayerResultConnection | null,
  tickets?: ModelPlayerTicketConnection | null,
  marketingPreferences?: PlayerMarketingPreferences | null,
  player?: Player | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  playerAccountMarketingPreferencesId?: string | null,
};

export enum PlayerAccountStatus {
  ACTIVE = "ACTIVE",
  SUSPENDED = "SUSPENDED",
  PENDING_VERIFICATION = "PENDING_VERIFICATION",
}


export enum PlayerAccountCategory {
  NEW = "NEW",
  RECREATIONAL = "RECREATIONAL",
  REGULAR = "REGULAR",
  VIP = "VIP",
  LAPSED = "LAPSED",
}


export type ModelPlayerTransactionConnection = {
  __typename: "ModelPlayerTransactionConnection",
  items:  Array<PlayerTransaction | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type PlayerTransaction = {
  __typename: "PlayerTransaction",
  id: string,
  playerAccountId: string,
  type: TransactionType,
  amount: number,
  transactionDate: string,
  notes?: string | null,
  gameId?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export enum TransactionType {
  BUY_IN = "BUY_IN",
  DEPOSIT = "DEPOSIT",
  TICKET_AWARD = "TICKET_AWARD",
  TICKET_REDEMPTION = "TICKET_REDEMPTION",
  WITHDRAWAL = "WITHDRAWAL",
}


export type ModelPlayerTicketConnection = {
  __typename: "ModelPlayerTicketConnection",
  items:  Array<PlayerTicket | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type PlayerTicket = {
  __typename: "PlayerTicket",
  id: string,
  playerAccountId: string,
  ticketTemplateId: string,
  assignedAt: string,
  expiryDate: string,
  status: TicketStatus,
  usedInGameId?: string | null,
  ticketTemplate?: TicketTemplate | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export enum TicketStatus {
  ACTIVE = "ACTIVE",
  EXPIRED = "EXPIRED",
  USED = "USED",
}


export type TicketTemplate = {
  __typename: "TicketTemplate",
  id: string,
  name: string,
  description?: string | null,
  value: number,
  validityDays: number,
  originGameId?: string | null,
  targetGameId?: string | null,
  playerTickets?: ModelPlayerTicketConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type PlayerMarketingPreferences = {
  __typename: "PlayerMarketingPreferences",
  id: string,
  playerAccountId: string,
  optOutSms?: boolean | null,
  optOutEmail?: boolean | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdatePlayerInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  phone?: string | null,
  registrationVenueId?: string | null,
  _version?: number | null,
  playerAccountId?: string | null,
};

export type DeletePlayerInput = {
  id: string,
  _version?: number | null,
};

export type CreatePlayerAccountInput = {
  id?: string | null,
  playerId: string,
  creationDate: string,
  status: PlayerAccountStatus,
  category: PlayerAccountCategory,
  tier?: string | null,
  totalGamesPlayed?: number | null,
  averageBuyIn?: number | null,
  lastPlayedDate?: string | null,
  venuesVisited?: Array< string | null > | null,
  _version?: number | null,
  playerAccountMarketingPreferencesId?: string | null,
};

export type ModelPlayerAccountConditionInput = {
  playerId?: ModelIDInput | null,
  creationDate?: ModelStringInput | null,
  status?: ModelPlayerAccountStatusInput | null,
  category?: ModelPlayerAccountCategoryInput | null,
  tier?: ModelStringInput | null,
  totalGamesPlayed?: ModelIntInput | null,
  averageBuyIn?: ModelFloatInput | null,
  lastPlayedDate?: ModelStringInput | null,
  venuesVisited?: ModelIDInput | null,
  and?: Array< ModelPlayerAccountConditionInput | null > | null,
  or?: Array< ModelPlayerAccountConditionInput | null > | null,
  not?: ModelPlayerAccountConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  playerAccountMarketingPreferencesId?: ModelIDInput | null,
};

export type ModelPlayerAccountStatusInput = {
  eq?: PlayerAccountStatus | null,
  ne?: PlayerAccountStatus | null,
};

export type ModelPlayerAccountCategoryInput = {
  eq?: PlayerAccountCategory | null,
  ne?: PlayerAccountCategory | null,
};

export type UpdatePlayerAccountInput = {
  id: string,
  playerId?: string | null,
  creationDate?: string | null,
  status?: PlayerAccountStatus | null,
  category?: PlayerAccountCategory | null,
  tier?: string | null,
  totalGamesPlayed?: number | null,
  averageBuyIn?: number | null,
  lastPlayedDate?: string | null,
  venuesVisited?: Array< string | null > | null,
  _version?: number | null,
  playerAccountMarketingPreferencesId?: string | null,
};

export type DeletePlayerAccountInput = {
  id: string,
  _version?: number | null,
};

export type CreatePlayerTransactionInput = {
  id?: string | null,
  playerAccountId: string,
  type: TransactionType,
  amount: number,
  transactionDate: string,
  notes?: string | null,
  gameId?: string | null,
  _version?: number | null,
};

export type ModelPlayerTransactionConditionInput = {
  playerAccountId?: ModelIDInput | null,
  type?: ModelTransactionTypeInput | null,
  amount?: ModelFloatInput | null,
  transactionDate?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  gameId?: ModelIDInput | null,
  and?: Array< ModelPlayerTransactionConditionInput | null > | null,
  or?: Array< ModelPlayerTransactionConditionInput | null > | null,
  not?: ModelPlayerTransactionConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelTransactionTypeInput = {
  eq?: TransactionType | null,
  ne?: TransactionType | null,
};

export type UpdatePlayerTransactionInput = {
  id: string,
  playerAccountId?: string | null,
  type?: TransactionType | null,
  amount?: number | null,
  transactionDate?: string | null,
  notes?: string | null,
  gameId?: string | null,
  _version?: number | null,
};

export type DeletePlayerTransactionInput = {
  id: string,
  _version?: number | null,
};

export type CreatePlayerResultInput = {
  id?: string | null,
  playerAccountId: string,
  gameId: string,
  finishingPlace?: number | null,
  prizeWon?: number | null,
  totalRunners?: number | null,
  _version?: number | null,
};

export type ModelPlayerResultConditionInput = {
  playerAccountId?: ModelIDInput | null,
  gameId?: ModelIDInput | null,
  finishingPlace?: ModelIntInput | null,
  prizeWon?: ModelFloatInput | null,
  totalRunners?: ModelIntInput | null,
  and?: Array< ModelPlayerResultConditionInput | null > | null,
  or?: Array< ModelPlayerResultConditionInput | null > | null,
  not?: ModelPlayerResultConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdatePlayerResultInput = {
  id: string,
  playerAccountId?: string | null,
  gameId?: string | null,
  finishingPlace?: number | null,
  prizeWon?: number | null,
  totalRunners?: number | null,
  _version?: number | null,
};

export type DeletePlayerResultInput = {
  id: string,
  _version?: number | null,
};

export type CreatePlayerMarketingMessageInput = {
  id?: string | null,
  playerId: string,
  marketingMessageId: string,
  status: MessageStatus,
  sentAt: string,
  _version?: number | null,
};

export enum MessageStatus {
  SENT = "SENT",
  DELIVERED = "DELIVERED",
  FAILED = "FAILED",
  READ = "READ",
}


export type ModelPlayerMarketingMessageConditionInput = {
  playerId?: ModelIDInput | null,
  marketingMessageId?: ModelIDInput | null,
  status?: ModelMessageStatusInput | null,
  sentAt?: ModelStringInput | null,
  and?: Array< ModelPlayerMarketingMessageConditionInput | null > | null,
  or?: Array< ModelPlayerMarketingMessageConditionInput | null > | null,
  not?: ModelPlayerMarketingMessageConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelMessageStatusInput = {
  eq?: MessageStatus | null,
  ne?: MessageStatus | null,
};

export type PlayerMarketingMessage = {
  __typename: "PlayerMarketingMessage",
  id: string,
  playerId: string,
  marketingMessageId: string,
  status: MessageStatus,
  sentAt: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdatePlayerMarketingMessageInput = {
  id: string,
  playerId?: string | null,
  marketingMessageId?: string | null,
  status?: MessageStatus | null,
  sentAt?: string | null,
  _version?: number | null,
};

export type DeletePlayerMarketingMessageInput = {
  id: string,
  _version?: number | null,
};

export type CreatePlayerMarketingPreferencesInput = {
  id?: string | null,
  playerAccountId: string,
  optOutSms?: boolean | null,
  optOutEmail?: boolean | null,
  _version?: number | null,
};

export type ModelPlayerMarketingPreferencesConditionInput = {
  playerAccountId?: ModelIDInput | null,
  optOutSms?: ModelBooleanInput | null,
  optOutEmail?: ModelBooleanInput | null,
  and?: Array< ModelPlayerMarketingPreferencesConditionInput | null > | null,
  or?: Array< ModelPlayerMarketingPreferencesConditionInput | null > | null,
  not?: ModelPlayerMarketingPreferencesConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdatePlayerMarketingPreferencesInput = {
  id: string,
  playerAccountId?: string | null,
  optOutSms?: boolean | null,
  optOutEmail?: boolean | null,
  _version?: number | null,
};

export type DeletePlayerMarketingPreferencesInput = {
  id: string,
  _version?: number | null,
};

export type CreateTicketTemplateInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  value: number,
  validityDays: number,
  originGameId?: string | null,
  targetGameId?: string | null,
  _version?: number | null,
};

export type ModelTicketTemplateConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  value?: ModelFloatInput | null,
  validityDays?: ModelIntInput | null,
  originGameId?: ModelIDInput | null,
  targetGameId?: ModelIDInput | null,
  and?: Array< ModelTicketTemplateConditionInput | null > | null,
  or?: Array< ModelTicketTemplateConditionInput | null > | null,
  not?: ModelTicketTemplateConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateTicketTemplateInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  value?: number | null,
  validityDays?: number | null,
  originGameId?: string | null,
  targetGameId?: string | null,
  _version?: number | null,
};

export type DeleteTicketTemplateInput = {
  id: string,
  _version?: number | null,
};

export type CreatePlayerTicketInput = {
  id?: string | null,
  playerAccountId: string,
  ticketTemplateId: string,
  assignedAt: string,
  expiryDate: string,
  status: TicketStatus,
  usedInGameId?: string | null,
  _version?: number | null,
};

export type ModelPlayerTicketConditionInput = {
  playerAccountId?: ModelIDInput | null,
  ticketTemplateId?: ModelIDInput | null,
  assignedAt?: ModelStringInput | null,
  expiryDate?: ModelStringInput | null,
  status?: ModelTicketStatusInput | null,
  usedInGameId?: ModelIDInput | null,
  and?: Array< ModelPlayerTicketConditionInput | null > | null,
  or?: Array< ModelPlayerTicketConditionInput | null > | null,
  not?: ModelPlayerTicketConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelTicketStatusInput = {
  eq?: TicketStatus | null,
  ne?: TicketStatus | null,
};

export type UpdatePlayerTicketInput = {
  id: string,
  playerAccountId?: string | null,
  ticketTemplateId?: string | null,
  assignedAt?: string | null,
  expiryDate?: string | null,
  status?: TicketStatus | null,
  usedInGameId?: string | null,
  _version?: number | null,
};

export type DeletePlayerTicketInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  username: string,
  email: string,
  role: UserRole,
  _version?: number | null,
};

export enum UserRole {
  SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
  VENUE_MANAGER = "VENUE_MANAGER",
  TOURNAMENT_DIRECTOR = "TOURNAMENT_DIRECTOR",
  MARKETING = "MARKETING",
}


export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  role?: ModelUserRoleInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  id?: ModelStringInput | null,
};

export type ModelUserRoleInput = {
  eq?: UserRole | null,
  ne?: UserRole | null,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  email: string,
  role: UserRole,
  preferences?: ModelUserPreferenceConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelUserPreferenceConnection = {
  __typename: "ModelUserPreferenceConnection",
  items:  Array<UserPreference | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UserPreference = {
  __typename: "UserPreference",
  id: string,
  userId: string,
  page: string,
  widget: string,
  preference?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  email?: string | null,
  role?: UserRole | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateStaffInput = {
  id?: string | null,
  firstName: string,
  lastName?: string | null,
  role: StaffRole,
  assignedVenueId?: string | null,
  _version?: number | null,
};

export enum StaffRole {
  DEALER = "DEALER",
  FLOOR_MANAGER = "FLOOR_MANAGER",
  SERVICE = "SERVICE",
  TOURNAMENT_DIRECTOR = "TOURNAMENT_DIRECTOR",
}


export type ModelStaffConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  role?: ModelStaffRoleInput | null,
  assignedVenueId?: ModelIDInput | null,
  and?: Array< ModelStaffConditionInput | null > | null,
  or?: Array< ModelStaffConditionInput | null > | null,
  not?: ModelStaffConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStaffRoleInput = {
  eq?: StaffRole | null,
  ne?: StaffRole | null,
};

export type Staff = {
  __typename: "Staff",
  id: string,
  firstName: string,
  lastName?: string | null,
  role: StaffRole,
  assignedVenueId?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateStaffInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  role?: StaffRole | null,
  assignedVenueId?: string | null,
  _version?: number | null,
};

export type DeleteStaffInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserPreferenceInput = {
  id?: string | null,
  userId: string,
  page: string,
  widget: string,
  preference?: string | null,
  _version?: number | null,
};

export type ModelUserPreferenceConditionInput = {
  userId?: ModelIDInput | null,
  page?: ModelStringInput | null,
  widget?: ModelStringInput | null,
  preference?: ModelStringInput | null,
  and?: Array< ModelUserPreferenceConditionInput | null > | null,
  or?: Array< ModelUserPreferenceConditionInput | null > | null,
  not?: ModelUserPreferenceConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateUserPreferenceInput = {
  id: string,
  userId?: string | null,
  page?: string | null,
  widget?: string | null,
  preference?: string | null,
  _version?: number | null,
};

export type DeleteUserPreferenceInput = {
  id: string,
  _version?: number | null,
};

export type CreateSocialPostInput = {
  id?: string | null,
  socialAccountId: string,
  content: string,
  imageUrl?: string | null,
  postedAt: string,
  _version?: number | null,
};

export type ModelSocialPostConditionInput = {
  socialAccountId?: ModelIDInput | null,
  content?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  postedAt?: ModelStringInput | null,
  and?: Array< ModelSocialPostConditionInput | null > | null,
  or?: Array< ModelSocialPostConditionInput | null > | null,
  not?: ModelSocialPostConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type SocialPost = {
  __typename: "SocialPost",
  id: string,
  socialAccountId: string,
  content: string,
  imageUrl?: string | null,
  postedAt: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateSocialPostInput = {
  id: string,
  socialAccountId?: string | null,
  content?: string | null,
  imageUrl?: string | null,
  postedAt?: string | null,
  _version?: number | null,
};

export type DeleteSocialPostInput = {
  id: string,
  _version?: number | null,
};

export type CreateSocialAccountInput = {
  id?: string | null,
  platform: string,
  accountName: string,
  apiKey?: string | null,
  apiSecret?: string | null,
  _version?: number | null,
};

export type ModelSocialAccountConditionInput = {
  platform?: ModelStringInput | null,
  accountName?: ModelStringInput | null,
  apiKey?: ModelStringInput | null,
  apiSecret?: ModelStringInput | null,
  and?: Array< ModelSocialAccountConditionInput | null > | null,
  or?: Array< ModelSocialAccountConditionInput | null > | null,
  not?: ModelSocialAccountConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type SocialAccount = {
  __typename: "SocialAccount",
  id: string,
  platform: string,
  accountName: string,
  apiKey?: string | null,
  apiSecret?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateSocialAccountInput = {
  id: string,
  platform?: string | null,
  accountName?: string | null,
  apiKey?: string | null,
  apiSecret?: string | null,
  _version?: number | null,
};

export type DeleteSocialAccountInput = {
  id: string,
  _version?: number | null,
};

export type CreateMarketingMessageInput = {
  id?: string | null,
  name: string,
  subject?: string | null,
  emailBody?: string | null,
  smsBody?: string | null,
  _version?: number | null,
};

export type ModelMarketingMessageConditionInput = {
  name?: ModelStringInput | null,
  subject?: ModelStringInput | null,
  emailBody?: ModelStringInput | null,
  smsBody?: ModelStringInput | null,
  and?: Array< ModelMarketingMessageConditionInput | null > | null,
  or?: Array< ModelMarketingMessageConditionInput | null > | null,
  not?: ModelMarketingMessageConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type MarketingMessage = {
  __typename: "MarketingMessage",
  id: string,
  name: string,
  subject?: string | null,
  emailBody?: string | null,
  smsBody?: string | null,
  sentMessages?: ModelPlayerMarketingMessageConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelPlayerMarketingMessageConnection = {
  __typename: "ModelPlayerMarketingMessageConnection",
  items:  Array<PlayerMarketingMessage | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateMarketingMessageInput = {
  id: string,
  name?: string | null,
  subject?: string | null,
  emailBody?: string | null,
  smsBody?: string | null,
  _version?: number | null,
};

export type DeleteMarketingMessageInput = {
  id: string,
  _version?: number | null,
};

export type ModelDataSyncFilterInput = {
  id?: ModelIDInput | null,
  syncedAt?: ModelStringInput | null,
  method?: ModelSyncMethodInput | null,
  sourceUrl?: ModelStringInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDataSyncFilterInput | null > | null,
  or?: Array< ModelDataSyncFilterInput | null > | null,
  not?: ModelDataSyncFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelDataSyncConnection = {
  __typename: "ModelDataSyncConnection",
  items:  Array<DataSync | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelAssetFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  type?: ModelStringInput | null,
  condition?: ModelAssetConditionInput | null,
  acquiredDate?: ModelStringInput | null,
  lastCheckedDate?: ModelStringInput | null,
  venueId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAssetFilterInput | null > | null,
  or?: Array< ModelAssetFilterInput | null > | null,
  not?: ModelAssetFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelVenueFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  city?: ModelStringInput | null,
  country?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelVenueFilterInput | null > | null,
  or?: Array< ModelVenueFilterInput | null > | null,
  not?: ModelVenueFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  venueDetailsId?: ModelIDInput | null,
};

export type ModelVenueConnection = {
  __typename: "ModelVenueConnection",
  items:  Array<Venue | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelVenueDetailsFilterInput = {
  id?: ModelIDInput | null,
  venueId?: ModelIDInput | null,
  startDate?: ModelStringInput | null,
  status?: ModelVenueStatusInput | null,
  lastCustomerSuccessVisit?: ModelStringInput | null,
  totalGamesHeld?: ModelIntInput | null,
  averagePlayersPerGame?: ModelFloatInput | null,
  gameNights?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelVenueDetailsFilterInput | null > | null,
  or?: Array< ModelVenueDetailsFilterInput | null > | null,
  not?: ModelVenueDetailsFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelVenueDetailsConnection = {
  __typename: "ModelVenueDetailsConnection",
  items:  Array<VenueDetails | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelGameFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  type?: ModelGameTypeInput | null,
  status?: ModelGameStatusInput | null,
  gameDateTime?: ModelStringInput | null,
  venueId?: ModelIDInput | null,
  seriesName?: ModelStringInput | null,
  isAdHoc?: ModelBooleanInput | null,
  tournamentStructureId?: ModelIDInput | null,
  cashStructureId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelGameFilterInput | null > | null,
  or?: Array< ModelGameFilterInput | null > | null,
  not?: ModelGameFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelTournamentStructureFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  type?: ModelTournamentTypeInput | null,
  buyIn?: ModelFloatInput | null,
  rake?: ModelFloatInput | null,
  startingStack?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTournamentStructureFilterInput | null > | null,
  or?: Array< ModelTournamentStructureFilterInput | null > | null,
  not?: ModelTournamentStructureFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelTournamentStructureConnection = {
  __typename: "ModelTournamentStructureConnection",
  items:  Array<TournamentStructure | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelTournamentLevelFilterInput = {
  id?: ModelIDInput | null,
  structureId?: ModelIDInput | null,
  levelNumber?: ModelIntInput | null,
  durationMinutes?: ModelIntInput | null,
  smallBlind?: ModelIntInput | null,
  bigBlind?: ModelIntInput | null,
  ante?: ModelIntInput | null,
  breakMinutes?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTournamentLevelFilterInput | null > | null,
  or?: Array< ModelTournamentLevelFilterInput | null > | null,
  not?: ModelTournamentLevelFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelRakeStructureFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  rakePercentage?: ModelFloatInput | null,
  maxRake?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRakeStructureFilterInput | null > | null,
  or?: Array< ModelRakeStructureFilterInput | null > | null,
  not?: ModelRakeStructureFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelRakeStructureConnection = {
  __typename: "ModelRakeStructureConnection",
  items:  Array<RakeStructure | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCashStructureFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  smallBlind?: ModelFloatInput | null,
  bigBlind?: ModelFloatInput | null,
  minBuyIn?: ModelFloatInput | null,
  maxBuyIn?: ModelFloatInput | null,
  rakeStructureId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCashStructureFilterInput | null > | null,
  or?: Array< ModelCashStructureFilterInput | null > | null,
  not?: ModelCashStructureFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelPlayerFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  registrationVenueId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPlayerFilterInput | null > | null,
  or?: Array< ModelPlayerFilterInput | null > | null,
  not?: ModelPlayerFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  playerAccountId?: ModelIDInput | null,
};

export type ModelPlayerConnection = {
  __typename: "ModelPlayerConnection",
  items:  Array<Player | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPlayerAccountFilterInput = {
  id?: ModelIDInput | null,
  playerId?: ModelIDInput | null,
  creationDate?: ModelStringInput | null,
  status?: ModelPlayerAccountStatusInput | null,
  category?: ModelPlayerAccountCategoryInput | null,
  tier?: ModelStringInput | null,
  totalGamesPlayed?: ModelIntInput | null,
  averageBuyIn?: ModelFloatInput | null,
  lastPlayedDate?: ModelStringInput | null,
  venuesVisited?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPlayerAccountFilterInput | null > | null,
  or?: Array< ModelPlayerAccountFilterInput | null > | null,
  not?: ModelPlayerAccountFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  playerAccountMarketingPreferencesId?: ModelIDInput | null,
};

export type ModelPlayerAccountConnection = {
  __typename: "ModelPlayerAccountConnection",
  items:  Array<PlayerAccount | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPlayerTransactionFilterInput = {
  id?: ModelIDInput | null,
  playerAccountId?: ModelIDInput | null,
  type?: ModelTransactionTypeInput | null,
  amount?: ModelFloatInput | null,
  transactionDate?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  gameId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPlayerTransactionFilterInput | null > | null,
  or?: Array< ModelPlayerTransactionFilterInput | null > | null,
  not?: ModelPlayerTransactionFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelPlayerResultFilterInput = {
  id?: ModelIDInput | null,
  playerAccountId?: ModelIDInput | null,
  gameId?: ModelIDInput | null,
  finishingPlace?: ModelIntInput | null,
  prizeWon?: ModelFloatInput | null,
  totalRunners?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPlayerResultFilterInput | null > | null,
  or?: Array< ModelPlayerResultFilterInput | null > | null,
  not?: ModelPlayerResultFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelPlayerMarketingMessageFilterInput = {
  id?: ModelIDInput | null,
  playerId?: ModelIDInput | null,
  marketingMessageId?: ModelIDInput | null,
  status?: ModelMessageStatusInput | null,
  sentAt?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPlayerMarketingMessageFilterInput | null > | null,
  or?: Array< ModelPlayerMarketingMessageFilterInput | null > | null,
  not?: ModelPlayerMarketingMessageFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelPlayerMarketingPreferencesFilterInput = {
  id?: ModelIDInput | null,
  playerAccountId?: ModelIDInput | null,
  optOutSms?: ModelBooleanInput | null,
  optOutEmail?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPlayerMarketingPreferencesFilterInput | null > | null,
  or?: Array< ModelPlayerMarketingPreferencesFilterInput | null > | null,
  not?: ModelPlayerMarketingPreferencesFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelPlayerMarketingPreferencesConnection = {
  __typename: "ModelPlayerMarketingPreferencesConnection",
  items:  Array<PlayerMarketingPreferences | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelTicketTemplateFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  value?: ModelFloatInput | null,
  validityDays?: ModelIntInput | null,
  originGameId?: ModelIDInput | null,
  targetGameId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTicketTemplateFilterInput | null > | null,
  or?: Array< ModelTicketTemplateFilterInput | null > | null,
  not?: ModelTicketTemplateFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelTicketTemplateConnection = {
  __typename: "ModelTicketTemplateConnection",
  items:  Array<TicketTemplate | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPlayerTicketFilterInput = {
  id?: ModelIDInput | null,
  playerAccountId?: ModelIDInput | null,
  ticketTemplateId?: ModelIDInput | null,
  assignedAt?: ModelStringInput | null,
  expiryDate?: ModelStringInput | null,
  status?: ModelTicketStatusInput | null,
  usedInGameId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPlayerTicketFilterInput | null > | null,
  or?: Array< ModelPlayerTicketFilterInput | null > | null,
  not?: ModelPlayerTicketFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  role?: ModelUserRoleInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelStaffFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  role?: ModelStaffRoleInput | null,
  assignedVenueId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStaffFilterInput | null > | null,
  or?: Array< ModelStaffFilterInput | null > | null,
  not?: ModelStaffFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelStaffConnection = {
  __typename: "ModelStaffConnection",
  items:  Array<Staff | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserPreferenceFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  page?: ModelStringInput | null,
  widget?: ModelStringInput | null,
  preference?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserPreferenceFilterInput | null > | null,
  or?: Array< ModelUserPreferenceFilterInput | null > | null,
  not?: ModelUserPreferenceFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSocialPostFilterInput = {
  id?: ModelIDInput | null,
  socialAccountId?: ModelIDInput | null,
  content?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  postedAt?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSocialPostFilterInput | null > | null,
  or?: Array< ModelSocialPostFilterInput | null > | null,
  not?: ModelSocialPostFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSocialPostConnection = {
  __typename: "ModelSocialPostConnection",
  items:  Array<SocialPost | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSocialAccountFilterInput = {
  id?: ModelIDInput | null,
  platform?: ModelStringInput | null,
  accountName?: ModelStringInput | null,
  apiKey?: ModelStringInput | null,
  apiSecret?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSocialAccountFilterInput | null > | null,
  or?: Array< ModelSocialAccountFilterInput | null > | null,
  not?: ModelSocialAccountFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSocialAccountConnection = {
  __typename: "ModelSocialAccountConnection",
  items:  Array<SocialAccount | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelMarketingMessageFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  subject?: ModelStringInput | null,
  emailBody?: ModelStringInput | null,
  smsBody?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMarketingMessageFilterInput | null > | null,
  or?: Array< ModelMarketingMessageFilterInput | null > | null,
  not?: ModelMarketingMessageFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelMarketingMessageConnection = {
  __typename: "ModelMarketingMessageConnection",
  items:  Array<MarketingMessage | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelSubscriptionDataSyncFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  syncedAt?: ModelSubscriptionStringInput | null,
  method?: ModelSubscriptionStringInput | null,
  sourceUrl?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDataSyncFilterInput | null > | null,
  or?: Array< ModelSubscriptionDataSyncFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionAssetFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  condition?: ModelSubscriptionStringInput | null,
  acquiredDate?: ModelSubscriptionStringInput | null,
  lastCheckedDate?: ModelSubscriptionStringInput | null,
  venueId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAssetFilterInput | null > | null,
  or?: Array< ModelSubscriptionAssetFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionVenueFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  city?: ModelSubscriptionStringInput | null,
  country?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionVenueFilterInput | null > | null,
  or?: Array< ModelSubscriptionVenueFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  venueDetailsId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionVenueDetailsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  venueId?: ModelSubscriptionIDInput | null,
  startDate?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  lastCustomerSuccessVisit?: ModelSubscriptionStringInput | null,
  totalGamesHeld?: ModelSubscriptionIntInput | null,
  averagePlayersPerGame?: ModelSubscriptionFloatInput | null,
  gameNights?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionVenueDetailsFilterInput | null > | null,
  or?: Array< ModelSubscriptionVenueDetailsFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionGameFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  gameDateTime?: ModelSubscriptionStringInput | null,
  venueId?: ModelSubscriptionIDInput | null,
  seriesName?: ModelSubscriptionStringInput | null,
  isAdHoc?: ModelSubscriptionBooleanInput | null,
  tournamentStructureId?: ModelSubscriptionIDInput | null,
  cashStructureId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGameFilterInput | null > | null,
  or?: Array< ModelSubscriptionGameFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionTournamentStructureFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  buyIn?: ModelSubscriptionFloatInput | null,
  rake?: ModelSubscriptionFloatInput | null,
  startingStack?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTournamentStructureFilterInput | null > | null,
  or?: Array< ModelSubscriptionTournamentStructureFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionTournamentLevelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  structureId?: ModelSubscriptionIDInput | null,
  levelNumber?: ModelSubscriptionIntInput | null,
  durationMinutes?: ModelSubscriptionIntInput | null,
  smallBlind?: ModelSubscriptionIntInput | null,
  bigBlind?: ModelSubscriptionIntInput | null,
  ante?: ModelSubscriptionIntInput | null,
  breakMinutes?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTournamentLevelFilterInput | null > | null,
  or?: Array< ModelSubscriptionTournamentLevelFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionRakeStructureFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  rakePercentage?: ModelSubscriptionFloatInput | null,
  maxRake?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRakeStructureFilterInput | null > | null,
  or?: Array< ModelSubscriptionRakeStructureFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionCashStructureFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  smallBlind?: ModelSubscriptionFloatInput | null,
  bigBlind?: ModelSubscriptionFloatInput | null,
  minBuyIn?: ModelSubscriptionFloatInput | null,
  maxBuyIn?: ModelSubscriptionFloatInput | null,
  rakeStructureId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCashStructureFilterInput | null > | null,
  or?: Array< ModelSubscriptionCashStructureFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionPlayerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  registrationVenueId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPlayerFilterInput | null > | null,
  or?: Array< ModelSubscriptionPlayerFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  playerAccountId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionPlayerAccountFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  playerId?: ModelSubscriptionIDInput | null,
  creationDate?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  tier?: ModelSubscriptionStringInput | null,
  totalGamesPlayed?: ModelSubscriptionIntInput | null,
  averageBuyIn?: ModelSubscriptionFloatInput | null,
  lastPlayedDate?: ModelSubscriptionStringInput | null,
  venuesVisited?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPlayerAccountFilterInput | null > | null,
  or?: Array< ModelSubscriptionPlayerAccountFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  playerAccountMarketingPreferencesId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionPlayerTransactionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  playerAccountId?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  amount?: ModelSubscriptionFloatInput | null,
  transactionDate?: ModelSubscriptionStringInput | null,
  notes?: ModelSubscriptionStringInput | null,
  gameId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPlayerTransactionFilterInput | null > | null,
  or?: Array< ModelSubscriptionPlayerTransactionFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionPlayerResultFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  playerAccountId?: ModelSubscriptionIDInput | null,
  gameId?: ModelSubscriptionIDInput | null,
  finishingPlace?: ModelSubscriptionIntInput | null,
  prizeWon?: ModelSubscriptionFloatInput | null,
  totalRunners?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPlayerResultFilterInput | null > | null,
  or?: Array< ModelSubscriptionPlayerResultFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionPlayerMarketingMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  playerId?: ModelSubscriptionIDInput | null,
  marketingMessageId?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  sentAt?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPlayerMarketingMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionPlayerMarketingMessageFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionPlayerMarketingPreferencesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  playerAccountId?: ModelSubscriptionIDInput | null,
  optOutSms?: ModelSubscriptionBooleanInput | null,
  optOutEmail?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPlayerMarketingPreferencesFilterInput | null > | null,
  or?: Array< ModelSubscriptionPlayerMarketingPreferencesFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionTicketTemplateFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionFloatInput | null,
  validityDays?: ModelSubscriptionIntInput | null,
  originGameId?: ModelSubscriptionIDInput | null,
  targetGameId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTicketTemplateFilterInput | null > | null,
  or?: Array< ModelSubscriptionTicketTemplateFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionPlayerTicketFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  playerAccountId?: ModelSubscriptionIDInput | null,
  ticketTemplateId?: ModelSubscriptionIDInput | null,
  assignedAt?: ModelSubscriptionStringInput | null,
  expiryDate?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  usedInGameId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPlayerTicketFilterInput | null > | null,
  or?: Array< ModelSubscriptionPlayerTicketFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  username?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  role?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  id?: ModelStringInput | null,
};

export type ModelSubscriptionStaffFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  role?: ModelSubscriptionStringInput | null,
  assignedVenueId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStaffFilterInput | null > | null,
  or?: Array< ModelSubscriptionStaffFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionUserPreferenceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  page?: ModelSubscriptionStringInput | null,
  widget?: ModelSubscriptionStringInput | null,
  preference?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserPreferenceFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserPreferenceFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  userId?: ModelStringInput | null,
};

export type ModelSubscriptionSocialPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  socialAccountId?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  imageUrl?: ModelSubscriptionStringInput | null,
  postedAt?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSocialPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionSocialPostFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionSocialAccountFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  platform?: ModelSubscriptionStringInput | null,
  accountName?: ModelSubscriptionStringInput | null,
  apiKey?: ModelSubscriptionStringInput | null,
  apiSecret?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSocialAccountFilterInput | null > | null,
  or?: Array< ModelSubscriptionSocialAccountFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionMarketingMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  subject?: ModelSubscriptionStringInput | null,
  emailBody?: ModelSubscriptionStringInput | null,
  smsBody?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMarketingMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionMarketingMessageFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ScrapeTournamentMutationVariables = {
  url: string,
  venueId: string,
};

export type ScrapeTournamentMutation = {
  scrapeTournament?:  {
    __typename: "DataSync",
    id: string,
    syncedAt: string,
    method: SyncMethod,
    sourceUrl?: string | null,
    title?: string | null,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateDataSyncMutationVariables = {
  input: CreateDataSyncInput,
  condition?: ModelDataSyncConditionInput | null,
};

export type CreateDataSyncMutation = {
  createDataSync?:  {
    __typename: "DataSync",
    id: string,
    syncedAt: string,
    method: SyncMethod,
    sourceUrl?: string | null,
    title?: string | null,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateDataSyncMutationVariables = {
  input: UpdateDataSyncInput,
  condition?: ModelDataSyncConditionInput | null,
};

export type UpdateDataSyncMutation = {
  updateDataSync?:  {
    __typename: "DataSync",
    id: string,
    syncedAt: string,
    method: SyncMethod,
    sourceUrl?: string | null,
    title?: string | null,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteDataSyncMutationVariables = {
  input: DeleteDataSyncInput,
  condition?: ModelDataSyncConditionInput | null,
};

export type DeleteDataSyncMutation = {
  deleteDataSync?:  {
    __typename: "DataSync",
    id: string,
    syncedAt: string,
    method: SyncMethod,
    sourceUrl?: string | null,
    title?: string | null,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateAssetMutationVariables = {
  input: CreateAssetInput,
  condition?: ModelAssetConditionInput | null,
};

export type CreateAssetMutation = {
  createAsset?:  {
    __typename: "Asset",
    id: string,
    name: string,
    type: string,
    condition: AssetCondition,
    acquiredDate: string,
    lastCheckedDate: string,
    venueId: string,
    venue?:  {
      __typename: "Venue",
      id: string,
      name: string,
      address?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      venueDetailsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateAssetMutationVariables = {
  input: UpdateAssetInput,
  condition?: ModelAssetConditionInput | null,
};

export type UpdateAssetMutation = {
  updateAsset?:  {
    __typename: "Asset",
    id: string,
    name: string,
    type: string,
    condition: AssetCondition,
    acquiredDate: string,
    lastCheckedDate: string,
    venueId: string,
    venue?:  {
      __typename: "Venue",
      id: string,
      name: string,
      address?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      venueDetailsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteAssetMutationVariables = {
  input: DeleteAssetInput,
  condition?: ModelAssetConditionInput | null,
};

export type DeleteAssetMutation = {
  deleteAsset?:  {
    __typename: "Asset",
    id: string,
    name: string,
    type: string,
    condition: AssetCondition,
    acquiredDate: string,
    lastCheckedDate: string,
    venueId: string,
    venue?:  {
      __typename: "Venue",
      id: string,
      name: string,
      address?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      venueDetailsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateVenueMutationVariables = {
  input: CreateVenueInput,
  condition?: ModelVenueConditionInput | null,
};

export type CreateVenueMutation = {
  createVenue?:  {
    __typename: "Venue",
    id: string,
    name: string,
    address?: string | null,
    city?: string | null,
    country?: string | null,
    details?:  {
      __typename: "VenueDetails",
      id: string,
      venueId: string,
      startDate: string,
      status: VenueStatus,
      lastCustomerSuccessVisit?: string | null,
      totalGamesHeld?: number | null,
      averagePlayersPerGame?: number | null,
      gameNights?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    assets?:  {
      __typename: "ModelAssetConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    games?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    venueDetailsId?: string | null,
  } | null,
};

export type UpdateVenueMutationVariables = {
  input: UpdateVenueInput,
  condition?: ModelVenueConditionInput | null,
};

export type UpdateVenueMutation = {
  updateVenue?:  {
    __typename: "Venue",
    id: string,
    name: string,
    address?: string | null,
    city?: string | null,
    country?: string | null,
    details?:  {
      __typename: "VenueDetails",
      id: string,
      venueId: string,
      startDate: string,
      status: VenueStatus,
      lastCustomerSuccessVisit?: string | null,
      totalGamesHeld?: number | null,
      averagePlayersPerGame?: number | null,
      gameNights?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    assets?:  {
      __typename: "ModelAssetConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    games?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    venueDetailsId?: string | null,
  } | null,
};

export type DeleteVenueMutationVariables = {
  input: DeleteVenueInput,
  condition?: ModelVenueConditionInput | null,
};

export type DeleteVenueMutation = {
  deleteVenue?:  {
    __typename: "Venue",
    id: string,
    name: string,
    address?: string | null,
    city?: string | null,
    country?: string | null,
    details?:  {
      __typename: "VenueDetails",
      id: string,
      venueId: string,
      startDate: string,
      status: VenueStatus,
      lastCustomerSuccessVisit?: string | null,
      totalGamesHeld?: number | null,
      averagePlayersPerGame?: number | null,
      gameNights?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    assets?:  {
      __typename: "ModelAssetConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    games?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    venueDetailsId?: string | null,
  } | null,
};

export type CreateVenueDetailsMutationVariables = {
  input: CreateVenueDetailsInput,
  condition?: ModelVenueDetailsConditionInput | null,
};

export type CreateVenueDetailsMutation = {
  createVenueDetails?:  {
    __typename: "VenueDetails",
    id: string,
    venueId: string,
    startDate: string,
    status: VenueStatus,
    lastCustomerSuccessVisit?: string | null,
    totalGamesHeld?: number | null,
    averagePlayersPerGame?: number | null,
    gameNights?: Array< string | null > | null,
    venue?:  {
      __typename: "Venue",
      id: string,
      name: string,
      address?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      venueDetailsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateVenueDetailsMutationVariables = {
  input: UpdateVenueDetailsInput,
  condition?: ModelVenueDetailsConditionInput | null,
};

export type UpdateVenueDetailsMutation = {
  updateVenueDetails?:  {
    __typename: "VenueDetails",
    id: string,
    venueId: string,
    startDate: string,
    status: VenueStatus,
    lastCustomerSuccessVisit?: string | null,
    totalGamesHeld?: number | null,
    averagePlayersPerGame?: number | null,
    gameNights?: Array< string | null > | null,
    venue?:  {
      __typename: "Venue",
      id: string,
      name: string,
      address?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      venueDetailsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteVenueDetailsMutationVariables = {
  input: DeleteVenueDetailsInput,
  condition?: ModelVenueDetailsConditionInput | null,
};

export type DeleteVenueDetailsMutation = {
  deleteVenueDetails?:  {
    __typename: "VenueDetails",
    id: string,
    venueId: string,
    startDate: string,
    status: VenueStatus,
    lastCustomerSuccessVisit?: string | null,
    totalGamesHeld?: number | null,
    averagePlayersPerGame?: number | null,
    gameNights?: Array< string | null > | null,
    venue?:  {
      __typename: "Venue",
      id: string,
      name: string,
      address?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      venueDetailsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateGameMutationVariables = {
  input: CreateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type CreateGameMutation = {
  createGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    type: GameType,
    status: GameStatus,
    gameDateTime: string,
    venueId: string,
    seriesName?: string | null,
    isAdHoc?: boolean | null,
    tournamentStructureId?: string | null,
    cashStructureId?: string | null,
    venue?:  {
      __typename: "Venue",
      id: string,
      name: string,
      address?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      venueDetailsId?: string | null,
    } | null,
    tournamentStructure?:  {
      __typename: "TournamentStructure",
      id: string,
      name: string,
      type: TournamentType,
      buyIn: number,
      rake: number,
      startingStack: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    cashStructure?:  {
      __typename: "CashStructure",
      id: string,
      name: string,
      smallBlind: number,
      bigBlind: number,
      minBuyIn: number,
      maxBuyIn: number,
      rakeStructureId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    playerResults?:  {
      __typename: "ModelPlayerResultConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateGameMutationVariables = {
  input: UpdateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type UpdateGameMutation = {
  updateGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    type: GameType,
    status: GameStatus,
    gameDateTime: string,
    venueId: string,
    seriesName?: string | null,
    isAdHoc?: boolean | null,
    tournamentStructureId?: string | null,
    cashStructureId?: string | null,
    venue?:  {
      __typename: "Venue",
      id: string,
      name: string,
      address?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      venueDetailsId?: string | null,
    } | null,
    tournamentStructure?:  {
      __typename: "TournamentStructure",
      id: string,
      name: string,
      type: TournamentType,
      buyIn: number,
      rake: number,
      startingStack: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    cashStructure?:  {
      __typename: "CashStructure",
      id: string,
      name: string,
      smallBlind: number,
      bigBlind: number,
      minBuyIn: number,
      maxBuyIn: number,
      rakeStructureId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    playerResults?:  {
      __typename: "ModelPlayerResultConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteGameMutationVariables = {
  input: DeleteGameInput,
  condition?: ModelGameConditionInput | null,
};

export type DeleteGameMutation = {
  deleteGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    type: GameType,
    status: GameStatus,
    gameDateTime: string,
    venueId: string,
    seriesName?: string | null,
    isAdHoc?: boolean | null,
    tournamentStructureId?: string | null,
    cashStructureId?: string | null,
    venue?:  {
      __typename: "Venue",
      id: string,
      name: string,
      address?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      venueDetailsId?: string | null,
    } | null,
    tournamentStructure?:  {
      __typename: "TournamentStructure",
      id: string,
      name: string,
      type: TournamentType,
      buyIn: number,
      rake: number,
      startingStack: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    cashStructure?:  {
      __typename: "CashStructure",
      id: string,
      name: string,
      smallBlind: number,
      bigBlind: number,
      minBuyIn: number,
      maxBuyIn: number,
      rakeStructureId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    playerResults?:  {
      __typename: "ModelPlayerResultConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateTournamentStructureMutationVariables = {
  input: CreateTournamentStructureInput,
  condition?: ModelTournamentStructureConditionInput | null,
};

export type CreateTournamentStructureMutation = {
  createTournamentStructure?:  {
    __typename: "TournamentStructure",
    id: string,
    name: string,
    type: TournamentType,
    buyIn: number,
    rake: number,
    startingStack: number,
    levels?:  {
      __typename: "ModelTournamentLevelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    games?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTournamentStructureMutationVariables = {
  input: UpdateTournamentStructureInput,
  condition?: ModelTournamentStructureConditionInput | null,
};

export type UpdateTournamentStructureMutation = {
  updateTournamentStructure?:  {
    __typename: "TournamentStructure",
    id: string,
    name: string,
    type: TournamentType,
    buyIn: number,
    rake: number,
    startingStack: number,
    levels?:  {
      __typename: "ModelTournamentLevelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    games?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTournamentStructureMutationVariables = {
  input: DeleteTournamentStructureInput,
  condition?: ModelTournamentStructureConditionInput | null,
};

export type DeleteTournamentStructureMutation = {
  deleteTournamentStructure?:  {
    __typename: "TournamentStructure",
    id: string,
    name: string,
    type: TournamentType,
    buyIn: number,
    rake: number,
    startingStack: number,
    levels?:  {
      __typename: "ModelTournamentLevelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    games?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateTournamentLevelMutationVariables = {
  input: CreateTournamentLevelInput,
  condition?: ModelTournamentLevelConditionInput | null,
};

export type CreateTournamentLevelMutation = {
  createTournamentLevel?:  {
    __typename: "TournamentLevel",
    id: string,
    structureId: string,
    levelNumber: number,
    durationMinutes: number,
    smallBlind: number,
    bigBlind: number,
    ante?: number | null,
    breakMinutes?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTournamentLevelMutationVariables = {
  input: UpdateTournamentLevelInput,
  condition?: ModelTournamentLevelConditionInput | null,
};

export type UpdateTournamentLevelMutation = {
  updateTournamentLevel?:  {
    __typename: "TournamentLevel",
    id: string,
    structureId: string,
    levelNumber: number,
    durationMinutes: number,
    smallBlind: number,
    bigBlind: number,
    ante?: number | null,
    breakMinutes?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTournamentLevelMutationVariables = {
  input: DeleteTournamentLevelInput,
  condition?: ModelTournamentLevelConditionInput | null,
};

export type DeleteTournamentLevelMutation = {
  deleteTournamentLevel?:  {
    __typename: "TournamentLevel",
    id: string,
    structureId: string,
    levelNumber: number,
    durationMinutes: number,
    smallBlind: number,
    bigBlind: number,
    ante?: number | null,
    breakMinutes?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateRakeStructureMutationVariables = {
  input: CreateRakeStructureInput,
  condition?: ModelRakeStructureConditionInput | null,
};

export type CreateRakeStructureMutation = {
  createRakeStructure?:  {
    __typename: "RakeStructure",
    id: string,
    name: string,
    rakePercentage: number,
    maxRake: number,
    cashStructures?:  {
      __typename: "ModelCashStructureConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateRakeStructureMutationVariables = {
  input: UpdateRakeStructureInput,
  condition?: ModelRakeStructureConditionInput | null,
};

export type UpdateRakeStructureMutation = {
  updateRakeStructure?:  {
    __typename: "RakeStructure",
    id: string,
    name: string,
    rakePercentage: number,
    maxRake: number,
    cashStructures?:  {
      __typename: "ModelCashStructureConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteRakeStructureMutationVariables = {
  input: DeleteRakeStructureInput,
  condition?: ModelRakeStructureConditionInput | null,
};

export type DeleteRakeStructureMutation = {
  deleteRakeStructure?:  {
    __typename: "RakeStructure",
    id: string,
    name: string,
    rakePercentage: number,
    maxRake: number,
    cashStructures?:  {
      __typename: "ModelCashStructureConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateCashStructureMutationVariables = {
  input: CreateCashStructureInput,
  condition?: ModelCashStructureConditionInput | null,
};

export type CreateCashStructureMutation = {
  createCashStructure?:  {
    __typename: "CashStructure",
    id: string,
    name: string,
    smallBlind: number,
    bigBlind: number,
    minBuyIn: number,
    maxBuyIn: number,
    rakeStructureId: string,
    rakeStructure?:  {
      __typename: "RakeStructure",
      id: string,
      name: string,
      rakePercentage: number,
      maxRake: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    games?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCashStructureMutationVariables = {
  input: UpdateCashStructureInput,
  condition?: ModelCashStructureConditionInput | null,
};

export type UpdateCashStructureMutation = {
  updateCashStructure?:  {
    __typename: "CashStructure",
    id: string,
    name: string,
    smallBlind: number,
    bigBlind: number,
    minBuyIn: number,
    maxBuyIn: number,
    rakeStructureId: string,
    rakeStructure?:  {
      __typename: "RakeStructure",
      id: string,
      name: string,
      rakePercentage: number,
      maxRake: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    games?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCashStructureMutationVariables = {
  input: DeleteCashStructureInput,
  condition?: ModelCashStructureConditionInput | null,
};

export type DeleteCashStructureMutation = {
  deleteCashStructure?:  {
    __typename: "CashStructure",
    id: string,
    name: string,
    smallBlind: number,
    bigBlind: number,
    minBuyIn: number,
    maxBuyIn: number,
    rakeStructureId: string,
    rakeStructure?:  {
      __typename: "RakeStructure",
      id: string,
      name: string,
      rakePercentage: number,
      maxRake: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    games?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePlayerMutationVariables = {
  input: CreatePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type CreatePlayerMutation = {
  createPlayer?:  {
    __typename: "Player",
    id: string,
    firstName: string,
    lastName?: string | null,
    email?: string | null,
    phone?: string | null,
    registrationVenueId: string,
    account?:  {
      __typename: "PlayerAccount",
      id: string,
      playerId: string,
      creationDate: string,
      status: PlayerAccountStatus,
      category: PlayerAccountCategory,
      tier?: string | null,
      totalGamesPlayed?: number | null,
      averageBuyIn?: number | null,
      lastPlayedDate?: string | null,
      venuesVisited?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      playerAccountMarketingPreferencesId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    playerAccountId?: string | null,
  } | null,
};

export type UpdatePlayerMutationVariables = {
  input: UpdatePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type UpdatePlayerMutation = {
  updatePlayer?:  {
    __typename: "Player",
    id: string,
    firstName: string,
    lastName?: string | null,
    email?: string | null,
    phone?: string | null,
    registrationVenueId: string,
    account?:  {
      __typename: "PlayerAccount",
      id: string,
      playerId: string,
      creationDate: string,
      status: PlayerAccountStatus,
      category: PlayerAccountCategory,
      tier?: string | null,
      totalGamesPlayed?: number | null,
      averageBuyIn?: number | null,
      lastPlayedDate?: string | null,
      venuesVisited?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      playerAccountMarketingPreferencesId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    playerAccountId?: string | null,
  } | null,
};

export type DeletePlayerMutationVariables = {
  input: DeletePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type DeletePlayerMutation = {
  deletePlayer?:  {
    __typename: "Player",
    id: string,
    firstName: string,
    lastName?: string | null,
    email?: string | null,
    phone?: string | null,
    registrationVenueId: string,
    account?:  {
      __typename: "PlayerAccount",
      id: string,
      playerId: string,
      creationDate: string,
      status: PlayerAccountStatus,
      category: PlayerAccountCategory,
      tier?: string | null,
      totalGamesPlayed?: number | null,
      averageBuyIn?: number | null,
      lastPlayedDate?: string | null,
      venuesVisited?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      playerAccountMarketingPreferencesId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    playerAccountId?: string | null,
  } | null,
};

export type CreatePlayerAccountMutationVariables = {
  input: CreatePlayerAccountInput,
  condition?: ModelPlayerAccountConditionInput | null,
};

export type CreatePlayerAccountMutation = {
  createPlayerAccount?:  {
    __typename: "PlayerAccount",
    id: string,
    playerId: string,
    creationDate: string,
    status: PlayerAccountStatus,
    category: PlayerAccountCategory,
    tier?: string | null,
    totalGamesPlayed?: number | null,
    averageBuyIn?: number | null,
    lastPlayedDate?: string | null,
    venuesVisited?: Array< string | null > | null,
    transactions?:  {
      __typename: "ModelPlayerTransactionConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    results?:  {
      __typename: "ModelPlayerResultConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    tickets?:  {
      __typename: "ModelPlayerTicketConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    marketingPreferences?:  {
      __typename: "PlayerMarketingPreferences",
      id: string,
      playerAccountId: string,
      optOutSms?: boolean | null,
      optOutEmail?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    player?:  {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName?: string | null,
      email?: string | null,
      phone?: string | null,
      registrationVenueId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      playerAccountId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    playerAccountMarketingPreferencesId?: string | null,
  } | null,
};

export type UpdatePlayerAccountMutationVariables = {
  input: UpdatePlayerAccountInput,
  condition?: ModelPlayerAccountConditionInput | null,
};

export type UpdatePlayerAccountMutation = {
  updatePlayerAccount?:  {
    __typename: "PlayerAccount",
    id: string,
    playerId: string,
    creationDate: string,
    status: PlayerAccountStatus,
    category: PlayerAccountCategory,
    tier?: string | null,
    totalGamesPlayed?: number | null,
    averageBuyIn?: number | null,
    lastPlayedDate?: string | null,
    venuesVisited?: Array< string | null > | null,
    transactions?:  {
      __typename: "ModelPlayerTransactionConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    results?:  {
      __typename: "ModelPlayerResultConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    tickets?:  {
      __typename: "ModelPlayerTicketConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    marketingPreferences?:  {
      __typename: "PlayerMarketingPreferences",
      id: string,
      playerAccountId: string,
      optOutSms?: boolean | null,
      optOutEmail?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    player?:  {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName?: string | null,
      email?: string | null,
      phone?: string | null,
      registrationVenueId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      playerAccountId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    playerAccountMarketingPreferencesId?: string | null,
  } | null,
};

export type DeletePlayerAccountMutationVariables = {
  input: DeletePlayerAccountInput,
  condition?: ModelPlayerAccountConditionInput | null,
};

export type DeletePlayerAccountMutation = {
  deletePlayerAccount?:  {
    __typename: "PlayerAccount",
    id: string,
    playerId: string,
    creationDate: string,
    status: PlayerAccountStatus,
    category: PlayerAccountCategory,
    tier?: string | null,
    totalGamesPlayed?: number | null,
    averageBuyIn?: number | null,
    lastPlayedDate?: string | null,
    venuesVisited?: Array< string | null > | null,
    transactions?:  {
      __typename: "ModelPlayerTransactionConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    results?:  {
      __typename: "ModelPlayerResultConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    tickets?:  {
      __typename: "ModelPlayerTicketConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    marketingPreferences?:  {
      __typename: "PlayerMarketingPreferences",
      id: string,
      playerAccountId: string,
      optOutSms?: boolean | null,
      optOutEmail?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    player?:  {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName?: string | null,
      email?: string | null,
      phone?: string | null,
      registrationVenueId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      playerAccountId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    playerAccountMarketingPreferencesId?: string | null,
  } | null,
};

export type CreatePlayerTransactionMutationVariables = {
  input: CreatePlayerTransactionInput,
  condition?: ModelPlayerTransactionConditionInput | null,
};

export type CreatePlayerTransactionMutation = {
  createPlayerTransaction?:  {
    __typename: "PlayerTransaction",
    id: string,
    playerAccountId: string,
    type: TransactionType,
    amount: number,
    transactionDate: string,
    notes?: string | null,
    gameId?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePlayerTransactionMutationVariables = {
  input: UpdatePlayerTransactionInput,
  condition?: ModelPlayerTransactionConditionInput | null,
};

export type UpdatePlayerTransactionMutation = {
  updatePlayerTransaction?:  {
    __typename: "PlayerTransaction",
    id: string,
    playerAccountId: string,
    type: TransactionType,
    amount: number,
    transactionDate: string,
    notes?: string | null,
    gameId?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePlayerTransactionMutationVariables = {
  input: DeletePlayerTransactionInput,
  condition?: ModelPlayerTransactionConditionInput | null,
};

export type DeletePlayerTransactionMutation = {
  deletePlayerTransaction?:  {
    __typename: "PlayerTransaction",
    id: string,
    playerAccountId: string,
    type: TransactionType,
    amount: number,
    transactionDate: string,
    notes?: string | null,
    gameId?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePlayerResultMutationVariables = {
  input: CreatePlayerResultInput,
  condition?: ModelPlayerResultConditionInput | null,
};

export type CreatePlayerResultMutation = {
  createPlayerResult?:  {
    __typename: "PlayerResult",
    id: string,
    playerAccountId: string,
    gameId: string,
    finishingPlace?: number | null,
    prizeWon?: number | null,
    totalRunners?: number | null,
    game?:  {
      __typename: "Game",
      id: string,
      name: string,
      type: GameType,
      status: GameStatus,
      gameDateTime: string,
      venueId: string,
      seriesName?: string | null,
      isAdHoc?: boolean | null,
      tournamentStructureId?: string | null,
      cashStructureId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePlayerResultMutationVariables = {
  input: UpdatePlayerResultInput,
  condition?: ModelPlayerResultConditionInput | null,
};

export type UpdatePlayerResultMutation = {
  updatePlayerResult?:  {
    __typename: "PlayerResult",
    id: string,
    playerAccountId: string,
    gameId: string,
    finishingPlace?: number | null,
    prizeWon?: number | null,
    totalRunners?: number | null,
    game?:  {
      __typename: "Game",
      id: string,
      name: string,
      type: GameType,
      status: GameStatus,
      gameDateTime: string,
      venueId: string,
      seriesName?: string | null,
      isAdHoc?: boolean | null,
      tournamentStructureId?: string | null,
      cashStructureId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePlayerResultMutationVariables = {
  input: DeletePlayerResultInput,
  condition?: ModelPlayerResultConditionInput | null,
};

export type DeletePlayerResultMutation = {
  deletePlayerResult?:  {
    __typename: "PlayerResult",
    id: string,
    playerAccountId: string,
    gameId: string,
    finishingPlace?: number | null,
    prizeWon?: number | null,
    totalRunners?: number | null,
    game?:  {
      __typename: "Game",
      id: string,
      name: string,
      type: GameType,
      status: GameStatus,
      gameDateTime: string,
      venueId: string,
      seriesName?: string | null,
      isAdHoc?: boolean | null,
      tournamentStructureId?: string | null,
      cashStructureId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePlayerMarketingMessageMutationVariables = {
  input: CreatePlayerMarketingMessageInput,
  condition?: ModelPlayerMarketingMessageConditionInput | null,
};

export type CreatePlayerMarketingMessageMutation = {
  createPlayerMarketingMessage?:  {
    __typename: "PlayerMarketingMessage",
    id: string,
    playerId: string,
    marketingMessageId: string,
    status: MessageStatus,
    sentAt: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePlayerMarketingMessageMutationVariables = {
  input: UpdatePlayerMarketingMessageInput,
  condition?: ModelPlayerMarketingMessageConditionInput | null,
};

export type UpdatePlayerMarketingMessageMutation = {
  updatePlayerMarketingMessage?:  {
    __typename: "PlayerMarketingMessage",
    id: string,
    playerId: string,
    marketingMessageId: string,
    status: MessageStatus,
    sentAt: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePlayerMarketingMessageMutationVariables = {
  input: DeletePlayerMarketingMessageInput,
  condition?: ModelPlayerMarketingMessageConditionInput | null,
};

export type DeletePlayerMarketingMessageMutation = {
  deletePlayerMarketingMessage?:  {
    __typename: "PlayerMarketingMessage",
    id: string,
    playerId: string,
    marketingMessageId: string,
    status: MessageStatus,
    sentAt: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePlayerMarketingPreferencesMutationVariables = {
  input: CreatePlayerMarketingPreferencesInput,
  condition?: ModelPlayerMarketingPreferencesConditionInput | null,
};

export type CreatePlayerMarketingPreferencesMutation = {
  createPlayerMarketingPreferences?:  {
    __typename: "PlayerMarketingPreferences",
    id: string,
    playerAccountId: string,
    optOutSms?: boolean | null,
    optOutEmail?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePlayerMarketingPreferencesMutationVariables = {
  input: UpdatePlayerMarketingPreferencesInput,
  condition?: ModelPlayerMarketingPreferencesConditionInput | null,
};

export type UpdatePlayerMarketingPreferencesMutation = {
  updatePlayerMarketingPreferences?:  {
    __typename: "PlayerMarketingPreferences",
    id: string,
    playerAccountId: string,
    optOutSms?: boolean | null,
    optOutEmail?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePlayerMarketingPreferencesMutationVariables = {
  input: DeletePlayerMarketingPreferencesInput,
  condition?: ModelPlayerMarketingPreferencesConditionInput | null,
};

export type DeletePlayerMarketingPreferencesMutation = {
  deletePlayerMarketingPreferences?:  {
    __typename: "PlayerMarketingPreferences",
    id: string,
    playerAccountId: string,
    optOutSms?: boolean | null,
    optOutEmail?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateTicketTemplateMutationVariables = {
  input: CreateTicketTemplateInput,
  condition?: ModelTicketTemplateConditionInput | null,
};

export type CreateTicketTemplateMutation = {
  createTicketTemplate?:  {
    __typename: "TicketTemplate",
    id: string,
    name: string,
    description?: string | null,
    value: number,
    validityDays: number,
    originGameId?: string | null,
    targetGameId?: string | null,
    playerTickets?:  {
      __typename: "ModelPlayerTicketConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTicketTemplateMutationVariables = {
  input: UpdateTicketTemplateInput,
  condition?: ModelTicketTemplateConditionInput | null,
};

export type UpdateTicketTemplateMutation = {
  updateTicketTemplate?:  {
    __typename: "TicketTemplate",
    id: string,
    name: string,
    description?: string | null,
    value: number,
    validityDays: number,
    originGameId?: string | null,
    targetGameId?: string | null,
    playerTickets?:  {
      __typename: "ModelPlayerTicketConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTicketTemplateMutationVariables = {
  input: DeleteTicketTemplateInput,
  condition?: ModelTicketTemplateConditionInput | null,
};

export type DeleteTicketTemplateMutation = {
  deleteTicketTemplate?:  {
    __typename: "TicketTemplate",
    id: string,
    name: string,
    description?: string | null,
    value: number,
    validityDays: number,
    originGameId?: string | null,
    targetGameId?: string | null,
    playerTickets?:  {
      __typename: "ModelPlayerTicketConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePlayerTicketMutationVariables = {
  input: CreatePlayerTicketInput,
  condition?: ModelPlayerTicketConditionInput | null,
};

export type CreatePlayerTicketMutation = {
  createPlayerTicket?:  {
    __typename: "PlayerTicket",
    id: string,
    playerAccountId: string,
    ticketTemplateId: string,
    assignedAt: string,
    expiryDate: string,
    status: TicketStatus,
    usedInGameId?: string | null,
    ticketTemplate?:  {
      __typename: "TicketTemplate",
      id: string,
      name: string,
      description?: string | null,
      value: number,
      validityDays: number,
      originGameId?: string | null,
      targetGameId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePlayerTicketMutationVariables = {
  input: UpdatePlayerTicketInput,
  condition?: ModelPlayerTicketConditionInput | null,
};

export type UpdatePlayerTicketMutation = {
  updatePlayerTicket?:  {
    __typename: "PlayerTicket",
    id: string,
    playerAccountId: string,
    ticketTemplateId: string,
    assignedAt: string,
    expiryDate: string,
    status: TicketStatus,
    usedInGameId?: string | null,
    ticketTemplate?:  {
      __typename: "TicketTemplate",
      id: string,
      name: string,
      description?: string | null,
      value: number,
      validityDays: number,
      originGameId?: string | null,
      targetGameId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePlayerTicketMutationVariables = {
  input: DeletePlayerTicketInput,
  condition?: ModelPlayerTicketConditionInput | null,
};

export type DeletePlayerTicketMutation = {
  deletePlayerTicket?:  {
    __typename: "PlayerTicket",
    id: string,
    playerAccountId: string,
    ticketTemplateId: string,
    assignedAt: string,
    expiryDate: string,
    status: TicketStatus,
    usedInGameId?: string | null,
    ticketTemplate?:  {
      __typename: "TicketTemplate",
      id: string,
      name: string,
      description?: string | null,
      value: number,
      validityDays: number,
      originGameId?: string | null,
      targetGameId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    role: UserRole,
    preferences?:  {
      __typename: "ModelUserPreferenceConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    role: UserRole,
    preferences?:  {
      __typename: "ModelUserPreferenceConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    role: UserRole,
    preferences?:  {
      __typename: "ModelUserPreferenceConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateStaffMutationVariables = {
  input: CreateStaffInput,
  condition?: ModelStaffConditionInput | null,
};

export type CreateStaffMutation = {
  createStaff?:  {
    __typename: "Staff",
    id: string,
    firstName: string,
    lastName?: string | null,
    role: StaffRole,
    assignedVenueId?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateStaffMutationVariables = {
  input: UpdateStaffInput,
  condition?: ModelStaffConditionInput | null,
};

export type UpdateStaffMutation = {
  updateStaff?:  {
    __typename: "Staff",
    id: string,
    firstName: string,
    lastName?: string | null,
    role: StaffRole,
    assignedVenueId?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteStaffMutationVariables = {
  input: DeleteStaffInput,
  condition?: ModelStaffConditionInput | null,
};

export type DeleteStaffMutation = {
  deleteStaff?:  {
    __typename: "Staff",
    id: string,
    firstName: string,
    lastName?: string | null,
    role: StaffRole,
    assignedVenueId?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserPreferenceMutationVariables = {
  input: CreateUserPreferenceInput,
  condition?: ModelUserPreferenceConditionInput | null,
};

export type CreateUserPreferenceMutation = {
  createUserPreference?:  {
    __typename: "UserPreference",
    id: string,
    userId: string,
    page: string,
    widget: string,
    preference?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserPreferenceMutationVariables = {
  input: UpdateUserPreferenceInput,
  condition?: ModelUserPreferenceConditionInput | null,
};

export type UpdateUserPreferenceMutation = {
  updateUserPreference?:  {
    __typename: "UserPreference",
    id: string,
    userId: string,
    page: string,
    widget: string,
    preference?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserPreferenceMutationVariables = {
  input: DeleteUserPreferenceInput,
  condition?: ModelUserPreferenceConditionInput | null,
};

export type DeleteUserPreferenceMutation = {
  deleteUserPreference?:  {
    __typename: "UserPreference",
    id: string,
    userId: string,
    page: string,
    widget: string,
    preference?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateSocialPostMutationVariables = {
  input: CreateSocialPostInput,
  condition?: ModelSocialPostConditionInput | null,
};

export type CreateSocialPostMutation = {
  createSocialPost?:  {
    __typename: "SocialPost",
    id: string,
    socialAccountId: string,
    content: string,
    imageUrl?: string | null,
    postedAt: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateSocialPostMutationVariables = {
  input: UpdateSocialPostInput,
  condition?: ModelSocialPostConditionInput | null,
};

export type UpdateSocialPostMutation = {
  updateSocialPost?:  {
    __typename: "SocialPost",
    id: string,
    socialAccountId: string,
    content: string,
    imageUrl?: string | null,
    postedAt: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteSocialPostMutationVariables = {
  input: DeleteSocialPostInput,
  condition?: ModelSocialPostConditionInput | null,
};

export type DeleteSocialPostMutation = {
  deleteSocialPost?:  {
    __typename: "SocialPost",
    id: string,
    socialAccountId: string,
    content: string,
    imageUrl?: string | null,
    postedAt: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateSocialAccountMutationVariables = {
  input: CreateSocialAccountInput,
  condition?: ModelSocialAccountConditionInput | null,
};

export type CreateSocialAccountMutation = {
  createSocialAccount?:  {
    __typename: "SocialAccount",
    id: string,
    platform: string,
    accountName: string,
    apiKey?: string | null,
    apiSecret?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateSocialAccountMutationVariables = {
  input: UpdateSocialAccountInput,
  condition?: ModelSocialAccountConditionInput | null,
};

export type UpdateSocialAccountMutation = {
  updateSocialAccount?:  {
    __typename: "SocialAccount",
    id: string,
    platform: string,
    accountName: string,
    apiKey?: string | null,
    apiSecret?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteSocialAccountMutationVariables = {
  input: DeleteSocialAccountInput,
  condition?: ModelSocialAccountConditionInput | null,
};

export type DeleteSocialAccountMutation = {
  deleteSocialAccount?:  {
    __typename: "SocialAccount",
    id: string,
    platform: string,
    accountName: string,
    apiKey?: string | null,
    apiSecret?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateMarketingMessageMutationVariables = {
  input: CreateMarketingMessageInput,
  condition?: ModelMarketingMessageConditionInput | null,
};

export type CreateMarketingMessageMutation = {
  createMarketingMessage?:  {
    __typename: "MarketingMessage",
    id: string,
    name: string,
    subject?: string | null,
    emailBody?: string | null,
    smsBody?: string | null,
    sentMessages?:  {
      __typename: "ModelPlayerMarketingMessageConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateMarketingMessageMutationVariables = {
  input: UpdateMarketingMessageInput,
  condition?: ModelMarketingMessageConditionInput | null,
};

export type UpdateMarketingMessageMutation = {
  updateMarketingMessage?:  {
    __typename: "MarketingMessage",
    id: string,
    name: string,
    subject?: string | null,
    emailBody?: string | null,
    smsBody?: string | null,
    sentMessages?:  {
      __typename: "ModelPlayerMarketingMessageConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteMarketingMessageMutationVariables = {
  input: DeleteMarketingMessageInput,
  condition?: ModelMarketingMessageConditionInput | null,
};

export type DeleteMarketingMessageMutation = {
  deleteMarketingMessage?:  {
    __typename: "MarketingMessage",
    id: string,
    name: string,
    subject?: string | null,
    emailBody?: string | null,
    smsBody?: string | null,
    sentMessages?:  {
      __typename: "ModelPlayerMarketingMessageConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetDataSyncQueryVariables = {
  id: string,
};

export type GetDataSyncQuery = {
  getDataSync?:  {
    __typename: "DataSync",
    id: string,
    syncedAt: string,
    method: SyncMethod,
    sourceUrl?: string | null,
    title?: string | null,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListDataSyncsQueryVariables = {
  filter?: ModelDataSyncFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDataSyncsQuery = {
  listDataSyncs?:  {
    __typename: "ModelDataSyncConnection",
    items:  Array< {
      __typename: "DataSync",
      id: string,
      syncedAt: string,
      method: SyncMethod,
      sourceUrl?: string | null,
      title?: string | null,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncDataSyncsQueryVariables = {
  filter?: ModelDataSyncFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncDataSyncsQuery = {
  syncDataSyncs?:  {
    __typename: "ModelDataSyncConnection",
    items:  Array< {
      __typename: "DataSync",
      id: string,
      syncedAt: string,
      method: SyncMethod,
      sourceUrl?: string | null,
      title?: string | null,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetAssetQueryVariables = {
  id: string,
};

export type GetAssetQuery = {
  getAsset?:  {
    __typename: "Asset",
    id: string,
    name: string,
    type: string,
    condition: AssetCondition,
    acquiredDate: string,
    lastCheckedDate: string,
    venueId: string,
    venue?:  {
      __typename: "Venue",
      id: string,
      name: string,
      address?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      venueDetailsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListAssetsQueryVariables = {
  filter?: ModelAssetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAssetsQuery = {
  listAssets?:  {
    __typename: "ModelAssetConnection",
    items:  Array< {
      __typename: "Asset",
      id: string,
      name: string,
      type: string,
      condition: AssetCondition,
      acquiredDate: string,
      lastCheckedDate: string,
      venueId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAssetsQueryVariables = {
  filter?: ModelAssetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAssetsQuery = {
  syncAssets?:  {
    __typename: "ModelAssetConnection",
    items:  Array< {
      __typename: "Asset",
      id: string,
      name: string,
      type: string,
      condition: AssetCondition,
      acquiredDate: string,
      lastCheckedDate: string,
      venueId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetVenueQueryVariables = {
  id: string,
};

export type GetVenueQuery = {
  getVenue?:  {
    __typename: "Venue",
    id: string,
    name: string,
    address?: string | null,
    city?: string | null,
    country?: string | null,
    details?:  {
      __typename: "VenueDetails",
      id: string,
      venueId: string,
      startDate: string,
      status: VenueStatus,
      lastCustomerSuccessVisit?: string | null,
      totalGamesHeld?: number | null,
      averagePlayersPerGame?: number | null,
      gameNights?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    assets?:  {
      __typename: "ModelAssetConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    games?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    venueDetailsId?: string | null,
  } | null,
};

export type ListVenuesQueryVariables = {
  filter?: ModelVenueFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVenuesQuery = {
  listVenues?:  {
    __typename: "ModelVenueConnection",
    items:  Array< {
      __typename: "Venue",
      id: string,
      name: string,
      address?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      venueDetailsId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncVenuesQueryVariables = {
  filter?: ModelVenueFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncVenuesQuery = {
  syncVenues?:  {
    __typename: "ModelVenueConnection",
    items:  Array< {
      __typename: "Venue",
      id: string,
      name: string,
      address?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      venueDetailsId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetVenueDetailsQueryVariables = {
  id: string,
};

export type GetVenueDetailsQuery = {
  getVenueDetails?:  {
    __typename: "VenueDetails",
    id: string,
    venueId: string,
    startDate: string,
    status: VenueStatus,
    lastCustomerSuccessVisit?: string | null,
    totalGamesHeld?: number | null,
    averagePlayersPerGame?: number | null,
    gameNights?: Array< string | null > | null,
    venue?:  {
      __typename: "Venue",
      id: string,
      name: string,
      address?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      venueDetailsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListVenueDetailsQueryVariables = {
  filter?: ModelVenueDetailsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVenueDetailsQuery = {
  listVenueDetails?:  {
    __typename: "ModelVenueDetailsConnection",
    items:  Array< {
      __typename: "VenueDetails",
      id: string,
      venueId: string,
      startDate: string,
      status: VenueStatus,
      lastCustomerSuccessVisit?: string | null,
      totalGamesHeld?: number | null,
      averagePlayersPerGame?: number | null,
      gameNights?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncVenueDetailsQueryVariables = {
  filter?: ModelVenueDetailsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncVenueDetailsQuery = {
  syncVenueDetails?:  {
    __typename: "ModelVenueDetailsConnection",
    items:  Array< {
      __typename: "VenueDetails",
      id: string,
      venueId: string,
      startDate: string,
      status: VenueStatus,
      lastCustomerSuccessVisit?: string | null,
      totalGamesHeld?: number | null,
      averagePlayersPerGame?: number | null,
      gameNights?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetGameQueryVariables = {
  id: string,
};

export type GetGameQuery = {
  getGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    type: GameType,
    status: GameStatus,
    gameDateTime: string,
    venueId: string,
    seriesName?: string | null,
    isAdHoc?: boolean | null,
    tournamentStructureId?: string | null,
    cashStructureId?: string | null,
    venue?:  {
      __typename: "Venue",
      id: string,
      name: string,
      address?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      venueDetailsId?: string | null,
    } | null,
    tournamentStructure?:  {
      __typename: "TournamentStructure",
      id: string,
      name: string,
      type: TournamentType,
      buyIn: number,
      rake: number,
      startingStack: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    cashStructure?:  {
      __typename: "CashStructure",
      id: string,
      name: string,
      smallBlind: number,
      bigBlind: number,
      minBuyIn: number,
      maxBuyIn: number,
      rakeStructureId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    playerResults?:  {
      __typename: "ModelPlayerResultConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListGamesQueryVariables = {
  filter?: ModelGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGamesQuery = {
  listGames?:  {
    __typename: "ModelGameConnection",
    items:  Array< {
      __typename: "Game",
      id: string,
      name: string,
      type: GameType,
      status: GameStatus,
      gameDateTime: string,
      venueId: string,
      seriesName?: string | null,
      isAdHoc?: boolean | null,
      tournamentStructureId?: string | null,
      cashStructureId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncGamesQueryVariables = {
  filter?: ModelGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncGamesQuery = {
  syncGames?:  {
    __typename: "ModelGameConnection",
    items:  Array< {
      __typename: "Game",
      id: string,
      name: string,
      type: GameType,
      status: GameStatus,
      gameDateTime: string,
      venueId: string,
      seriesName?: string | null,
      isAdHoc?: boolean | null,
      tournamentStructureId?: string | null,
      cashStructureId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTournamentStructureQueryVariables = {
  id: string,
};

export type GetTournamentStructureQuery = {
  getTournamentStructure?:  {
    __typename: "TournamentStructure",
    id: string,
    name: string,
    type: TournamentType,
    buyIn: number,
    rake: number,
    startingStack: number,
    levels?:  {
      __typename: "ModelTournamentLevelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    games?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTournamentStructuresQueryVariables = {
  filter?: ModelTournamentStructureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTournamentStructuresQuery = {
  listTournamentStructures?:  {
    __typename: "ModelTournamentStructureConnection",
    items:  Array< {
      __typename: "TournamentStructure",
      id: string,
      name: string,
      type: TournamentType,
      buyIn: number,
      rake: number,
      startingStack: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTournamentStructuresQueryVariables = {
  filter?: ModelTournamentStructureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTournamentStructuresQuery = {
  syncTournamentStructures?:  {
    __typename: "ModelTournamentStructureConnection",
    items:  Array< {
      __typename: "TournamentStructure",
      id: string,
      name: string,
      type: TournamentType,
      buyIn: number,
      rake: number,
      startingStack: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTournamentLevelQueryVariables = {
  id: string,
};

export type GetTournamentLevelQuery = {
  getTournamentLevel?:  {
    __typename: "TournamentLevel",
    id: string,
    structureId: string,
    levelNumber: number,
    durationMinutes: number,
    smallBlind: number,
    bigBlind: number,
    ante?: number | null,
    breakMinutes?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTournamentLevelsQueryVariables = {
  filter?: ModelTournamentLevelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTournamentLevelsQuery = {
  listTournamentLevels?:  {
    __typename: "ModelTournamentLevelConnection",
    items:  Array< {
      __typename: "TournamentLevel",
      id: string,
      structureId: string,
      levelNumber: number,
      durationMinutes: number,
      smallBlind: number,
      bigBlind: number,
      ante?: number | null,
      breakMinutes?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTournamentLevelsQueryVariables = {
  filter?: ModelTournamentLevelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTournamentLevelsQuery = {
  syncTournamentLevels?:  {
    __typename: "ModelTournamentLevelConnection",
    items:  Array< {
      __typename: "TournamentLevel",
      id: string,
      structureId: string,
      levelNumber: number,
      durationMinutes: number,
      smallBlind: number,
      bigBlind: number,
      ante?: number | null,
      breakMinutes?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetRakeStructureQueryVariables = {
  id: string,
};

export type GetRakeStructureQuery = {
  getRakeStructure?:  {
    __typename: "RakeStructure",
    id: string,
    name: string,
    rakePercentage: number,
    maxRake: number,
    cashStructures?:  {
      __typename: "ModelCashStructureConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListRakeStructuresQueryVariables = {
  filter?: ModelRakeStructureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRakeStructuresQuery = {
  listRakeStructures?:  {
    __typename: "ModelRakeStructureConnection",
    items:  Array< {
      __typename: "RakeStructure",
      id: string,
      name: string,
      rakePercentage: number,
      maxRake: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncRakeStructuresQueryVariables = {
  filter?: ModelRakeStructureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncRakeStructuresQuery = {
  syncRakeStructures?:  {
    __typename: "ModelRakeStructureConnection",
    items:  Array< {
      __typename: "RakeStructure",
      id: string,
      name: string,
      rakePercentage: number,
      maxRake: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCashStructureQueryVariables = {
  id: string,
};

export type GetCashStructureQuery = {
  getCashStructure?:  {
    __typename: "CashStructure",
    id: string,
    name: string,
    smallBlind: number,
    bigBlind: number,
    minBuyIn: number,
    maxBuyIn: number,
    rakeStructureId: string,
    rakeStructure?:  {
      __typename: "RakeStructure",
      id: string,
      name: string,
      rakePercentage: number,
      maxRake: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    games?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCashStructuresQueryVariables = {
  filter?: ModelCashStructureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCashStructuresQuery = {
  listCashStructures?:  {
    __typename: "ModelCashStructureConnection",
    items:  Array< {
      __typename: "CashStructure",
      id: string,
      name: string,
      smallBlind: number,
      bigBlind: number,
      minBuyIn: number,
      maxBuyIn: number,
      rakeStructureId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCashStructuresQueryVariables = {
  filter?: ModelCashStructureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCashStructuresQuery = {
  syncCashStructures?:  {
    __typename: "ModelCashStructureConnection",
    items:  Array< {
      __typename: "CashStructure",
      id: string,
      name: string,
      smallBlind: number,
      bigBlind: number,
      minBuyIn: number,
      maxBuyIn: number,
      rakeStructureId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPlayerQueryVariables = {
  id: string,
};

export type GetPlayerQuery = {
  getPlayer?:  {
    __typename: "Player",
    id: string,
    firstName: string,
    lastName?: string | null,
    email?: string | null,
    phone?: string | null,
    registrationVenueId: string,
    account?:  {
      __typename: "PlayerAccount",
      id: string,
      playerId: string,
      creationDate: string,
      status: PlayerAccountStatus,
      category: PlayerAccountCategory,
      tier?: string | null,
      totalGamesPlayed?: number | null,
      averageBuyIn?: number | null,
      lastPlayedDate?: string | null,
      venuesVisited?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      playerAccountMarketingPreferencesId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    playerAccountId?: string | null,
  } | null,
};

export type ListPlayersQueryVariables = {
  filter?: ModelPlayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlayersQuery = {
  listPlayers?:  {
    __typename: "ModelPlayerConnection",
    items:  Array< {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName?: string | null,
      email?: string | null,
      phone?: string | null,
      registrationVenueId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      playerAccountId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPlayersQueryVariables = {
  filter?: ModelPlayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPlayersQuery = {
  syncPlayers?:  {
    __typename: "ModelPlayerConnection",
    items:  Array< {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName?: string | null,
      email?: string | null,
      phone?: string | null,
      registrationVenueId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      playerAccountId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPlayerAccountQueryVariables = {
  id: string,
};

export type GetPlayerAccountQuery = {
  getPlayerAccount?:  {
    __typename: "PlayerAccount",
    id: string,
    playerId: string,
    creationDate: string,
    status: PlayerAccountStatus,
    category: PlayerAccountCategory,
    tier?: string | null,
    totalGamesPlayed?: number | null,
    averageBuyIn?: number | null,
    lastPlayedDate?: string | null,
    venuesVisited?: Array< string | null > | null,
    transactions?:  {
      __typename: "ModelPlayerTransactionConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    results?:  {
      __typename: "ModelPlayerResultConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    tickets?:  {
      __typename: "ModelPlayerTicketConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    marketingPreferences?:  {
      __typename: "PlayerMarketingPreferences",
      id: string,
      playerAccountId: string,
      optOutSms?: boolean | null,
      optOutEmail?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    player?:  {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName?: string | null,
      email?: string | null,
      phone?: string | null,
      registrationVenueId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      playerAccountId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    playerAccountMarketingPreferencesId?: string | null,
  } | null,
};

export type ListPlayerAccountsQueryVariables = {
  filter?: ModelPlayerAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlayerAccountsQuery = {
  listPlayerAccounts?:  {
    __typename: "ModelPlayerAccountConnection",
    items:  Array< {
      __typename: "PlayerAccount",
      id: string,
      playerId: string,
      creationDate: string,
      status: PlayerAccountStatus,
      category: PlayerAccountCategory,
      tier?: string | null,
      totalGamesPlayed?: number | null,
      averageBuyIn?: number | null,
      lastPlayedDate?: string | null,
      venuesVisited?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      playerAccountMarketingPreferencesId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPlayerAccountsQueryVariables = {
  filter?: ModelPlayerAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPlayerAccountsQuery = {
  syncPlayerAccounts?:  {
    __typename: "ModelPlayerAccountConnection",
    items:  Array< {
      __typename: "PlayerAccount",
      id: string,
      playerId: string,
      creationDate: string,
      status: PlayerAccountStatus,
      category: PlayerAccountCategory,
      tier?: string | null,
      totalGamesPlayed?: number | null,
      averageBuyIn?: number | null,
      lastPlayedDate?: string | null,
      venuesVisited?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      playerAccountMarketingPreferencesId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPlayerTransactionQueryVariables = {
  id: string,
};

export type GetPlayerTransactionQuery = {
  getPlayerTransaction?:  {
    __typename: "PlayerTransaction",
    id: string,
    playerAccountId: string,
    type: TransactionType,
    amount: number,
    transactionDate: string,
    notes?: string | null,
    gameId?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPlayerTransactionsQueryVariables = {
  filter?: ModelPlayerTransactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlayerTransactionsQuery = {
  listPlayerTransactions?:  {
    __typename: "ModelPlayerTransactionConnection",
    items:  Array< {
      __typename: "PlayerTransaction",
      id: string,
      playerAccountId: string,
      type: TransactionType,
      amount: number,
      transactionDate: string,
      notes?: string | null,
      gameId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPlayerTransactionsQueryVariables = {
  filter?: ModelPlayerTransactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPlayerTransactionsQuery = {
  syncPlayerTransactions?:  {
    __typename: "ModelPlayerTransactionConnection",
    items:  Array< {
      __typename: "PlayerTransaction",
      id: string,
      playerAccountId: string,
      type: TransactionType,
      amount: number,
      transactionDate: string,
      notes?: string | null,
      gameId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPlayerResultQueryVariables = {
  id: string,
};

export type GetPlayerResultQuery = {
  getPlayerResult?:  {
    __typename: "PlayerResult",
    id: string,
    playerAccountId: string,
    gameId: string,
    finishingPlace?: number | null,
    prizeWon?: number | null,
    totalRunners?: number | null,
    game?:  {
      __typename: "Game",
      id: string,
      name: string,
      type: GameType,
      status: GameStatus,
      gameDateTime: string,
      venueId: string,
      seriesName?: string | null,
      isAdHoc?: boolean | null,
      tournamentStructureId?: string | null,
      cashStructureId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPlayerResultsQueryVariables = {
  filter?: ModelPlayerResultFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlayerResultsQuery = {
  listPlayerResults?:  {
    __typename: "ModelPlayerResultConnection",
    items:  Array< {
      __typename: "PlayerResult",
      id: string,
      playerAccountId: string,
      gameId: string,
      finishingPlace?: number | null,
      prizeWon?: number | null,
      totalRunners?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPlayerResultsQueryVariables = {
  filter?: ModelPlayerResultFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPlayerResultsQuery = {
  syncPlayerResults?:  {
    __typename: "ModelPlayerResultConnection",
    items:  Array< {
      __typename: "PlayerResult",
      id: string,
      playerAccountId: string,
      gameId: string,
      finishingPlace?: number | null,
      prizeWon?: number | null,
      totalRunners?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPlayerMarketingMessageQueryVariables = {
  id: string,
};

export type GetPlayerMarketingMessageQuery = {
  getPlayerMarketingMessage?:  {
    __typename: "PlayerMarketingMessage",
    id: string,
    playerId: string,
    marketingMessageId: string,
    status: MessageStatus,
    sentAt: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPlayerMarketingMessagesQueryVariables = {
  filter?: ModelPlayerMarketingMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlayerMarketingMessagesQuery = {
  listPlayerMarketingMessages?:  {
    __typename: "ModelPlayerMarketingMessageConnection",
    items:  Array< {
      __typename: "PlayerMarketingMessage",
      id: string,
      playerId: string,
      marketingMessageId: string,
      status: MessageStatus,
      sentAt: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPlayerMarketingMessagesQueryVariables = {
  filter?: ModelPlayerMarketingMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPlayerMarketingMessagesQuery = {
  syncPlayerMarketingMessages?:  {
    __typename: "ModelPlayerMarketingMessageConnection",
    items:  Array< {
      __typename: "PlayerMarketingMessage",
      id: string,
      playerId: string,
      marketingMessageId: string,
      status: MessageStatus,
      sentAt: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPlayerMarketingPreferencesQueryVariables = {
  id: string,
};

export type GetPlayerMarketingPreferencesQuery = {
  getPlayerMarketingPreferences?:  {
    __typename: "PlayerMarketingPreferences",
    id: string,
    playerAccountId: string,
    optOutSms?: boolean | null,
    optOutEmail?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPlayerMarketingPreferencesQueryVariables = {
  filter?: ModelPlayerMarketingPreferencesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlayerMarketingPreferencesQuery = {
  listPlayerMarketingPreferences?:  {
    __typename: "ModelPlayerMarketingPreferencesConnection",
    items:  Array< {
      __typename: "PlayerMarketingPreferences",
      id: string,
      playerAccountId: string,
      optOutSms?: boolean | null,
      optOutEmail?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPlayerMarketingPreferencesQueryVariables = {
  filter?: ModelPlayerMarketingPreferencesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPlayerMarketingPreferencesQuery = {
  syncPlayerMarketingPreferences?:  {
    __typename: "ModelPlayerMarketingPreferencesConnection",
    items:  Array< {
      __typename: "PlayerMarketingPreferences",
      id: string,
      playerAccountId: string,
      optOutSms?: boolean | null,
      optOutEmail?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTicketTemplateQueryVariables = {
  id: string,
};

export type GetTicketTemplateQuery = {
  getTicketTemplate?:  {
    __typename: "TicketTemplate",
    id: string,
    name: string,
    description?: string | null,
    value: number,
    validityDays: number,
    originGameId?: string | null,
    targetGameId?: string | null,
    playerTickets?:  {
      __typename: "ModelPlayerTicketConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTicketTemplatesQueryVariables = {
  filter?: ModelTicketTemplateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTicketTemplatesQuery = {
  listTicketTemplates?:  {
    __typename: "ModelTicketTemplateConnection",
    items:  Array< {
      __typename: "TicketTemplate",
      id: string,
      name: string,
      description?: string | null,
      value: number,
      validityDays: number,
      originGameId?: string | null,
      targetGameId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTicketTemplatesQueryVariables = {
  filter?: ModelTicketTemplateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTicketTemplatesQuery = {
  syncTicketTemplates?:  {
    __typename: "ModelTicketTemplateConnection",
    items:  Array< {
      __typename: "TicketTemplate",
      id: string,
      name: string,
      description?: string | null,
      value: number,
      validityDays: number,
      originGameId?: string | null,
      targetGameId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPlayerTicketQueryVariables = {
  id: string,
};

export type GetPlayerTicketQuery = {
  getPlayerTicket?:  {
    __typename: "PlayerTicket",
    id: string,
    playerAccountId: string,
    ticketTemplateId: string,
    assignedAt: string,
    expiryDate: string,
    status: TicketStatus,
    usedInGameId?: string | null,
    ticketTemplate?:  {
      __typename: "TicketTemplate",
      id: string,
      name: string,
      description?: string | null,
      value: number,
      validityDays: number,
      originGameId?: string | null,
      targetGameId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPlayerTicketsQueryVariables = {
  filter?: ModelPlayerTicketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlayerTicketsQuery = {
  listPlayerTickets?:  {
    __typename: "ModelPlayerTicketConnection",
    items:  Array< {
      __typename: "PlayerTicket",
      id: string,
      playerAccountId: string,
      ticketTemplateId: string,
      assignedAt: string,
      expiryDate: string,
      status: TicketStatus,
      usedInGameId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPlayerTicketsQueryVariables = {
  filter?: ModelPlayerTicketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPlayerTicketsQuery = {
  syncPlayerTickets?:  {
    __typename: "ModelPlayerTicketConnection",
    items:  Array< {
      __typename: "PlayerTicket",
      id: string,
      playerAccountId: string,
      ticketTemplateId: string,
      assignedAt: string,
      expiryDate: string,
      status: TicketStatus,
      usedInGameId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    role: UserRole,
    preferences?:  {
      __typename: "ModelUserPreferenceConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      role: UserRole,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      role: UserRole,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetStaffQueryVariables = {
  id: string,
};

export type GetStaffQuery = {
  getStaff?:  {
    __typename: "Staff",
    id: string,
    firstName: string,
    lastName?: string | null,
    role: StaffRole,
    assignedVenueId?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListStaffQueryVariables = {
  filter?: ModelStaffFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStaffQuery = {
  listStaff?:  {
    __typename: "ModelStaffConnection",
    items:  Array< {
      __typename: "Staff",
      id: string,
      firstName: string,
      lastName?: string | null,
      role: StaffRole,
      assignedVenueId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncStaffQueryVariables = {
  filter?: ModelStaffFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncStaffQuery = {
  syncStaff?:  {
    __typename: "ModelStaffConnection",
    items:  Array< {
      __typename: "Staff",
      id: string,
      firstName: string,
      lastName?: string | null,
      role: StaffRole,
      assignedVenueId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserPreferenceQueryVariables = {
  id: string,
};

export type GetUserPreferenceQuery = {
  getUserPreference?:  {
    __typename: "UserPreference",
    id: string,
    userId: string,
    page: string,
    widget: string,
    preference?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUserPreferencesQueryVariables = {
  filter?: ModelUserPreferenceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserPreferencesQuery = {
  listUserPreferences?:  {
    __typename: "ModelUserPreferenceConnection",
    items:  Array< {
      __typename: "UserPreference",
      id: string,
      userId: string,
      page: string,
      widget: string,
      preference?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUserPreferencesQueryVariables = {
  filter?: ModelUserPreferenceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserPreferencesQuery = {
  syncUserPreferences?:  {
    __typename: "ModelUserPreferenceConnection",
    items:  Array< {
      __typename: "UserPreference",
      id: string,
      userId: string,
      page: string,
      widget: string,
      preference?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSocialPostQueryVariables = {
  id: string,
};

export type GetSocialPostQuery = {
  getSocialPost?:  {
    __typename: "SocialPost",
    id: string,
    socialAccountId: string,
    content: string,
    imageUrl?: string | null,
    postedAt: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListSocialPostsQueryVariables = {
  filter?: ModelSocialPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSocialPostsQuery = {
  listSocialPosts?:  {
    __typename: "ModelSocialPostConnection",
    items:  Array< {
      __typename: "SocialPost",
      id: string,
      socialAccountId: string,
      content: string,
      imageUrl?: string | null,
      postedAt: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSocialPostsQueryVariables = {
  filter?: ModelSocialPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSocialPostsQuery = {
  syncSocialPosts?:  {
    __typename: "ModelSocialPostConnection",
    items:  Array< {
      __typename: "SocialPost",
      id: string,
      socialAccountId: string,
      content: string,
      imageUrl?: string | null,
      postedAt: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSocialAccountQueryVariables = {
  id: string,
};

export type GetSocialAccountQuery = {
  getSocialAccount?:  {
    __typename: "SocialAccount",
    id: string,
    platform: string,
    accountName: string,
    apiKey?: string | null,
    apiSecret?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListSocialAccountsQueryVariables = {
  filter?: ModelSocialAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSocialAccountsQuery = {
  listSocialAccounts?:  {
    __typename: "ModelSocialAccountConnection",
    items:  Array< {
      __typename: "SocialAccount",
      id: string,
      platform: string,
      accountName: string,
      apiKey?: string | null,
      apiSecret?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSocialAccountsQueryVariables = {
  filter?: ModelSocialAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSocialAccountsQuery = {
  syncSocialAccounts?:  {
    __typename: "ModelSocialAccountConnection",
    items:  Array< {
      __typename: "SocialAccount",
      id: string,
      platform: string,
      accountName: string,
      apiKey?: string | null,
      apiSecret?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMarketingMessageQueryVariables = {
  id: string,
};

export type GetMarketingMessageQuery = {
  getMarketingMessage?:  {
    __typename: "MarketingMessage",
    id: string,
    name: string,
    subject?: string | null,
    emailBody?: string | null,
    smsBody?: string | null,
    sentMessages?:  {
      __typename: "ModelPlayerMarketingMessageConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListMarketingMessagesQueryVariables = {
  filter?: ModelMarketingMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMarketingMessagesQuery = {
  listMarketingMessages?:  {
    __typename: "ModelMarketingMessageConnection",
    items:  Array< {
      __typename: "MarketingMessage",
      id: string,
      name: string,
      subject?: string | null,
      emailBody?: string | null,
      smsBody?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMarketingMessagesQueryVariables = {
  filter?: ModelMarketingMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMarketingMessagesQuery = {
  syncMarketingMessages?:  {
    __typename: "ModelMarketingMessageConnection",
    items:  Array< {
      __typename: "MarketingMessage",
      id: string,
      name: string,
      subject?: string | null,
      emailBody?: string | null,
      smsBody?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type AssetsByVenueIdQueryVariables = {
  venueId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAssetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AssetsByVenueIdQuery = {
  assetsByVenueId?:  {
    __typename: "ModelAssetConnection",
    items:  Array< {
      __typename: "Asset",
      id: string,
      name: string,
      type: string,
      condition: AssetCondition,
      acquiredDate: string,
      lastCheckedDate: string,
      venueId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type VenueDetailsByVenueIdQueryVariables = {
  venueId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelVenueDetailsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VenueDetailsByVenueIdQuery = {
  venueDetailsByVenueId?:  {
    __typename: "ModelVenueDetailsConnection",
    items:  Array< {
      __typename: "VenueDetails",
      id: string,
      venueId: string,
      startDate: string,
      status: VenueStatus,
      lastCustomerSuccessVisit?: string | null,
      totalGamesHeld?: number | null,
      averagePlayersPerGame?: number | null,
      gameNights?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GamesByVenueIdAndGameDateTimeQueryVariables = {
  venueId: string,
  gameDateTime?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GamesByVenueIdAndGameDateTimeQuery = {
  gamesByVenueIdAndGameDateTime?:  {
    __typename: "ModelGameConnection",
    items:  Array< {
      __typename: "Game",
      id: string,
      name: string,
      type: GameType,
      status: GameStatus,
      gameDateTime: string,
      venueId: string,
      seriesName?: string | null,
      isAdHoc?: boolean | null,
      tournamentStructureId?: string | null,
      cashStructureId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GamesByTournamentStructureIdQueryVariables = {
  tournamentStructureId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GamesByTournamentStructureIdQuery = {
  gamesByTournamentStructureId?:  {
    __typename: "ModelGameConnection",
    items:  Array< {
      __typename: "Game",
      id: string,
      name: string,
      type: GameType,
      status: GameStatus,
      gameDateTime: string,
      venueId: string,
      seriesName?: string | null,
      isAdHoc?: boolean | null,
      tournamentStructureId?: string | null,
      cashStructureId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GamesByCashStructureIdQueryVariables = {
  cashStructureId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GamesByCashStructureIdQuery = {
  gamesByCashStructureId?:  {
    __typename: "ModelGameConnection",
    items:  Array< {
      __typename: "Game",
      id: string,
      name: string,
      type: GameType,
      status: GameStatus,
      gameDateTime: string,
      venueId: string,
      seriesName?: string | null,
      isAdHoc?: boolean | null,
      tournamentStructureId?: string | null,
      cashStructureId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type TournamentLevelsByStructureIdQueryVariables = {
  structureId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTournamentLevelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TournamentLevelsByStructureIdQuery = {
  tournamentLevelsByStructureId?:  {
    __typename: "ModelTournamentLevelConnection",
    items:  Array< {
      __typename: "TournamentLevel",
      id: string,
      structureId: string,
      levelNumber: number,
      durationMinutes: number,
      smallBlind: number,
      bigBlind: number,
      ante?: number | null,
      breakMinutes?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type CashStructuresByRakeStructureIdQueryVariables = {
  rakeStructureId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCashStructureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CashStructuresByRakeStructureIdQuery = {
  cashStructuresByRakeStructureId?:  {
    __typename: "ModelCashStructureConnection",
    items:  Array< {
      __typename: "CashStructure",
      id: string,
      name: string,
      smallBlind: number,
      bigBlind: number,
      minBuyIn: number,
      maxBuyIn: number,
      rakeStructureId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type PlayerByEmailQueryVariables = {
  email: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPlayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PlayerByEmailQuery = {
  playerByEmail?:  {
    __typename: "ModelPlayerConnection",
    items:  Array< {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName?: string | null,
      email?: string | null,
      phone?: string | null,
      registrationVenueId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      playerAccountId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type PlayersByRegistrationVenueIdQueryVariables = {
  registrationVenueId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPlayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PlayersByRegistrationVenueIdQuery = {
  playersByRegistrationVenueId?:  {
    __typename: "ModelPlayerConnection",
    items:  Array< {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName?: string | null,
      email?: string | null,
      phone?: string | null,
      registrationVenueId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      playerAccountId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type PlayerAccountsByPlayerIdQueryVariables = {
  playerId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPlayerAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PlayerAccountsByPlayerIdQuery = {
  playerAccountsByPlayerId?:  {
    __typename: "ModelPlayerAccountConnection",
    items:  Array< {
      __typename: "PlayerAccount",
      id: string,
      playerId: string,
      creationDate: string,
      status: PlayerAccountStatus,
      category: PlayerAccountCategory,
      tier?: string | null,
      totalGamesPlayed?: number | null,
      averageBuyIn?: number | null,
      lastPlayedDate?: string | null,
      venuesVisited?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      playerAccountMarketingPreferencesId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type PlayerTransactionsByPlayerAccountIdAndTransactionDateQueryVariables = {
  playerAccountId: string,
  transactionDate?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPlayerTransactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PlayerTransactionsByPlayerAccountIdAndTransactionDateQuery = {
  playerTransactionsByPlayerAccountIdAndTransactionDate?:  {
    __typename: "ModelPlayerTransactionConnection",
    items:  Array< {
      __typename: "PlayerTransaction",
      id: string,
      playerAccountId: string,
      type: TransactionType,
      amount: number,
      transactionDate: string,
      notes?: string | null,
      gameId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type PlayerTransactionsByGameIdQueryVariables = {
  gameId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPlayerTransactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PlayerTransactionsByGameIdQuery = {
  playerTransactionsByGameId?:  {
    __typename: "ModelPlayerTransactionConnection",
    items:  Array< {
      __typename: "PlayerTransaction",
      id: string,
      playerAccountId: string,
      type: TransactionType,
      amount: number,
      transactionDate: string,
      notes?: string | null,
      gameId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type PlayerResultsByPlayerAccountIdQueryVariables = {
  playerAccountId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPlayerResultFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PlayerResultsByPlayerAccountIdQuery = {
  playerResultsByPlayerAccountId?:  {
    __typename: "ModelPlayerResultConnection",
    items:  Array< {
      __typename: "PlayerResult",
      id: string,
      playerAccountId: string,
      gameId: string,
      finishingPlace?: number | null,
      prizeWon?: number | null,
      totalRunners?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type PlayerResultsByGameIdQueryVariables = {
  gameId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPlayerResultFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PlayerResultsByGameIdQuery = {
  playerResultsByGameId?:  {
    __typename: "ModelPlayerResultConnection",
    items:  Array< {
      __typename: "PlayerResult",
      id: string,
      playerAccountId: string,
      gameId: string,
      finishingPlace?: number | null,
      prizeWon?: number | null,
      totalRunners?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type PlayerMarketingMessagesByPlayerIdAndSentAtQueryVariables = {
  playerId: string,
  sentAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPlayerMarketingMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PlayerMarketingMessagesByPlayerIdAndSentAtQuery = {
  playerMarketingMessagesByPlayerIdAndSentAt?:  {
    __typename: "ModelPlayerMarketingMessageConnection",
    items:  Array< {
      __typename: "PlayerMarketingMessage",
      id: string,
      playerId: string,
      marketingMessageId: string,
      status: MessageStatus,
      sentAt: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type PlayerMarketingMessagesByMarketingMessageIdQueryVariables = {
  marketingMessageId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPlayerMarketingMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PlayerMarketingMessagesByMarketingMessageIdQuery = {
  playerMarketingMessagesByMarketingMessageId?:  {
    __typename: "ModelPlayerMarketingMessageConnection",
    items:  Array< {
      __typename: "PlayerMarketingMessage",
      id: string,
      playerId: string,
      marketingMessageId: string,
      status: MessageStatus,
      sentAt: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type PlayerMarketingPreferencesByPlayerAccountIdQueryVariables = {
  playerAccountId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPlayerMarketingPreferencesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PlayerMarketingPreferencesByPlayerAccountIdQuery = {
  playerMarketingPreferencesByPlayerAccountId?:  {
    __typename: "ModelPlayerMarketingPreferencesConnection",
    items:  Array< {
      __typename: "PlayerMarketingPreferences",
      id: string,
      playerAccountId: string,
      optOutSms?: boolean | null,
      optOutEmail?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type PlayerTicketsByPlayerAccountIdQueryVariables = {
  playerAccountId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPlayerTicketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PlayerTicketsByPlayerAccountIdQuery = {
  playerTicketsByPlayerAccountId?:  {
    __typename: "ModelPlayerTicketConnection",
    items:  Array< {
      __typename: "PlayerTicket",
      id: string,
      playerAccountId: string,
      ticketTemplateId: string,
      assignedAt: string,
      expiryDate: string,
      status: TicketStatus,
      usedInGameId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type PlayerTicketsByTicketTemplateIdQueryVariables = {
  ticketTemplateId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPlayerTicketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PlayerTicketsByTicketTemplateIdQuery = {
  playerTicketsByTicketTemplateId?:  {
    __typename: "ModelPlayerTicketConnection",
    items:  Array< {
      __typename: "PlayerTicket",
      id: string,
      playerAccountId: string,
      ticketTemplateId: string,
      assignedAt: string,
      expiryDate: string,
      status: TicketStatus,
      usedInGameId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type StaffByAssignedVenueIdQueryVariables = {
  assignedVenueId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStaffFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StaffByAssignedVenueIdQuery = {
  staffByAssignedVenueId?:  {
    __typename: "ModelStaffConnection",
    items:  Array< {
      __typename: "Staff",
      id: string,
      firstName: string,
      lastName?: string | null,
      role: StaffRole,
      assignedVenueId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type UserPreferencesByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserPreferenceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserPreferencesByUserIdQuery = {
  userPreferencesByUserId?:  {
    __typename: "ModelUserPreferenceConnection",
    items:  Array< {
      __typename: "UserPreference",
      id: string,
      userId: string,
      page: string,
      widget: string,
      preference?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SocialPostsBySocialAccountIdAndPostedAtQueryVariables = {
  socialAccountId: string,
  postedAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSocialPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SocialPostsBySocialAccountIdAndPostedAtQuery = {
  socialPostsBySocialAccountIdAndPostedAt?:  {
    __typename: "ModelSocialPostConnection",
    items:  Array< {
      __typename: "SocialPost",
      id: string,
      socialAccountId: string,
      content: string,
      imageUrl?: string | null,
      postedAt: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateDataSyncSubscriptionVariables = {
  filter?: ModelSubscriptionDataSyncFilterInput | null,
};

export type OnCreateDataSyncSubscription = {
  onCreateDataSync?:  {
    __typename: "DataSync",
    id: string,
    syncedAt: string,
    method: SyncMethod,
    sourceUrl?: string | null,
    title?: string | null,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateDataSyncSubscriptionVariables = {
  filter?: ModelSubscriptionDataSyncFilterInput | null,
};

export type OnUpdateDataSyncSubscription = {
  onUpdateDataSync?:  {
    __typename: "DataSync",
    id: string,
    syncedAt: string,
    method: SyncMethod,
    sourceUrl?: string | null,
    title?: string | null,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteDataSyncSubscriptionVariables = {
  filter?: ModelSubscriptionDataSyncFilterInput | null,
};

export type OnDeleteDataSyncSubscription = {
  onDeleteDataSync?:  {
    __typename: "DataSync",
    id: string,
    syncedAt: string,
    method: SyncMethod,
    sourceUrl?: string | null,
    title?: string | null,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateAssetSubscriptionVariables = {
  filter?: ModelSubscriptionAssetFilterInput | null,
};

export type OnCreateAssetSubscription = {
  onCreateAsset?:  {
    __typename: "Asset",
    id: string,
    name: string,
    type: string,
    condition: AssetCondition,
    acquiredDate: string,
    lastCheckedDate: string,
    venueId: string,
    venue?:  {
      __typename: "Venue",
      id: string,
      name: string,
      address?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      venueDetailsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateAssetSubscriptionVariables = {
  filter?: ModelSubscriptionAssetFilterInput | null,
};

export type OnUpdateAssetSubscription = {
  onUpdateAsset?:  {
    __typename: "Asset",
    id: string,
    name: string,
    type: string,
    condition: AssetCondition,
    acquiredDate: string,
    lastCheckedDate: string,
    venueId: string,
    venue?:  {
      __typename: "Venue",
      id: string,
      name: string,
      address?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      venueDetailsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteAssetSubscriptionVariables = {
  filter?: ModelSubscriptionAssetFilterInput | null,
};

export type OnDeleteAssetSubscription = {
  onDeleteAsset?:  {
    __typename: "Asset",
    id: string,
    name: string,
    type: string,
    condition: AssetCondition,
    acquiredDate: string,
    lastCheckedDate: string,
    venueId: string,
    venue?:  {
      __typename: "Venue",
      id: string,
      name: string,
      address?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      venueDetailsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateVenueSubscriptionVariables = {
  filter?: ModelSubscriptionVenueFilterInput | null,
};

export type OnCreateVenueSubscription = {
  onCreateVenue?:  {
    __typename: "Venue",
    id: string,
    name: string,
    address?: string | null,
    city?: string | null,
    country?: string | null,
    details?:  {
      __typename: "VenueDetails",
      id: string,
      venueId: string,
      startDate: string,
      status: VenueStatus,
      lastCustomerSuccessVisit?: string | null,
      totalGamesHeld?: number | null,
      averagePlayersPerGame?: number | null,
      gameNights?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    assets?:  {
      __typename: "ModelAssetConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    games?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    venueDetailsId?: string | null,
  } | null,
};

export type OnUpdateVenueSubscriptionVariables = {
  filter?: ModelSubscriptionVenueFilterInput | null,
};

export type OnUpdateVenueSubscription = {
  onUpdateVenue?:  {
    __typename: "Venue",
    id: string,
    name: string,
    address?: string | null,
    city?: string | null,
    country?: string | null,
    details?:  {
      __typename: "VenueDetails",
      id: string,
      venueId: string,
      startDate: string,
      status: VenueStatus,
      lastCustomerSuccessVisit?: string | null,
      totalGamesHeld?: number | null,
      averagePlayersPerGame?: number | null,
      gameNights?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    assets?:  {
      __typename: "ModelAssetConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    games?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    venueDetailsId?: string | null,
  } | null,
};

export type OnDeleteVenueSubscriptionVariables = {
  filter?: ModelSubscriptionVenueFilterInput | null,
};

export type OnDeleteVenueSubscription = {
  onDeleteVenue?:  {
    __typename: "Venue",
    id: string,
    name: string,
    address?: string | null,
    city?: string | null,
    country?: string | null,
    details?:  {
      __typename: "VenueDetails",
      id: string,
      venueId: string,
      startDate: string,
      status: VenueStatus,
      lastCustomerSuccessVisit?: string | null,
      totalGamesHeld?: number | null,
      averagePlayersPerGame?: number | null,
      gameNights?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    assets?:  {
      __typename: "ModelAssetConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    games?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    venueDetailsId?: string | null,
  } | null,
};

export type OnCreateVenueDetailsSubscriptionVariables = {
  filter?: ModelSubscriptionVenueDetailsFilterInput | null,
};

export type OnCreateVenueDetailsSubscription = {
  onCreateVenueDetails?:  {
    __typename: "VenueDetails",
    id: string,
    venueId: string,
    startDate: string,
    status: VenueStatus,
    lastCustomerSuccessVisit?: string | null,
    totalGamesHeld?: number | null,
    averagePlayersPerGame?: number | null,
    gameNights?: Array< string | null > | null,
    venue?:  {
      __typename: "Venue",
      id: string,
      name: string,
      address?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      venueDetailsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateVenueDetailsSubscriptionVariables = {
  filter?: ModelSubscriptionVenueDetailsFilterInput | null,
};

export type OnUpdateVenueDetailsSubscription = {
  onUpdateVenueDetails?:  {
    __typename: "VenueDetails",
    id: string,
    venueId: string,
    startDate: string,
    status: VenueStatus,
    lastCustomerSuccessVisit?: string | null,
    totalGamesHeld?: number | null,
    averagePlayersPerGame?: number | null,
    gameNights?: Array< string | null > | null,
    venue?:  {
      __typename: "Venue",
      id: string,
      name: string,
      address?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      venueDetailsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteVenueDetailsSubscriptionVariables = {
  filter?: ModelSubscriptionVenueDetailsFilterInput | null,
};

export type OnDeleteVenueDetailsSubscription = {
  onDeleteVenueDetails?:  {
    __typename: "VenueDetails",
    id: string,
    venueId: string,
    startDate: string,
    status: VenueStatus,
    lastCustomerSuccessVisit?: string | null,
    totalGamesHeld?: number | null,
    averagePlayersPerGame?: number | null,
    gameNights?: Array< string | null > | null,
    venue?:  {
      __typename: "Venue",
      id: string,
      name: string,
      address?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      venueDetailsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateGameSubscriptionVariables = {
  filter?: ModelSubscriptionGameFilterInput | null,
};

export type OnCreateGameSubscription = {
  onCreateGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    type: GameType,
    status: GameStatus,
    gameDateTime: string,
    venueId: string,
    seriesName?: string | null,
    isAdHoc?: boolean | null,
    tournamentStructureId?: string | null,
    cashStructureId?: string | null,
    venue?:  {
      __typename: "Venue",
      id: string,
      name: string,
      address?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      venueDetailsId?: string | null,
    } | null,
    tournamentStructure?:  {
      __typename: "TournamentStructure",
      id: string,
      name: string,
      type: TournamentType,
      buyIn: number,
      rake: number,
      startingStack: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    cashStructure?:  {
      __typename: "CashStructure",
      id: string,
      name: string,
      smallBlind: number,
      bigBlind: number,
      minBuyIn: number,
      maxBuyIn: number,
      rakeStructureId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    playerResults?:  {
      __typename: "ModelPlayerResultConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateGameSubscriptionVariables = {
  filter?: ModelSubscriptionGameFilterInput | null,
};

export type OnUpdateGameSubscription = {
  onUpdateGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    type: GameType,
    status: GameStatus,
    gameDateTime: string,
    venueId: string,
    seriesName?: string | null,
    isAdHoc?: boolean | null,
    tournamentStructureId?: string | null,
    cashStructureId?: string | null,
    venue?:  {
      __typename: "Venue",
      id: string,
      name: string,
      address?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      venueDetailsId?: string | null,
    } | null,
    tournamentStructure?:  {
      __typename: "TournamentStructure",
      id: string,
      name: string,
      type: TournamentType,
      buyIn: number,
      rake: number,
      startingStack: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    cashStructure?:  {
      __typename: "CashStructure",
      id: string,
      name: string,
      smallBlind: number,
      bigBlind: number,
      minBuyIn: number,
      maxBuyIn: number,
      rakeStructureId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    playerResults?:  {
      __typename: "ModelPlayerResultConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteGameSubscriptionVariables = {
  filter?: ModelSubscriptionGameFilterInput | null,
};

export type OnDeleteGameSubscription = {
  onDeleteGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    type: GameType,
    status: GameStatus,
    gameDateTime: string,
    venueId: string,
    seriesName?: string | null,
    isAdHoc?: boolean | null,
    tournamentStructureId?: string | null,
    cashStructureId?: string | null,
    venue?:  {
      __typename: "Venue",
      id: string,
      name: string,
      address?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      venueDetailsId?: string | null,
    } | null,
    tournamentStructure?:  {
      __typename: "TournamentStructure",
      id: string,
      name: string,
      type: TournamentType,
      buyIn: number,
      rake: number,
      startingStack: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    cashStructure?:  {
      __typename: "CashStructure",
      id: string,
      name: string,
      smallBlind: number,
      bigBlind: number,
      minBuyIn: number,
      maxBuyIn: number,
      rakeStructureId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    playerResults?:  {
      __typename: "ModelPlayerResultConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateTournamentStructureSubscriptionVariables = {
  filter?: ModelSubscriptionTournamentStructureFilterInput | null,
};

export type OnCreateTournamentStructureSubscription = {
  onCreateTournamentStructure?:  {
    __typename: "TournamentStructure",
    id: string,
    name: string,
    type: TournamentType,
    buyIn: number,
    rake: number,
    startingStack: number,
    levels?:  {
      __typename: "ModelTournamentLevelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    games?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTournamentStructureSubscriptionVariables = {
  filter?: ModelSubscriptionTournamentStructureFilterInput | null,
};

export type OnUpdateTournamentStructureSubscription = {
  onUpdateTournamentStructure?:  {
    __typename: "TournamentStructure",
    id: string,
    name: string,
    type: TournamentType,
    buyIn: number,
    rake: number,
    startingStack: number,
    levels?:  {
      __typename: "ModelTournamentLevelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    games?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTournamentStructureSubscriptionVariables = {
  filter?: ModelSubscriptionTournamentStructureFilterInput | null,
};

export type OnDeleteTournamentStructureSubscription = {
  onDeleteTournamentStructure?:  {
    __typename: "TournamentStructure",
    id: string,
    name: string,
    type: TournamentType,
    buyIn: number,
    rake: number,
    startingStack: number,
    levels?:  {
      __typename: "ModelTournamentLevelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    games?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateTournamentLevelSubscriptionVariables = {
  filter?: ModelSubscriptionTournamentLevelFilterInput | null,
};

export type OnCreateTournamentLevelSubscription = {
  onCreateTournamentLevel?:  {
    __typename: "TournamentLevel",
    id: string,
    structureId: string,
    levelNumber: number,
    durationMinutes: number,
    smallBlind: number,
    bigBlind: number,
    ante?: number | null,
    breakMinutes?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTournamentLevelSubscriptionVariables = {
  filter?: ModelSubscriptionTournamentLevelFilterInput | null,
};

export type OnUpdateTournamentLevelSubscription = {
  onUpdateTournamentLevel?:  {
    __typename: "TournamentLevel",
    id: string,
    structureId: string,
    levelNumber: number,
    durationMinutes: number,
    smallBlind: number,
    bigBlind: number,
    ante?: number | null,
    breakMinutes?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTournamentLevelSubscriptionVariables = {
  filter?: ModelSubscriptionTournamentLevelFilterInput | null,
};

export type OnDeleteTournamentLevelSubscription = {
  onDeleteTournamentLevel?:  {
    __typename: "TournamentLevel",
    id: string,
    structureId: string,
    levelNumber: number,
    durationMinutes: number,
    smallBlind: number,
    bigBlind: number,
    ante?: number | null,
    breakMinutes?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateRakeStructureSubscriptionVariables = {
  filter?: ModelSubscriptionRakeStructureFilterInput | null,
};

export type OnCreateRakeStructureSubscription = {
  onCreateRakeStructure?:  {
    __typename: "RakeStructure",
    id: string,
    name: string,
    rakePercentage: number,
    maxRake: number,
    cashStructures?:  {
      __typename: "ModelCashStructureConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateRakeStructureSubscriptionVariables = {
  filter?: ModelSubscriptionRakeStructureFilterInput | null,
};

export type OnUpdateRakeStructureSubscription = {
  onUpdateRakeStructure?:  {
    __typename: "RakeStructure",
    id: string,
    name: string,
    rakePercentage: number,
    maxRake: number,
    cashStructures?:  {
      __typename: "ModelCashStructureConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteRakeStructureSubscriptionVariables = {
  filter?: ModelSubscriptionRakeStructureFilterInput | null,
};

export type OnDeleteRakeStructureSubscription = {
  onDeleteRakeStructure?:  {
    __typename: "RakeStructure",
    id: string,
    name: string,
    rakePercentage: number,
    maxRake: number,
    cashStructures?:  {
      __typename: "ModelCashStructureConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateCashStructureSubscriptionVariables = {
  filter?: ModelSubscriptionCashStructureFilterInput | null,
};

export type OnCreateCashStructureSubscription = {
  onCreateCashStructure?:  {
    __typename: "CashStructure",
    id: string,
    name: string,
    smallBlind: number,
    bigBlind: number,
    minBuyIn: number,
    maxBuyIn: number,
    rakeStructureId: string,
    rakeStructure?:  {
      __typename: "RakeStructure",
      id: string,
      name: string,
      rakePercentage: number,
      maxRake: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    games?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCashStructureSubscriptionVariables = {
  filter?: ModelSubscriptionCashStructureFilterInput | null,
};

export type OnUpdateCashStructureSubscription = {
  onUpdateCashStructure?:  {
    __typename: "CashStructure",
    id: string,
    name: string,
    smallBlind: number,
    bigBlind: number,
    minBuyIn: number,
    maxBuyIn: number,
    rakeStructureId: string,
    rakeStructure?:  {
      __typename: "RakeStructure",
      id: string,
      name: string,
      rakePercentage: number,
      maxRake: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    games?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCashStructureSubscriptionVariables = {
  filter?: ModelSubscriptionCashStructureFilterInput | null,
};

export type OnDeleteCashStructureSubscription = {
  onDeleteCashStructure?:  {
    __typename: "CashStructure",
    id: string,
    name: string,
    smallBlind: number,
    bigBlind: number,
    minBuyIn: number,
    maxBuyIn: number,
    rakeStructureId: string,
    rakeStructure?:  {
      __typename: "RakeStructure",
      id: string,
      name: string,
      rakePercentage: number,
      maxRake: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    games?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePlayerSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerFilterInput | null,
};

export type OnCreatePlayerSubscription = {
  onCreatePlayer?:  {
    __typename: "Player",
    id: string,
    firstName: string,
    lastName?: string | null,
    email?: string | null,
    phone?: string | null,
    registrationVenueId: string,
    account?:  {
      __typename: "PlayerAccount",
      id: string,
      playerId: string,
      creationDate: string,
      status: PlayerAccountStatus,
      category: PlayerAccountCategory,
      tier?: string | null,
      totalGamesPlayed?: number | null,
      averageBuyIn?: number | null,
      lastPlayedDate?: string | null,
      venuesVisited?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      playerAccountMarketingPreferencesId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    playerAccountId?: string | null,
  } | null,
};

export type OnUpdatePlayerSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerFilterInput | null,
};

export type OnUpdatePlayerSubscription = {
  onUpdatePlayer?:  {
    __typename: "Player",
    id: string,
    firstName: string,
    lastName?: string | null,
    email?: string | null,
    phone?: string | null,
    registrationVenueId: string,
    account?:  {
      __typename: "PlayerAccount",
      id: string,
      playerId: string,
      creationDate: string,
      status: PlayerAccountStatus,
      category: PlayerAccountCategory,
      tier?: string | null,
      totalGamesPlayed?: number | null,
      averageBuyIn?: number | null,
      lastPlayedDate?: string | null,
      venuesVisited?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      playerAccountMarketingPreferencesId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    playerAccountId?: string | null,
  } | null,
};

export type OnDeletePlayerSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerFilterInput | null,
};

export type OnDeletePlayerSubscription = {
  onDeletePlayer?:  {
    __typename: "Player",
    id: string,
    firstName: string,
    lastName?: string | null,
    email?: string | null,
    phone?: string | null,
    registrationVenueId: string,
    account?:  {
      __typename: "PlayerAccount",
      id: string,
      playerId: string,
      creationDate: string,
      status: PlayerAccountStatus,
      category: PlayerAccountCategory,
      tier?: string | null,
      totalGamesPlayed?: number | null,
      averageBuyIn?: number | null,
      lastPlayedDate?: string | null,
      venuesVisited?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      playerAccountMarketingPreferencesId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    playerAccountId?: string | null,
  } | null,
};

export type OnCreatePlayerAccountSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerAccountFilterInput | null,
};

export type OnCreatePlayerAccountSubscription = {
  onCreatePlayerAccount?:  {
    __typename: "PlayerAccount",
    id: string,
    playerId: string,
    creationDate: string,
    status: PlayerAccountStatus,
    category: PlayerAccountCategory,
    tier?: string | null,
    totalGamesPlayed?: number | null,
    averageBuyIn?: number | null,
    lastPlayedDate?: string | null,
    venuesVisited?: Array< string | null > | null,
    transactions?:  {
      __typename: "ModelPlayerTransactionConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    results?:  {
      __typename: "ModelPlayerResultConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    tickets?:  {
      __typename: "ModelPlayerTicketConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    marketingPreferences?:  {
      __typename: "PlayerMarketingPreferences",
      id: string,
      playerAccountId: string,
      optOutSms?: boolean | null,
      optOutEmail?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    player?:  {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName?: string | null,
      email?: string | null,
      phone?: string | null,
      registrationVenueId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      playerAccountId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    playerAccountMarketingPreferencesId?: string | null,
  } | null,
};

export type OnUpdatePlayerAccountSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerAccountFilterInput | null,
};

export type OnUpdatePlayerAccountSubscription = {
  onUpdatePlayerAccount?:  {
    __typename: "PlayerAccount",
    id: string,
    playerId: string,
    creationDate: string,
    status: PlayerAccountStatus,
    category: PlayerAccountCategory,
    tier?: string | null,
    totalGamesPlayed?: number | null,
    averageBuyIn?: number | null,
    lastPlayedDate?: string | null,
    venuesVisited?: Array< string | null > | null,
    transactions?:  {
      __typename: "ModelPlayerTransactionConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    results?:  {
      __typename: "ModelPlayerResultConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    tickets?:  {
      __typename: "ModelPlayerTicketConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    marketingPreferences?:  {
      __typename: "PlayerMarketingPreferences",
      id: string,
      playerAccountId: string,
      optOutSms?: boolean | null,
      optOutEmail?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    player?:  {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName?: string | null,
      email?: string | null,
      phone?: string | null,
      registrationVenueId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      playerAccountId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    playerAccountMarketingPreferencesId?: string | null,
  } | null,
};

export type OnDeletePlayerAccountSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerAccountFilterInput | null,
};

export type OnDeletePlayerAccountSubscription = {
  onDeletePlayerAccount?:  {
    __typename: "PlayerAccount",
    id: string,
    playerId: string,
    creationDate: string,
    status: PlayerAccountStatus,
    category: PlayerAccountCategory,
    tier?: string | null,
    totalGamesPlayed?: number | null,
    averageBuyIn?: number | null,
    lastPlayedDate?: string | null,
    venuesVisited?: Array< string | null > | null,
    transactions?:  {
      __typename: "ModelPlayerTransactionConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    results?:  {
      __typename: "ModelPlayerResultConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    tickets?:  {
      __typename: "ModelPlayerTicketConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    marketingPreferences?:  {
      __typename: "PlayerMarketingPreferences",
      id: string,
      playerAccountId: string,
      optOutSms?: boolean | null,
      optOutEmail?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    player?:  {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName?: string | null,
      email?: string | null,
      phone?: string | null,
      registrationVenueId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      playerAccountId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    playerAccountMarketingPreferencesId?: string | null,
  } | null,
};

export type OnCreatePlayerTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerTransactionFilterInput | null,
};

export type OnCreatePlayerTransactionSubscription = {
  onCreatePlayerTransaction?:  {
    __typename: "PlayerTransaction",
    id: string,
    playerAccountId: string,
    type: TransactionType,
    amount: number,
    transactionDate: string,
    notes?: string | null,
    gameId?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePlayerTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerTransactionFilterInput | null,
};

export type OnUpdatePlayerTransactionSubscription = {
  onUpdatePlayerTransaction?:  {
    __typename: "PlayerTransaction",
    id: string,
    playerAccountId: string,
    type: TransactionType,
    amount: number,
    transactionDate: string,
    notes?: string | null,
    gameId?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePlayerTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerTransactionFilterInput | null,
};

export type OnDeletePlayerTransactionSubscription = {
  onDeletePlayerTransaction?:  {
    __typename: "PlayerTransaction",
    id: string,
    playerAccountId: string,
    type: TransactionType,
    amount: number,
    transactionDate: string,
    notes?: string | null,
    gameId?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePlayerResultSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerResultFilterInput | null,
};

export type OnCreatePlayerResultSubscription = {
  onCreatePlayerResult?:  {
    __typename: "PlayerResult",
    id: string,
    playerAccountId: string,
    gameId: string,
    finishingPlace?: number | null,
    prizeWon?: number | null,
    totalRunners?: number | null,
    game?:  {
      __typename: "Game",
      id: string,
      name: string,
      type: GameType,
      status: GameStatus,
      gameDateTime: string,
      venueId: string,
      seriesName?: string | null,
      isAdHoc?: boolean | null,
      tournamentStructureId?: string | null,
      cashStructureId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePlayerResultSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerResultFilterInput | null,
};

export type OnUpdatePlayerResultSubscription = {
  onUpdatePlayerResult?:  {
    __typename: "PlayerResult",
    id: string,
    playerAccountId: string,
    gameId: string,
    finishingPlace?: number | null,
    prizeWon?: number | null,
    totalRunners?: number | null,
    game?:  {
      __typename: "Game",
      id: string,
      name: string,
      type: GameType,
      status: GameStatus,
      gameDateTime: string,
      venueId: string,
      seriesName?: string | null,
      isAdHoc?: boolean | null,
      tournamentStructureId?: string | null,
      cashStructureId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePlayerResultSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerResultFilterInput | null,
};

export type OnDeletePlayerResultSubscription = {
  onDeletePlayerResult?:  {
    __typename: "PlayerResult",
    id: string,
    playerAccountId: string,
    gameId: string,
    finishingPlace?: number | null,
    prizeWon?: number | null,
    totalRunners?: number | null,
    game?:  {
      __typename: "Game",
      id: string,
      name: string,
      type: GameType,
      status: GameStatus,
      gameDateTime: string,
      venueId: string,
      seriesName?: string | null,
      isAdHoc?: boolean | null,
      tournamentStructureId?: string | null,
      cashStructureId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePlayerMarketingMessageSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerMarketingMessageFilterInput | null,
};

export type OnCreatePlayerMarketingMessageSubscription = {
  onCreatePlayerMarketingMessage?:  {
    __typename: "PlayerMarketingMessage",
    id: string,
    playerId: string,
    marketingMessageId: string,
    status: MessageStatus,
    sentAt: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePlayerMarketingMessageSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerMarketingMessageFilterInput | null,
};

export type OnUpdatePlayerMarketingMessageSubscription = {
  onUpdatePlayerMarketingMessage?:  {
    __typename: "PlayerMarketingMessage",
    id: string,
    playerId: string,
    marketingMessageId: string,
    status: MessageStatus,
    sentAt: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePlayerMarketingMessageSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerMarketingMessageFilterInput | null,
};

export type OnDeletePlayerMarketingMessageSubscription = {
  onDeletePlayerMarketingMessage?:  {
    __typename: "PlayerMarketingMessage",
    id: string,
    playerId: string,
    marketingMessageId: string,
    status: MessageStatus,
    sentAt: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePlayerMarketingPreferencesSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerMarketingPreferencesFilterInput | null,
};

export type OnCreatePlayerMarketingPreferencesSubscription = {
  onCreatePlayerMarketingPreferences?:  {
    __typename: "PlayerMarketingPreferences",
    id: string,
    playerAccountId: string,
    optOutSms?: boolean | null,
    optOutEmail?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePlayerMarketingPreferencesSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerMarketingPreferencesFilterInput | null,
};

export type OnUpdatePlayerMarketingPreferencesSubscription = {
  onUpdatePlayerMarketingPreferences?:  {
    __typename: "PlayerMarketingPreferences",
    id: string,
    playerAccountId: string,
    optOutSms?: boolean | null,
    optOutEmail?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePlayerMarketingPreferencesSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerMarketingPreferencesFilterInput | null,
};

export type OnDeletePlayerMarketingPreferencesSubscription = {
  onDeletePlayerMarketingPreferences?:  {
    __typename: "PlayerMarketingPreferences",
    id: string,
    playerAccountId: string,
    optOutSms?: boolean | null,
    optOutEmail?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateTicketTemplateSubscriptionVariables = {
  filter?: ModelSubscriptionTicketTemplateFilterInput | null,
};

export type OnCreateTicketTemplateSubscription = {
  onCreateTicketTemplate?:  {
    __typename: "TicketTemplate",
    id: string,
    name: string,
    description?: string | null,
    value: number,
    validityDays: number,
    originGameId?: string | null,
    targetGameId?: string | null,
    playerTickets?:  {
      __typename: "ModelPlayerTicketConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTicketTemplateSubscriptionVariables = {
  filter?: ModelSubscriptionTicketTemplateFilterInput | null,
};

export type OnUpdateTicketTemplateSubscription = {
  onUpdateTicketTemplate?:  {
    __typename: "TicketTemplate",
    id: string,
    name: string,
    description?: string | null,
    value: number,
    validityDays: number,
    originGameId?: string | null,
    targetGameId?: string | null,
    playerTickets?:  {
      __typename: "ModelPlayerTicketConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTicketTemplateSubscriptionVariables = {
  filter?: ModelSubscriptionTicketTemplateFilterInput | null,
};

export type OnDeleteTicketTemplateSubscription = {
  onDeleteTicketTemplate?:  {
    __typename: "TicketTemplate",
    id: string,
    name: string,
    description?: string | null,
    value: number,
    validityDays: number,
    originGameId?: string | null,
    targetGameId?: string | null,
    playerTickets?:  {
      __typename: "ModelPlayerTicketConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePlayerTicketSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerTicketFilterInput | null,
};

export type OnCreatePlayerTicketSubscription = {
  onCreatePlayerTicket?:  {
    __typename: "PlayerTicket",
    id: string,
    playerAccountId: string,
    ticketTemplateId: string,
    assignedAt: string,
    expiryDate: string,
    status: TicketStatus,
    usedInGameId?: string | null,
    ticketTemplate?:  {
      __typename: "TicketTemplate",
      id: string,
      name: string,
      description?: string | null,
      value: number,
      validityDays: number,
      originGameId?: string | null,
      targetGameId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePlayerTicketSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerTicketFilterInput | null,
};

export type OnUpdatePlayerTicketSubscription = {
  onUpdatePlayerTicket?:  {
    __typename: "PlayerTicket",
    id: string,
    playerAccountId: string,
    ticketTemplateId: string,
    assignedAt: string,
    expiryDate: string,
    status: TicketStatus,
    usedInGameId?: string | null,
    ticketTemplate?:  {
      __typename: "TicketTemplate",
      id: string,
      name: string,
      description?: string | null,
      value: number,
      validityDays: number,
      originGameId?: string | null,
      targetGameId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePlayerTicketSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerTicketFilterInput | null,
};

export type OnDeletePlayerTicketSubscription = {
  onDeletePlayerTicket?:  {
    __typename: "PlayerTicket",
    id: string,
    playerAccountId: string,
    ticketTemplateId: string,
    assignedAt: string,
    expiryDate: string,
    status: TicketStatus,
    usedInGameId?: string | null,
    ticketTemplate?:  {
      __typename: "TicketTemplate",
      id: string,
      name: string,
      description?: string | null,
      value: number,
      validityDays: number,
      originGameId?: string | null,
      targetGameId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  id?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    role: UserRole,
    preferences?:  {
      __typename: "ModelUserPreferenceConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  id?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    role: UserRole,
    preferences?:  {
      __typename: "ModelUserPreferenceConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  id?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    role: UserRole,
    preferences?:  {
      __typename: "ModelUserPreferenceConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateStaffSubscriptionVariables = {
  filter?: ModelSubscriptionStaffFilterInput | null,
};

export type OnCreateStaffSubscription = {
  onCreateStaff?:  {
    __typename: "Staff",
    id: string,
    firstName: string,
    lastName?: string | null,
    role: StaffRole,
    assignedVenueId?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateStaffSubscriptionVariables = {
  filter?: ModelSubscriptionStaffFilterInput | null,
};

export type OnUpdateStaffSubscription = {
  onUpdateStaff?:  {
    __typename: "Staff",
    id: string,
    firstName: string,
    lastName?: string | null,
    role: StaffRole,
    assignedVenueId?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteStaffSubscriptionVariables = {
  filter?: ModelSubscriptionStaffFilterInput | null,
};

export type OnDeleteStaffSubscription = {
  onDeleteStaff?:  {
    __typename: "Staff",
    id: string,
    firstName: string,
    lastName?: string | null,
    role: StaffRole,
    assignedVenueId?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserPreferenceSubscriptionVariables = {
  filter?: ModelSubscriptionUserPreferenceFilterInput | null,
  userId?: string | null,
};

export type OnCreateUserPreferenceSubscription = {
  onCreateUserPreference?:  {
    __typename: "UserPreference",
    id: string,
    userId: string,
    page: string,
    widget: string,
    preference?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserPreferenceSubscriptionVariables = {
  filter?: ModelSubscriptionUserPreferenceFilterInput | null,
  userId?: string | null,
};

export type OnUpdateUserPreferenceSubscription = {
  onUpdateUserPreference?:  {
    __typename: "UserPreference",
    id: string,
    userId: string,
    page: string,
    widget: string,
    preference?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserPreferenceSubscriptionVariables = {
  filter?: ModelSubscriptionUserPreferenceFilterInput | null,
  userId?: string | null,
};

export type OnDeleteUserPreferenceSubscription = {
  onDeleteUserPreference?:  {
    __typename: "UserPreference",
    id: string,
    userId: string,
    page: string,
    widget: string,
    preference?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateSocialPostSubscriptionVariables = {
  filter?: ModelSubscriptionSocialPostFilterInput | null,
};

export type OnCreateSocialPostSubscription = {
  onCreateSocialPost?:  {
    __typename: "SocialPost",
    id: string,
    socialAccountId: string,
    content: string,
    imageUrl?: string | null,
    postedAt: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateSocialPostSubscriptionVariables = {
  filter?: ModelSubscriptionSocialPostFilterInput | null,
};

export type OnUpdateSocialPostSubscription = {
  onUpdateSocialPost?:  {
    __typename: "SocialPost",
    id: string,
    socialAccountId: string,
    content: string,
    imageUrl?: string | null,
    postedAt: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteSocialPostSubscriptionVariables = {
  filter?: ModelSubscriptionSocialPostFilterInput | null,
};

export type OnDeleteSocialPostSubscription = {
  onDeleteSocialPost?:  {
    __typename: "SocialPost",
    id: string,
    socialAccountId: string,
    content: string,
    imageUrl?: string | null,
    postedAt: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateSocialAccountSubscriptionVariables = {
  filter?: ModelSubscriptionSocialAccountFilterInput | null,
};

export type OnCreateSocialAccountSubscription = {
  onCreateSocialAccount?:  {
    __typename: "SocialAccount",
    id: string,
    platform: string,
    accountName: string,
    apiKey?: string | null,
    apiSecret?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateSocialAccountSubscriptionVariables = {
  filter?: ModelSubscriptionSocialAccountFilterInput | null,
};

export type OnUpdateSocialAccountSubscription = {
  onUpdateSocialAccount?:  {
    __typename: "SocialAccount",
    id: string,
    platform: string,
    accountName: string,
    apiKey?: string | null,
    apiSecret?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteSocialAccountSubscriptionVariables = {
  filter?: ModelSubscriptionSocialAccountFilterInput | null,
};

export type OnDeleteSocialAccountSubscription = {
  onDeleteSocialAccount?:  {
    __typename: "SocialAccount",
    id: string,
    platform: string,
    accountName: string,
    apiKey?: string | null,
    apiSecret?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateMarketingMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMarketingMessageFilterInput | null,
};

export type OnCreateMarketingMessageSubscription = {
  onCreateMarketingMessage?:  {
    __typename: "MarketingMessage",
    id: string,
    name: string,
    subject?: string | null,
    emailBody?: string | null,
    smsBody?: string | null,
    sentMessages?:  {
      __typename: "ModelPlayerMarketingMessageConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMarketingMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMarketingMessageFilterInput | null,
};

export type OnUpdateMarketingMessageSubscription = {
  onUpdateMarketingMessage?:  {
    __typename: "MarketingMessage",
    id: string,
    name: string,
    subject?: string | null,
    emailBody?: string | null,
    smsBody?: string | null,
    sentMessages?:  {
      __typename: "ModelPlayerMarketingMessageConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMarketingMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMarketingMessageFilterInput | null,
};

export type OnDeleteMarketingMessageSubscription = {
  onDeleteMarketingMessage?:  {
    __typename: "MarketingMessage",
    id: string,
    name: string,
    subject?: string | null,
    emailBody?: string | null,
    smsBody?: string | null,
    sentMessages?:  {
      __typename: "ModelPlayerMarketingMessageConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
