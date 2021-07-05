CREATE TABLE languagelevel  (
    "id"  SERIAL primary key   
,	"langauges"			languages NOT NULL
,	"langaugesSkill"    languageskill NOT NULL
,   "isActive"          BOOLEAN DEFAULT true
,   "createdById"       INT NOT NULL
,   "publisherId"       INT NOT NULL
,   "timeCreated"       TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("publisherId") REFERENCES publisher("id")
,    FOREIGN KEY ("createdById") REFERENCES usertable("id")
  
);


CREATE INDEX ON languagelevel("publisherId");

CREATE INDEX ON languagelevel("createdById");

--//


