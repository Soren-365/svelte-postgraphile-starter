CREATE TABLE agencytourist (
  "agencyId"     INT NOT NULL
,	"touristId"     INT NOT NULL
,  "timeCreated" TIMESTAMP DEFAULT NOW() 
,  PRIMARY KEY("agencyId", "touristId")
,  FOREIGN KEY ("agencyId") REFERENCES agency("id") ON DELETE CASCADE
,  FOREIGN KEY ("touristId") REFERENCES touristresource("id") ON DELETE CASCADE
);
CREATE INDEX ON agencytourist("agencyId");

--//

