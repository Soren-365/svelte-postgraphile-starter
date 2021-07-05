CREATE TABLE commandlogentry (
    "id"       SERIAL primary key  
,    "atPublisher"        INT NOT NULL 
,	"belongsToType"		 resourcetype DEFAULT ('Unknown')
,   "resourceId"         INT 
,	"logcommand"         logcommand NOT NULL 
,   "timeCommand"        TIMESTAMP	default now()
);

CREATE INDEX ON commandlogentry("atPublisher");




