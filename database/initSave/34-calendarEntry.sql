CREATE TABLE calendarentry (
    "id" SERIAL primary key   
,   "fromTimestamp"     TIMESTAMP[] NOT NULL default array[now()]
,   "toTimestamp"       TIMESTAMP[] NOT NULL default array[now()]
,   "resourceType"      resourcetype[]
,   "comment"           VARCHAR(200)[]
,   "timeCreated"       TIMESTAMP DEFAULT NOW()
 );

 

--//

