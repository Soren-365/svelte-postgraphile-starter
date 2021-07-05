CREATE TABLE date_ (
	"useTimeStamp"  Boolean NOT NULL DEFAULT false
,	"timeStamp"		TIMESTAMP
,	"year"          CHAR(4)
,	"month"         VARCHAR(10)
,	"day"           VARCHAR(10)
,	"allDayEvent"   BOOLEAN NOT NULL DEFAULT false
,	"hour"         VARCHAR(2)
,	"minute"       VARCHAR(2)
,   "timeCreated"   TIMESTAMP DEFAULT NOW() 
);

--//

