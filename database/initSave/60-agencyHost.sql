CREATE TABLE agencyhost (
  "agencyId"     INT NOT NULL
,	"hostId"    INT NOT NULL
,  "timeCreated" TIMESTAMP DEFAULT NOW() 
,  PRIMARY KEY("agencyId", "hostId")
,  FOREIGN KEY ("agencyId") REFERENCES agency("id") ON DELETE CASCADE
,  FOREIGN KEY ("hostId") REFERENCES hostresource("id") ON DELETE CASCADE
);
CREATE INDEX ON agencyhost("hostId");

--//

