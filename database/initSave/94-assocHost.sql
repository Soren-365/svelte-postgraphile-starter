CREATE TABLE assochost (
  "assocHostId" INT[],
  "hostId" INT REFERENCES hostresource ON DELETE CASCADE,
  "atAgency"  INT REFERENCES agency ON DELETE CASCADE,
  "timeCreated" TIMESTAMP DEFAULT NOW(),
  CONSTRAINT assochost_pkey PRIMARY KEY ("atAgency", "hostId") -- explicit pk
);
CREATE INDEX ON assochost("hostId");
CREATE INDEX ON assochost("atAgency");
CREATE INDEX ON assochost("atAgency", "hostId");

--//

