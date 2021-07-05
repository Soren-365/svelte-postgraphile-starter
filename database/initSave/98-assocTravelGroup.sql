CREATE TABLE assoctravelgroup (
  "assocTravelGroupId" INT[],
  "travelGroupId" INT REFERENCES travelgroupresource ON DELETE CASCADE,
  "atAgency"  INT REFERENCES agency ON DELETE CASCADE,
  "timeCreated" TIMESTAMP DEFAULT NOW(),
  CONSTRAINT assoctravelgroup_pkey PRIMARY KEY ("atAgency", "travelGroupId") -- explicit pk
);
CREATE INDEX ON assoctravelgroup("travelGroupId");

--//

