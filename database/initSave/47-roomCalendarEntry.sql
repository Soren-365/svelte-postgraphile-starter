CREATE TABLE roomcalendarentry (
    "id" SERIAL primary key   
,   "atRoomCalendar"        INT
,   "fromDate"              DATE[]
,   "toDate"                DATE[]
,   "comment"               VARCHAR(200)[]
,   "timeCreated"           TIMESTAMP DEFAULT NOW()
 );

 CREATE INDEX ON roomcalendarentry("atRoomCalendar");

--//



