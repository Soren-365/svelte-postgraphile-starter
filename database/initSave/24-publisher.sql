
CREATE TABLE publisher (
    "id"       SERIAL primary key   
,   "name"     VARCHAR(240) 
, 	"createdById"           INT 
, 	"belongsToId"        INT 
, 	"belongsToType"     resourcetype
,	"canReview"			BOOLEAN DEFAULT true
,	"canPublish"		BOOLEAN DEFAULT true
,	"isRomanian"        BOOLEAN
,   "isActive"          BOOLEAN DEFAULT true
,   "commandLogEntryId"		INT[] 
,   "timeCreated"       TIMESTAMP DEFAULT NOW()
,   "timeCommand"        TIMESTAMP	default NOW()
,    FOREIGN KEY ("createdById") REFERENCES usertable("id") 
);
 ALTER TABLE commandlogentry
 ADD FOREIGN KEY ("atPublisher") REFERENCES publisher("id"); 


CREATE INDEX ON publisher("createdById");
CREATE INDEX ON publisher("id");
CREATE INDEX ON publisher("commandLogEntryId");
CREATE INDEX ON publisher("belongsToType");

--//

