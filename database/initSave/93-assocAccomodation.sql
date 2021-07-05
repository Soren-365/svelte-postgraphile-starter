CREATE TABLE assocaccomodation (
  "assocAccomodationId" INT[],
  "accomodationId" INT REFERENCES accomodationresource ON DELETE CASCADE,
  "atAgency"  INT REFERENCES agency ON DELETE CASCADE,
  "timeCreated" TIMESTAMP DEFAULT NOW(),
  CONSTRAINT assocaccomodation_pkey PRIMARY KEY ("atAgency", "accomodationId") -- explicit pk
);
CREATE INDEX ON assocaccomodation("accomodationId");
CREATE INDEX ON assocaccomodation("atAgency");
CREATE INDEX ON assocaccomodation("atAgency", "accomodationId");

--//

