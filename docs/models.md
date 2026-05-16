# Data Models

## User

- id : int
- username : string
- displayedName : string
- email : string
- password : string (hash)
- firstName : string
- lastName : string
- birthDate: Date
- gender : char
- createdAt : datetime/timestamp
- updatedAt : datetime/timestamp
- isActive : boolean

## UserPref

## TeamLeague

- id : int
- leagueId : League id
- userId : User id
- name : string
- logo : Logo id
- shirtType : string
- primaryColor : string
- secondaryColor : string
- updatedAt : datetime/timestamp

## TeamSerieA

## TeamInfo

-

## Player

- id : int
- firstName : string
- lastName : string
- role : enum
- team : TeamSerieA Id
- shirtNumber : int
- nation : string
- height : int
- birthDate : int
- footPref : enum
- description : string
- status : enum ("Available", "Injured", "Suspended")

## MarketValues

- playerId : Player id
- currentPrice : int
- updatedAt : datetime/timestamp

## PlayerStats

- playerId : Player id
- ratedMatch : int
- cleanSheet : int
- goalsConceded : int
- penaltiesSaved : int
- goals : int
- assists : int
- autogols : int
- yellowCards : int
- redCards : int
- avgVote : double
- avgFantaVote : double
- updatedAt : datetime/timestamp

## League

## Sponsor
