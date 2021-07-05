CREATE TABLE assoctransport (
  "assocTransportId" INT[],
  "transportId" INT REFERENCES transportresource ON DELETE CASCADE,
  "atAgency"  INT REFERENCES agency ON DELETE CASCADE,
  CONSTRAINT assoctransport_pkey PRIMARY KEY ("atAgency", "transportId") -- explicit pk
);
CREATE INDEX ON assoctransport("transportId");

--//

