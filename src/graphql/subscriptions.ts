/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateDataSync = /* GraphQL */ `subscription OnCreateDataSync($filter: ModelSubscriptionDataSyncFilterInput) {
  onCreateDataSync(filter: $filter) {
    id
    syncedAt
    method
    sourceUrl
    title
    content
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateDataSyncSubscriptionVariables,
  APITypes.OnCreateDataSyncSubscription
>;
export const onUpdateDataSync = /* GraphQL */ `subscription OnUpdateDataSync($filter: ModelSubscriptionDataSyncFilterInput) {
  onUpdateDataSync(filter: $filter) {
    id
    syncedAt
    method
    sourceUrl
    title
    content
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateDataSyncSubscriptionVariables,
  APITypes.OnUpdateDataSyncSubscription
>;
export const onDeleteDataSync = /* GraphQL */ `subscription OnDeleteDataSync($filter: ModelSubscriptionDataSyncFilterInput) {
  onDeleteDataSync(filter: $filter) {
    id
    syncedAt
    method
    sourceUrl
    title
    content
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteDataSyncSubscriptionVariables,
  APITypes.OnDeleteDataSyncSubscription
>;
export const onCreateAsset = /* GraphQL */ `subscription OnCreateAsset($filter: ModelSubscriptionAssetFilterInput) {
  onCreateAsset(filter: $filter) {
    id
    name
    type
    condition
    acquiredDate
    lastCheckedDate
    venueId
    venue {
      id
      name
      address
      city
      country
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      venueDetailsId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAssetSubscriptionVariables,
  APITypes.OnCreateAssetSubscription
>;
export const onUpdateAsset = /* GraphQL */ `subscription OnUpdateAsset($filter: ModelSubscriptionAssetFilterInput) {
  onUpdateAsset(filter: $filter) {
    id
    name
    type
    condition
    acquiredDate
    lastCheckedDate
    venueId
    venue {
      id
      name
      address
      city
      country
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      venueDetailsId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAssetSubscriptionVariables,
  APITypes.OnUpdateAssetSubscription
>;
export const onDeleteAsset = /* GraphQL */ `subscription OnDeleteAsset($filter: ModelSubscriptionAssetFilterInput) {
  onDeleteAsset(filter: $filter) {
    id
    name
    type
    condition
    acquiredDate
    lastCheckedDate
    venueId
    venue {
      id
      name
      address
      city
      country
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      venueDetailsId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAssetSubscriptionVariables,
  APITypes.OnDeleteAssetSubscription
>;
export const onCreateVenue = /* GraphQL */ `subscription OnCreateVenue($filter: ModelSubscriptionVenueFilterInput) {
  onCreateVenue(filter: $filter) {
    id
    name
    address
    city
    country
    details {
      id
      venueId
      startDate
      status
      lastCustomerSuccessVisit
      totalGamesHeld
      averagePlayersPerGame
      gameNights
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    assets {
      nextToken
      startedAt
      __typename
    }
    games {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    venueDetailsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateVenueSubscriptionVariables,
  APITypes.OnCreateVenueSubscription
>;
export const onUpdateVenue = /* GraphQL */ `subscription OnUpdateVenue($filter: ModelSubscriptionVenueFilterInput) {
  onUpdateVenue(filter: $filter) {
    id
    name
    address
    city
    country
    details {
      id
      venueId
      startDate
      status
      lastCustomerSuccessVisit
      totalGamesHeld
      averagePlayersPerGame
      gameNights
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    assets {
      nextToken
      startedAt
      __typename
    }
    games {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    venueDetailsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateVenueSubscriptionVariables,
  APITypes.OnUpdateVenueSubscription
>;
export const onDeleteVenue = /* GraphQL */ `subscription OnDeleteVenue($filter: ModelSubscriptionVenueFilterInput) {
  onDeleteVenue(filter: $filter) {
    id
    name
    address
    city
    country
    details {
      id
      venueId
      startDate
      status
      lastCustomerSuccessVisit
      totalGamesHeld
      averagePlayersPerGame
      gameNights
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    assets {
      nextToken
      startedAt
      __typename
    }
    games {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    venueDetailsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteVenueSubscriptionVariables,
  APITypes.OnDeleteVenueSubscription
>;
export const onCreateVenueDetails = /* GraphQL */ `subscription OnCreateVenueDetails(
  $filter: ModelSubscriptionVenueDetailsFilterInput
) {
  onCreateVenueDetails(filter: $filter) {
    id
    venueId
    startDate
    status
    lastCustomerSuccessVisit
    totalGamesHeld
    averagePlayersPerGame
    gameNights
    venue {
      id
      name
      address
      city
      country
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      venueDetailsId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateVenueDetailsSubscriptionVariables,
  APITypes.OnCreateVenueDetailsSubscription
>;
export const onUpdateVenueDetails = /* GraphQL */ `subscription OnUpdateVenueDetails(
  $filter: ModelSubscriptionVenueDetailsFilterInput
) {
  onUpdateVenueDetails(filter: $filter) {
    id
    venueId
    startDate
    status
    lastCustomerSuccessVisit
    totalGamesHeld
    averagePlayersPerGame
    gameNights
    venue {
      id
      name
      address
      city
      country
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      venueDetailsId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateVenueDetailsSubscriptionVariables,
  APITypes.OnUpdateVenueDetailsSubscription
>;
export const onDeleteVenueDetails = /* GraphQL */ `subscription OnDeleteVenueDetails(
  $filter: ModelSubscriptionVenueDetailsFilterInput
) {
  onDeleteVenueDetails(filter: $filter) {
    id
    venueId
    startDate
    status
    lastCustomerSuccessVisit
    totalGamesHeld
    averagePlayersPerGame
    gameNights
    venue {
      id
      name
      address
      city
      country
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      venueDetailsId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteVenueDetailsSubscriptionVariables,
  APITypes.OnDeleteVenueDetailsSubscription
>;
export const onCreateGame = /* GraphQL */ `subscription OnCreateGame($filter: ModelSubscriptionGameFilterInput) {
  onCreateGame(filter: $filter) {
    id
    name
    type
    status
    gameDateTime
    venueId
    sourceUrl
    seriesName
    isAdHoc
    tournamentStructureId
    cashStructureId
    registrationStatus
    gameVariant
    prizepool
    totalEntries
    totalRebuys
    totalAddons
    totalDuration
    gameTags
    venue {
      id
      name
      address
      city
      country
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      venueDetailsId
      __typename
    }
    tournamentStructure {
      id
      name
      type
      buyIn
      rake
      startingStack
      hasGuarantee
      guaranteeAmount
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    cashStructure {
      id
      name
      smallBlind
      bigBlind
      minBuyIn
      maxBuyIn
      rakeStructureId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    playerResults {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateGameSubscriptionVariables,
  APITypes.OnCreateGameSubscription
>;
export const onUpdateGame = /* GraphQL */ `subscription OnUpdateGame($filter: ModelSubscriptionGameFilterInput) {
  onUpdateGame(filter: $filter) {
    id
    name
    type
    status
    gameDateTime
    venueId
    sourceUrl
    seriesName
    isAdHoc
    tournamentStructureId
    cashStructureId
    registrationStatus
    gameVariant
    prizepool
    totalEntries
    totalRebuys
    totalAddons
    totalDuration
    gameTags
    venue {
      id
      name
      address
      city
      country
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      venueDetailsId
      __typename
    }
    tournamentStructure {
      id
      name
      type
      buyIn
      rake
      startingStack
      hasGuarantee
      guaranteeAmount
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    cashStructure {
      id
      name
      smallBlind
      bigBlind
      minBuyIn
      maxBuyIn
      rakeStructureId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    playerResults {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateGameSubscriptionVariables,
  APITypes.OnUpdateGameSubscription
>;
export const onDeleteGame = /* GraphQL */ `subscription OnDeleteGame($filter: ModelSubscriptionGameFilterInput) {
  onDeleteGame(filter: $filter) {
    id
    name
    type
    status
    gameDateTime
    venueId
    sourceUrl
    seriesName
    isAdHoc
    tournamentStructureId
    cashStructureId
    registrationStatus
    gameVariant
    prizepool
    totalEntries
    totalRebuys
    totalAddons
    totalDuration
    gameTags
    venue {
      id
      name
      address
      city
      country
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      venueDetailsId
      __typename
    }
    tournamentStructure {
      id
      name
      type
      buyIn
      rake
      startingStack
      hasGuarantee
      guaranteeAmount
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    cashStructure {
      id
      name
      smallBlind
      bigBlind
      minBuyIn
      maxBuyIn
      rakeStructureId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    playerResults {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteGameSubscriptionVariables,
  APITypes.OnDeleteGameSubscription
>;
export const onCreateTournamentStructure = /* GraphQL */ `subscription OnCreateTournamentStructure(
  $filter: ModelSubscriptionTournamentStructureFilterInput
) {
  onCreateTournamentStructure(filter: $filter) {
    id
    name
    type
    buyIn
    rake
    startingStack
    hasGuarantee
    guaranteeAmount
    levels {
      nextToken
      startedAt
      __typename
    }
    games {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTournamentStructureSubscriptionVariables,
  APITypes.OnCreateTournamentStructureSubscription
>;
export const onUpdateTournamentStructure = /* GraphQL */ `subscription OnUpdateTournamentStructure(
  $filter: ModelSubscriptionTournamentStructureFilterInput
) {
  onUpdateTournamentStructure(filter: $filter) {
    id
    name
    type
    buyIn
    rake
    startingStack
    hasGuarantee
    guaranteeAmount
    levels {
      nextToken
      startedAt
      __typename
    }
    games {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTournamentStructureSubscriptionVariables,
  APITypes.OnUpdateTournamentStructureSubscription
>;
export const onDeleteTournamentStructure = /* GraphQL */ `subscription OnDeleteTournamentStructure(
  $filter: ModelSubscriptionTournamentStructureFilterInput
) {
  onDeleteTournamentStructure(filter: $filter) {
    id
    name
    type
    buyIn
    rake
    startingStack
    hasGuarantee
    guaranteeAmount
    levels {
      nextToken
      startedAt
      __typename
    }
    games {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTournamentStructureSubscriptionVariables,
  APITypes.OnDeleteTournamentStructureSubscription
>;
export const onCreateTournamentLevel = /* GraphQL */ `subscription OnCreateTournamentLevel(
  $filter: ModelSubscriptionTournamentLevelFilterInput
) {
  onCreateTournamentLevel(filter: $filter) {
    id
    structureId
    levelNumber
    durationMinutes
    smallBlind
    bigBlind
    ante
    breakMinutes
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTournamentLevelSubscriptionVariables,
  APITypes.OnCreateTournamentLevelSubscription
>;
export const onUpdateTournamentLevel = /* GraphQL */ `subscription OnUpdateTournamentLevel(
  $filter: ModelSubscriptionTournamentLevelFilterInput
) {
  onUpdateTournamentLevel(filter: $filter) {
    id
    structureId
    levelNumber
    durationMinutes
    smallBlind
    bigBlind
    ante
    breakMinutes
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTournamentLevelSubscriptionVariables,
  APITypes.OnUpdateTournamentLevelSubscription
>;
export const onDeleteTournamentLevel = /* GraphQL */ `subscription OnDeleteTournamentLevel(
  $filter: ModelSubscriptionTournamentLevelFilterInput
) {
  onDeleteTournamentLevel(filter: $filter) {
    id
    structureId
    levelNumber
    durationMinutes
    smallBlind
    bigBlind
    ante
    breakMinutes
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTournamentLevelSubscriptionVariables,
  APITypes.OnDeleteTournamentLevelSubscription
>;
export const onCreateRakeStructure = /* GraphQL */ `subscription OnCreateRakeStructure(
  $filter: ModelSubscriptionRakeStructureFilterInput
) {
  onCreateRakeStructure(filter: $filter) {
    id
    name
    rakePercentage
    maxRake
    cashStructures {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateRakeStructureSubscriptionVariables,
  APITypes.OnCreateRakeStructureSubscription
>;
export const onUpdateRakeStructure = /* GraphQL */ `subscription OnUpdateRakeStructure(
  $filter: ModelSubscriptionRakeStructureFilterInput
) {
  onUpdateRakeStructure(filter: $filter) {
    id
    name
    rakePercentage
    maxRake
    cashStructures {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateRakeStructureSubscriptionVariables,
  APITypes.OnUpdateRakeStructureSubscription
>;
export const onDeleteRakeStructure = /* GraphQL */ `subscription OnDeleteRakeStructure(
  $filter: ModelSubscriptionRakeStructureFilterInput
) {
  onDeleteRakeStructure(filter: $filter) {
    id
    name
    rakePercentage
    maxRake
    cashStructures {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteRakeStructureSubscriptionVariables,
  APITypes.OnDeleteRakeStructureSubscription
>;
export const onCreateCashStructure = /* GraphQL */ `subscription OnCreateCashStructure(
  $filter: ModelSubscriptionCashStructureFilterInput
) {
  onCreateCashStructure(filter: $filter) {
    id
    name
    smallBlind
    bigBlind
    minBuyIn
    maxBuyIn
    rakeStructureId
    rakeStructure {
      id
      name
      rakePercentage
      maxRake
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    games {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCashStructureSubscriptionVariables,
  APITypes.OnCreateCashStructureSubscription
>;
export const onUpdateCashStructure = /* GraphQL */ `subscription OnUpdateCashStructure(
  $filter: ModelSubscriptionCashStructureFilterInput
) {
  onUpdateCashStructure(filter: $filter) {
    id
    name
    smallBlind
    bigBlind
    minBuyIn
    maxBuyIn
    rakeStructureId
    rakeStructure {
      id
      name
      rakePercentage
      maxRake
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    games {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCashStructureSubscriptionVariables,
  APITypes.OnUpdateCashStructureSubscription
>;
export const onDeleteCashStructure = /* GraphQL */ `subscription OnDeleteCashStructure(
  $filter: ModelSubscriptionCashStructureFilterInput
) {
  onDeleteCashStructure(filter: $filter) {
    id
    name
    smallBlind
    bigBlind
    minBuyIn
    maxBuyIn
    rakeStructureId
    rakeStructure {
      id
      name
      rakePercentage
      maxRake
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    games {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCashStructureSubscriptionVariables,
  APITypes.OnDeleteCashStructureSubscription
>;
export const onCreatePlayer = /* GraphQL */ `subscription OnCreatePlayer($filter: ModelSubscriptionPlayerFilterInput) {
  onCreatePlayer(filter: $filter) {
    id
    firstName
    lastName
    email
    phone
    registrationVenueId
    account {
      id
      playerId
      creationDate
      status
      category
      tier
      totalGamesPlayed
      averageBuyIn
      lastPlayedDate
      venuesVisited
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      playerAccountMarketingPreferencesId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    playerAccountId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePlayerSubscriptionVariables,
  APITypes.OnCreatePlayerSubscription
>;
export const onUpdatePlayer = /* GraphQL */ `subscription OnUpdatePlayer($filter: ModelSubscriptionPlayerFilterInput) {
  onUpdatePlayer(filter: $filter) {
    id
    firstName
    lastName
    email
    phone
    registrationVenueId
    account {
      id
      playerId
      creationDate
      status
      category
      tier
      totalGamesPlayed
      averageBuyIn
      lastPlayedDate
      venuesVisited
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      playerAccountMarketingPreferencesId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    playerAccountId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePlayerSubscriptionVariables,
  APITypes.OnUpdatePlayerSubscription
>;
export const onDeletePlayer = /* GraphQL */ `subscription OnDeletePlayer($filter: ModelSubscriptionPlayerFilterInput) {
  onDeletePlayer(filter: $filter) {
    id
    firstName
    lastName
    email
    phone
    registrationVenueId
    account {
      id
      playerId
      creationDate
      status
      category
      tier
      totalGamesPlayed
      averageBuyIn
      lastPlayedDate
      venuesVisited
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      playerAccountMarketingPreferencesId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    playerAccountId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePlayerSubscriptionVariables,
  APITypes.OnDeletePlayerSubscription
>;
export const onCreatePlayerAccount = /* GraphQL */ `subscription OnCreatePlayerAccount(
  $filter: ModelSubscriptionPlayerAccountFilterInput
) {
  onCreatePlayerAccount(filter: $filter) {
    id
    playerId
    creationDate
    status
    category
    tier
    totalGamesPlayed
    averageBuyIn
    lastPlayedDate
    venuesVisited
    transactions {
      nextToken
      startedAt
      __typename
    }
    results {
      nextToken
      startedAt
      __typename
    }
    tickets {
      nextToken
      startedAt
      __typename
    }
    marketingPreferences {
      id
      playerAccountId
      optOutSms
      optOutEmail
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    player {
      id
      firstName
      lastName
      email
      phone
      registrationVenueId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      playerAccountId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    playerAccountMarketingPreferencesId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePlayerAccountSubscriptionVariables,
  APITypes.OnCreatePlayerAccountSubscription
>;
export const onUpdatePlayerAccount = /* GraphQL */ `subscription OnUpdatePlayerAccount(
  $filter: ModelSubscriptionPlayerAccountFilterInput
) {
  onUpdatePlayerAccount(filter: $filter) {
    id
    playerId
    creationDate
    status
    category
    tier
    totalGamesPlayed
    averageBuyIn
    lastPlayedDate
    venuesVisited
    transactions {
      nextToken
      startedAt
      __typename
    }
    results {
      nextToken
      startedAt
      __typename
    }
    tickets {
      nextToken
      startedAt
      __typename
    }
    marketingPreferences {
      id
      playerAccountId
      optOutSms
      optOutEmail
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    player {
      id
      firstName
      lastName
      email
      phone
      registrationVenueId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      playerAccountId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    playerAccountMarketingPreferencesId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePlayerAccountSubscriptionVariables,
  APITypes.OnUpdatePlayerAccountSubscription
>;
export const onDeletePlayerAccount = /* GraphQL */ `subscription OnDeletePlayerAccount(
  $filter: ModelSubscriptionPlayerAccountFilterInput
) {
  onDeletePlayerAccount(filter: $filter) {
    id
    playerId
    creationDate
    status
    category
    tier
    totalGamesPlayed
    averageBuyIn
    lastPlayedDate
    venuesVisited
    transactions {
      nextToken
      startedAt
      __typename
    }
    results {
      nextToken
      startedAt
      __typename
    }
    tickets {
      nextToken
      startedAt
      __typename
    }
    marketingPreferences {
      id
      playerAccountId
      optOutSms
      optOutEmail
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    player {
      id
      firstName
      lastName
      email
      phone
      registrationVenueId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      playerAccountId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    playerAccountMarketingPreferencesId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePlayerAccountSubscriptionVariables,
  APITypes.OnDeletePlayerAccountSubscription
>;
export const onCreatePlayerTransaction = /* GraphQL */ `subscription OnCreatePlayerTransaction(
  $filter: ModelSubscriptionPlayerTransactionFilterInput
) {
  onCreatePlayerTransaction(filter: $filter) {
    id
    playerAccountId
    type
    amount
    transactionDate
    notes
    gameId
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePlayerTransactionSubscriptionVariables,
  APITypes.OnCreatePlayerTransactionSubscription
>;
export const onUpdatePlayerTransaction = /* GraphQL */ `subscription OnUpdatePlayerTransaction(
  $filter: ModelSubscriptionPlayerTransactionFilterInput
) {
  onUpdatePlayerTransaction(filter: $filter) {
    id
    playerAccountId
    type
    amount
    transactionDate
    notes
    gameId
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePlayerTransactionSubscriptionVariables,
  APITypes.OnUpdatePlayerTransactionSubscription
>;
export const onDeletePlayerTransaction = /* GraphQL */ `subscription OnDeletePlayerTransaction(
  $filter: ModelSubscriptionPlayerTransactionFilterInput
) {
  onDeletePlayerTransaction(filter: $filter) {
    id
    playerAccountId
    type
    amount
    transactionDate
    notes
    gameId
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePlayerTransactionSubscriptionVariables,
  APITypes.OnDeletePlayerTransactionSubscription
>;
export const onCreatePlayerResult = /* GraphQL */ `subscription OnCreatePlayerResult(
  $filter: ModelSubscriptionPlayerResultFilterInput
) {
  onCreatePlayerResult(filter: $filter) {
    id
    playerAccountId
    gameId
    finishingPlace
    prizeWon
    totalRunners
    game {
      id
      name
      type
      status
      gameDateTime
      venueId
      sourceUrl
      seriesName
      isAdHoc
      tournamentStructureId
      cashStructureId
      registrationStatus
      gameVariant
      prizepool
      totalEntries
      totalRebuys
      totalAddons
      totalDuration
      gameTags
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePlayerResultSubscriptionVariables,
  APITypes.OnCreatePlayerResultSubscription
>;
export const onUpdatePlayerResult = /* GraphQL */ `subscription OnUpdatePlayerResult(
  $filter: ModelSubscriptionPlayerResultFilterInput
) {
  onUpdatePlayerResult(filter: $filter) {
    id
    playerAccountId
    gameId
    finishingPlace
    prizeWon
    totalRunners
    game {
      id
      name
      type
      status
      gameDateTime
      venueId
      sourceUrl
      seriesName
      isAdHoc
      tournamentStructureId
      cashStructureId
      registrationStatus
      gameVariant
      prizepool
      totalEntries
      totalRebuys
      totalAddons
      totalDuration
      gameTags
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePlayerResultSubscriptionVariables,
  APITypes.OnUpdatePlayerResultSubscription
>;
export const onDeletePlayerResult = /* GraphQL */ `subscription OnDeletePlayerResult(
  $filter: ModelSubscriptionPlayerResultFilterInput
) {
  onDeletePlayerResult(filter: $filter) {
    id
    playerAccountId
    gameId
    finishingPlace
    prizeWon
    totalRunners
    game {
      id
      name
      type
      status
      gameDateTime
      venueId
      sourceUrl
      seriesName
      isAdHoc
      tournamentStructureId
      cashStructureId
      registrationStatus
      gameVariant
      prizepool
      totalEntries
      totalRebuys
      totalAddons
      totalDuration
      gameTags
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePlayerResultSubscriptionVariables,
  APITypes.OnDeletePlayerResultSubscription
>;
export const onCreatePlayerMarketingMessage = /* GraphQL */ `subscription OnCreatePlayerMarketingMessage(
  $filter: ModelSubscriptionPlayerMarketingMessageFilterInput
) {
  onCreatePlayerMarketingMessage(filter: $filter) {
    id
    playerId
    marketingMessageId
    status
    sentAt
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePlayerMarketingMessageSubscriptionVariables,
  APITypes.OnCreatePlayerMarketingMessageSubscription
>;
export const onUpdatePlayerMarketingMessage = /* GraphQL */ `subscription OnUpdatePlayerMarketingMessage(
  $filter: ModelSubscriptionPlayerMarketingMessageFilterInput
) {
  onUpdatePlayerMarketingMessage(filter: $filter) {
    id
    playerId
    marketingMessageId
    status
    sentAt
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePlayerMarketingMessageSubscriptionVariables,
  APITypes.OnUpdatePlayerMarketingMessageSubscription
>;
export const onDeletePlayerMarketingMessage = /* GraphQL */ `subscription OnDeletePlayerMarketingMessage(
  $filter: ModelSubscriptionPlayerMarketingMessageFilterInput
) {
  onDeletePlayerMarketingMessage(filter: $filter) {
    id
    playerId
    marketingMessageId
    status
    sentAt
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePlayerMarketingMessageSubscriptionVariables,
  APITypes.OnDeletePlayerMarketingMessageSubscription
>;
export const onCreatePlayerMarketingPreferences = /* GraphQL */ `subscription OnCreatePlayerMarketingPreferences(
  $filter: ModelSubscriptionPlayerMarketingPreferencesFilterInput
) {
  onCreatePlayerMarketingPreferences(filter: $filter) {
    id
    playerAccountId
    optOutSms
    optOutEmail
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePlayerMarketingPreferencesSubscriptionVariables,
  APITypes.OnCreatePlayerMarketingPreferencesSubscription
>;
export const onUpdatePlayerMarketingPreferences = /* GraphQL */ `subscription OnUpdatePlayerMarketingPreferences(
  $filter: ModelSubscriptionPlayerMarketingPreferencesFilterInput
) {
  onUpdatePlayerMarketingPreferences(filter: $filter) {
    id
    playerAccountId
    optOutSms
    optOutEmail
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePlayerMarketingPreferencesSubscriptionVariables,
  APITypes.OnUpdatePlayerMarketingPreferencesSubscription
>;
export const onDeletePlayerMarketingPreferences = /* GraphQL */ `subscription OnDeletePlayerMarketingPreferences(
  $filter: ModelSubscriptionPlayerMarketingPreferencesFilterInput
) {
  onDeletePlayerMarketingPreferences(filter: $filter) {
    id
    playerAccountId
    optOutSms
    optOutEmail
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePlayerMarketingPreferencesSubscriptionVariables,
  APITypes.OnDeletePlayerMarketingPreferencesSubscription
>;
export const onCreateTicketTemplate = /* GraphQL */ `subscription OnCreateTicketTemplate(
  $filter: ModelSubscriptionTicketTemplateFilterInput
) {
  onCreateTicketTemplate(filter: $filter) {
    id
    name
    description
    value
    validityDays
    originGameId
    targetGameId
    playerTickets {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTicketTemplateSubscriptionVariables,
  APITypes.OnCreateTicketTemplateSubscription
>;
export const onUpdateTicketTemplate = /* GraphQL */ `subscription OnUpdateTicketTemplate(
  $filter: ModelSubscriptionTicketTemplateFilterInput
) {
  onUpdateTicketTemplate(filter: $filter) {
    id
    name
    description
    value
    validityDays
    originGameId
    targetGameId
    playerTickets {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTicketTemplateSubscriptionVariables,
  APITypes.OnUpdateTicketTemplateSubscription
>;
export const onDeleteTicketTemplate = /* GraphQL */ `subscription OnDeleteTicketTemplate(
  $filter: ModelSubscriptionTicketTemplateFilterInput
) {
  onDeleteTicketTemplate(filter: $filter) {
    id
    name
    description
    value
    validityDays
    originGameId
    targetGameId
    playerTickets {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTicketTemplateSubscriptionVariables,
  APITypes.OnDeleteTicketTemplateSubscription
>;
export const onCreatePlayerTicket = /* GraphQL */ `subscription OnCreatePlayerTicket(
  $filter: ModelSubscriptionPlayerTicketFilterInput
) {
  onCreatePlayerTicket(filter: $filter) {
    id
    playerAccountId
    ticketTemplateId
    assignedAt
    expiryDate
    status
    usedInGameId
    ticketTemplate {
      id
      name
      description
      value
      validityDays
      originGameId
      targetGameId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePlayerTicketSubscriptionVariables,
  APITypes.OnCreatePlayerTicketSubscription
>;
export const onUpdatePlayerTicket = /* GraphQL */ `subscription OnUpdatePlayerTicket(
  $filter: ModelSubscriptionPlayerTicketFilterInput
) {
  onUpdatePlayerTicket(filter: $filter) {
    id
    playerAccountId
    ticketTemplateId
    assignedAt
    expiryDate
    status
    usedInGameId
    ticketTemplate {
      id
      name
      description
      value
      validityDays
      originGameId
      targetGameId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePlayerTicketSubscriptionVariables,
  APITypes.OnUpdatePlayerTicketSubscription
>;
export const onDeletePlayerTicket = /* GraphQL */ `subscription OnDeletePlayerTicket(
  $filter: ModelSubscriptionPlayerTicketFilterInput
) {
  onDeletePlayerTicket(filter: $filter) {
    id
    playerAccountId
    ticketTemplateId
    assignedAt
    expiryDate
    status
    usedInGameId
    ticketTemplate {
      id
      name
      description
      value
      validityDays
      originGameId
      targetGameId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePlayerTicketSubscriptionVariables,
  APITypes.OnDeletePlayerTicketSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $id: String
) {
  onCreateUser(filter: $filter, id: $id) {
    id
    username
    email
    role
    preferences {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $id: String
) {
  onUpdateUser(filter: $filter, id: $id) {
    id
    username
    email
    role
    preferences {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $id: String
) {
  onDeleteUser(filter: $filter, id: $id) {
    id
    username
    email
    role
    preferences {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateStaff = /* GraphQL */ `subscription OnCreateStaff($filter: ModelSubscriptionStaffFilterInput) {
  onCreateStaff(filter: $filter) {
    id
    firstName
    lastName
    role
    assignedVenueId
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateStaffSubscriptionVariables,
  APITypes.OnCreateStaffSubscription
>;
export const onUpdateStaff = /* GraphQL */ `subscription OnUpdateStaff($filter: ModelSubscriptionStaffFilterInput) {
  onUpdateStaff(filter: $filter) {
    id
    firstName
    lastName
    role
    assignedVenueId
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateStaffSubscriptionVariables,
  APITypes.OnUpdateStaffSubscription
>;
export const onDeleteStaff = /* GraphQL */ `subscription OnDeleteStaff($filter: ModelSubscriptionStaffFilterInput) {
  onDeleteStaff(filter: $filter) {
    id
    firstName
    lastName
    role
    assignedVenueId
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteStaffSubscriptionVariables,
  APITypes.OnDeleteStaffSubscription
>;
export const onCreateUserPreference = /* GraphQL */ `subscription OnCreateUserPreference(
  $filter: ModelSubscriptionUserPreferenceFilterInput
  $userId: String
) {
  onCreateUserPreference(filter: $filter, userId: $userId) {
    id
    userId
    page
    widget
    preference
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserPreferenceSubscriptionVariables,
  APITypes.OnCreateUserPreferenceSubscription
>;
export const onUpdateUserPreference = /* GraphQL */ `subscription OnUpdateUserPreference(
  $filter: ModelSubscriptionUserPreferenceFilterInput
  $userId: String
) {
  onUpdateUserPreference(filter: $filter, userId: $userId) {
    id
    userId
    page
    widget
    preference
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserPreferenceSubscriptionVariables,
  APITypes.OnUpdateUserPreferenceSubscription
>;
export const onDeleteUserPreference = /* GraphQL */ `subscription OnDeleteUserPreference(
  $filter: ModelSubscriptionUserPreferenceFilterInput
  $userId: String
) {
  onDeleteUserPreference(filter: $filter, userId: $userId) {
    id
    userId
    page
    widget
    preference
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserPreferenceSubscriptionVariables,
  APITypes.OnDeleteUserPreferenceSubscription
>;
export const onCreateSocialPost = /* GraphQL */ `subscription OnCreateSocialPost(
  $filter: ModelSubscriptionSocialPostFilterInput
) {
  onCreateSocialPost(filter: $filter) {
    id
    socialAccountId
    content
    imageUrl
    postedAt
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSocialPostSubscriptionVariables,
  APITypes.OnCreateSocialPostSubscription
>;
export const onUpdateSocialPost = /* GraphQL */ `subscription OnUpdateSocialPost(
  $filter: ModelSubscriptionSocialPostFilterInput
) {
  onUpdateSocialPost(filter: $filter) {
    id
    socialAccountId
    content
    imageUrl
    postedAt
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSocialPostSubscriptionVariables,
  APITypes.OnUpdateSocialPostSubscription
>;
export const onDeleteSocialPost = /* GraphQL */ `subscription OnDeleteSocialPost(
  $filter: ModelSubscriptionSocialPostFilterInput
) {
  onDeleteSocialPost(filter: $filter) {
    id
    socialAccountId
    content
    imageUrl
    postedAt
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSocialPostSubscriptionVariables,
  APITypes.OnDeleteSocialPostSubscription
>;
export const onCreateSocialAccount = /* GraphQL */ `subscription OnCreateSocialAccount(
  $filter: ModelSubscriptionSocialAccountFilterInput
) {
  onCreateSocialAccount(filter: $filter) {
    id
    platform
    accountName
    apiKey
    apiSecret
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSocialAccountSubscriptionVariables,
  APITypes.OnCreateSocialAccountSubscription
>;
export const onUpdateSocialAccount = /* GraphQL */ `subscription OnUpdateSocialAccount(
  $filter: ModelSubscriptionSocialAccountFilterInput
) {
  onUpdateSocialAccount(filter: $filter) {
    id
    platform
    accountName
    apiKey
    apiSecret
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSocialAccountSubscriptionVariables,
  APITypes.OnUpdateSocialAccountSubscription
>;
export const onDeleteSocialAccount = /* GraphQL */ `subscription OnDeleteSocialAccount(
  $filter: ModelSubscriptionSocialAccountFilterInput
) {
  onDeleteSocialAccount(filter: $filter) {
    id
    platform
    accountName
    apiKey
    apiSecret
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSocialAccountSubscriptionVariables,
  APITypes.OnDeleteSocialAccountSubscription
>;
export const onCreateMarketingMessage = /* GraphQL */ `subscription OnCreateMarketingMessage(
  $filter: ModelSubscriptionMarketingMessageFilterInput
) {
  onCreateMarketingMessage(filter: $filter) {
    id
    name
    subject
    emailBody
    smsBody
    sentMessages {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMarketingMessageSubscriptionVariables,
  APITypes.OnCreateMarketingMessageSubscription
>;
export const onUpdateMarketingMessage = /* GraphQL */ `subscription OnUpdateMarketingMessage(
  $filter: ModelSubscriptionMarketingMessageFilterInput
) {
  onUpdateMarketingMessage(filter: $filter) {
    id
    name
    subject
    emailBody
    smsBody
    sentMessages {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMarketingMessageSubscriptionVariables,
  APITypes.OnUpdateMarketingMessageSubscription
>;
export const onDeleteMarketingMessage = /* GraphQL */ `subscription OnDeleteMarketingMessage(
  $filter: ModelSubscriptionMarketingMessageFilterInput
) {
  onDeleteMarketingMessage(filter: $filter) {
    id
    name
    subject
    emailBody
    smsBody
    sentMessages {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMarketingMessageSubscriptionVariables,
  APITypes.OnDeleteMarketingMessageSubscription
>;
