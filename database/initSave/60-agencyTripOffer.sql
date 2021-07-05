CREATE TABLE agencytripoffer (
  "agencyId"     INT NOT NULL
,	"tripOfferId"     INT NOT NULL
,  "timeCreated" TIMESTAMP DEFAULT NOW() 
,  PRIMARY KEY("agencyId", "tripOfferId")
,  FOREIGN KEY ("agencyId") REFERENCES agency("id") ON DELETE CASCADE
,  FOREIGN KEY ("tripOfferId") REFERENCES tripofferresource("id") ON DELETE CASCADE
);
CREATE INDEX ON agencytripoffer("tripOfferId");

--//

