CREATE TABLE agencytransport (
  "agencyId"     INT NOT NULL
,	"transportId"     INT NOT NULL
,  "timeCreated" TIMESTAMP DEFAULT NOW() 
,  PRIMARY KEY("agencyId", "transportId")
,  FOREIGN KEY ("agencyId") REFERENCES agency("id") ON DELETE CASCADE
,  FOREIGN KEY ("transportId") REFERENCES transportresource("id") ON DELETE CASCADE
); 
CREATE INDEX ON agencytransport("transportId");

--//

