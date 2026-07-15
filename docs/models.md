# Data Models

## User

- id : uuid
- username : string
- displayed_name : string
- email : string
- password : string (hash)
- first_name : string
- last_name : string
- birth_date: date
- gender : enum("M" | "F" | "O" | "N")
- avatar_url : string
- created_at : datetime
- updated_at : datetime
- is_active : boolean

## UserPref

- id : uuid
- user_id : User id
- language : string
- timezone : string
- notifications_email : boolean
- notifications_push : boolean
- theme : enum("light" | "dark" | "system")
- updated_at : datetime

## League

- id : uuid
- name : string
- max_teams : int
- admin : User id
- starting_budget : int
- status : enum("setup" | "auction" | "active" | "ended") <!-- cioè auction ?? -->
- type : enum("classic", "mantra")
- is_public : boolean
- created_at : datetime
- updated_at : datetime

## RealMatchday

- id : uuid
- matchday_number : int
- scheduled_date : date
- status : enum("upcoming" | "processing" | "completed")

## Matchday

- id : uuid
- league_id : League id
- real_matchday_id : RealMatchday id
- status : enum("upcoming" | "locked" | "processing" | "completed")

## MatchdayResult

- id : uuid
- matchday_id : Matchday id
- home_team_id : TeamLeague id
- away_team_id : TeamLeague id
- home_fantavote : double
- away_fantavote: double
- home_points : int
- away_points : int
- home_goals : int
- away_goals : int
- result : enum("home_win" | "away_win" | "draw")
- updated_at : datetime

## PlayerMatchdayScore (da capire cosa mettere)

- id : uuid
- real_matchday_id : RealMatchday id
- player_id : Player id
- vote : double
- fantavote : double
- goals : int
- goals_conceded : int
- assists : int
- yellow_card : boolean
- red_card : boolean
- minutes_played : int

## Standing

- id : uuid
- league_id : League id
- team_id : TeamLeague id
- played : int
- won : int
- drawn : int
- lost: int
- points: int
- rank : int
- total_score_for : double
- total_score_against : double
- updated_at : datetime

## Lineup

- id : uuid
- matchday_id : Matchday id
- team_id : TeamLeague id
- module : string
- is_locked : boolean
- submitted_at : datetime

## LineupSlot

- id : uuid
- lineup_id : Lineup id
- team_player_id : TeamPlayer id
- slot_type : enum("starter" | "bench")
- position : string
- bench_order : int

## TeamLeague

- id : uuid
- league_id : League id
- user_id : User id
- name : string
- logo : Logo id
- shirt_type : string
- primary_color : string
- secondary_color : string
- budget : int
- budget_spent : int
- weekly_income : int
- salary_cost : int
- stadium_level : int
- store_level : int
- hq_level : int
- sponsor_id: Sponsor id
- created_at : datetime
- updated_at : datetime

## LeagueMembership

- id : uuid
- league_id : League id
- user_id : User id
- role : enum("commissioner" | "member")
- joined_at : datetime

## TeamPlayer

- id : uuid
- team_id : TeamLeague id
- player_id : Player id
- purchased_price : int
- salary: int
- status : enum("active" | "released" | "transferred_out")
- released_at : datetime (nullable)

## TeamSerieA

- id : uuid
- name : string
- short_name : string
- city : string
- logo_url : string
- primary_color : string
- secondary_color : string
- stadium_name : string
- is_active : boolean
- updated_at : datetime

## Player

- id : uuid
- first_name : string
- last_name : string
- role : enum("Por", "Dd", "Ds", "Dc", "B", "E", "M", "C", "W", "T", "A", "Pc")
- team_serie_a_id : TeamSerieA Id
- shirt_number : int
- nationality : string
- height : int
- birth_date : date
- foot_pref : enum("right" | "left" | "both")
- description : string
- photo_url : string
- status : enum ("available", "injured", "suspended")
- is_active : boolean
- updated_at : datetime

## MarketValues

- id : uuid
- player_id : Player id
- value : int
- updated_at : datetime <!-- così no storico, ma aggiornamento-->

## PlayerStats

- id : uuid
- player_id : Player id
- rated_match : int
- clean_sheets : int
- goals_conceded : int
- penalties_saved : int
- goals : int
- assists : int
- own_goals : int
- yellow_cards : int
- red_cards : int
- avg_vote : double
- avg_fantavote : double
- updated_at : datetime

## Sponsor

- id : uuid
- name : string
- logo_url : string
- tier : int
- weekly_income : int
- half_season_income : int
- final_season_income : int <!-- da capire se portare su più stagioni -->

## Structures

- id : uuid
- type : enum("stadium" | "store" | "hq")
- name : string
- level : int
- weekly_income : int
- upgrade_cost : int

## AuctionSession

- id : uuid
- league_id : League id
- status : enum("completed" | "scheduled" | "active" | "paused"?)
- type : enum("live", "sealed bid") <!-- inizialmente solo live -->
- created_at : datetime

## AuctionLot
- id : uuid
- auction_session_id : AuctionSession id
- player_id : Player id
- status : enum("upcoming" | "active" | "sold" | "unsold")
- starting_price : int
- highest_bid : int (nullable)
- winner_team_id : TeamLeague id (nullable)
- started_at : datetime (nullable)
- closed_at : datetime (nullable)

## AuctionBidLog

- id : uuid
- auction_session_id : AuctionSession id
- team_league_id : TeamLeague id
- amount : int
- timestamp : datetime

## MarketListing

- id : uuid
- league_id : League id
- seller_team_id : TeamLeague id
- player_id : Player id
- asking_price : int (nullable)
- status : enum("open" | "closed" | "cancelled")
- created_at : datetime
- closed_at : datetime (nullable)

## Transfer

- id : uuid
- league_id : League id
- listing_id : MarketListing id (nullable)  <!-- da usare per trattative iniziate come post sulla bacheca, serve per accettare la vincente e chiudere le altre offerte -->
- sender_team_id : TeamLeague id
- receiver_team_id : TeamLeague id (null se svincolato)
- type : enum("Trade", "Market buy", "Market release", "Loan")
- status : enum("Pending" | "Accepted" | "Rejected" | "Cancelled")
- admin_approved_by : User id (nullable)
- admin_approved_at : datetime (nullable)
- cash_exchanged : int
- created_at : datetime
- resolved_at : datetime

## TransferItem (Per scambi con più giocatori)

<!-- es: 2 giocatori per 1 più crediti-->

- id : uuid
- transfer_id : Trasferimento id
- player_id : Player id
- direction : enum("from sender" | "to sender")

## Loan
- id : uuid
- league_id : League id
- transfer_id : Transfer id
- player_id : Player id
- from_team_id : TeamLeague id
- to_team_id : TeamLeague id
- type : enum("dry" | "with_buyout")
- buyout_price : int (nullable)
- starts_at : datetime
- expires_at : datetime
- status : enum("active" | "returned" | "bought_out" | "cancelled")
- resolved_at : datetime (nullable)

## FinancialLog

- id : uuid
- team_league_id : TeamLeague id
- amount : int
- transaction_type : enum("market_buy", "market_sell", "trade_adjustment", "sponsor_income", "stadium_income", "structure_upgrade", "salary_payment", "loan_buyout", "auction_win")
- description : string
- created_at : datetime
