// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const SyncMethod = {
  "SCRAPE": "SCRAPE",
  "API": "API",
  "MANUAL": "MANUAL"
};

const AssetCondition = {
  "NEW": "NEW",
  "GOOD": "GOOD",
  "FAIR": "FAIR",
  "POOR": "POOR",
  "RETIRED": "RETIRED"
};

const VenueStatus = {
  "ACTIVE": "ACTIVE",
  "INACTIVE": "INACTIVE",
  "PENDING": "PENDING"
};

const GameType = {
  "TOURNAMENT": "TOURNAMENT",
  "CASH_GAME": "CASH_GAME"
};

const GameStatus = {
  "SCHEDULED": "SCHEDULED",
  "LIVE": "LIVE",
  "COMPLETED": "COMPLETED",
  "CANCELLED": "CANCELLED",
  "FINISHED": "FINISHED"
};

const TournamentType = {
  "FREEZEOUT": "FREEZEOUT",
  "REBUY": "REBUY",
  "SATELLITE": "SATELLITE",
  "DEEPSTACK": "DEEPSTACK"
};

const PlayerAccountStatus = {
  "ACTIVE": "ACTIVE",
  "SUSPENDED": "SUSPENDED",
  "PENDING_VERIFICATION": "PENDING_VERIFICATION"
};

const PlayerAccountCategory = {
  "NEW": "NEW",
  "RECREATIONAL": "RECREATIONAL",
  "REGULAR": "REGULAR",
  "VIP": "VIP",
  "LAPSED": "LAPSED"
};

const TransactionType = {
  "BUY_IN": "BUY_IN",
  "DEPOSIT": "DEPOSIT",
  "TICKET_AWARD": "TICKET_AWARD",
  "TICKET_REDEMPTION": "TICKET_REDEMPTION",
  "WITHDRAWAL": "WITHDRAWAL"
};

const MessageStatus = {
  "SENT": "SENT",
  "DELIVERED": "DELIVERED",
  "FAILED": "FAILED",
  "READ": "READ"
};

const UserRole = {
  "SUPER_ADMIN": "SUPER_ADMIN",
  "ADMIN": "ADMIN",
  "VENUE_MANAGER": "VENUE_MANAGER",
  "TOURNAMENT_DIRECTOR": "TOURNAMENT_DIRECTOR",
  "MARKETING": "MARKETING"
};

const StaffRole = {
  "DEALER": "DEALER",
  "FLOOR_MANAGER": "FLOOR_MANAGER",
  "SERVICE": "SERVICE",
  "TOURNAMENT_DIRECTOR": "TOURNAMENT_DIRECTOR"
};

const TicketStatus = {
  "ACTIVE": "ACTIVE",
  "EXPIRED": "EXPIRED",
  "USED": "USED"
};

const { DataSync, Asset, Venue, VenueDetails, Game, TournamentStructure, TournamentLevel, RakeStructure, CashStructure, Player, PlayerAccount, PlayerTransaction, PlayerResult, PlayerMarketingMessage, PlayerMarketingPreferences, TicketTemplate, PlayerTicket, User, Staff, UserPreference, SocialPost, SocialAccount, MarketingMessage } = initSchema(schema);

export {
  DataSync,
  Asset,
  Venue,
  VenueDetails,
  Game,
  TournamentStructure,
  TournamentLevel,
  RakeStructure,
  CashStructure,
  Player,
  PlayerAccount,
  PlayerTransaction,
  PlayerResult,
  PlayerMarketingMessage,
  PlayerMarketingPreferences,
  TicketTemplate,
  PlayerTicket,
  User,
  Staff,
  UserPreference,
  SocialPost,
  SocialAccount,
  MarketingMessage,
  SyncMethod,
  AssetCondition,
  VenueStatus,
  GameType,
  GameStatus,
  TournamentType,
  PlayerAccountStatus,
  PlayerAccountCategory,
  TransactionType,
  MessageStatus,
  UserRole,
  StaffRole,
  TicketStatus
};