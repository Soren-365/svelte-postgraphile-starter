CREATE TABLE assocdestination (
  "assocDestinationId" INT[],
  "destinationId" INT REFERENCES destinationresource ON DELETE CASCADE,
  "atAgency"  INT REFERENCES agency ON DELETE CASCADE,
  "timeCreated" TIMESTAMP DEFAULT NOW(),
  CONSTRAINT assocdestination_pkey PRIMARY KEY ("atAgency", "destinationId") -- explicit pk
);
CREATE INDEX ON assocdestination("destinationId");

--//

