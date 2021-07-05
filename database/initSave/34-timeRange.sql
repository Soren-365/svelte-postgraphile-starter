	CREATE TABLE timerange (
    "id"       SERIAL primary key   
,   "fromTimestamp"     TIMESTAMP
,   "toTimestamp"       TIMESTAMP
,   "timeCreated"       TIMESTAMP DEFAULT NOW()
 );

--//

