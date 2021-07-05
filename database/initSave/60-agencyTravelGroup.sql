CREATE TABLE agencytravelgroup (
  "agencyId"        INT
,  "travelGroupId"   INT
,  "timeCreated" TIMESTAMP DEFAULT NOW() 
,  PRIMARY KEY("agencyId", "travelGroupId")
,  FOREIGN KEY ("agencyId") REFERENCES agency("id") ON DELETE CASCADE
,  FOREIGN KEY ("travelGroupId") REFERENCES travelgroupresource("id") ON DELETE CASCADE
);
CREATE INDEX ON agencytravelgroup("travelGroupId");

--//

