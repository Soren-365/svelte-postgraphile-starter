CREATE TABLE agencyevent (
  "agencyId"     INT NOT NULL
,	"eventId"    INT NOT NULL
,  "timeCreated" TIMESTAMP DEFAULT NOW() 
,  PRIMARY KEY("agencyId", "eventId")
,  FOREIGN KEY ("agencyId") REFERENCES agency("id") ON DELETE CASCADE
,  FOREIGN KEY ("eventId") REFERENCES eventresource("id") ON DELETE CASCADE
);

CREATE INDEX ON agencyevent("eventId");

--//

