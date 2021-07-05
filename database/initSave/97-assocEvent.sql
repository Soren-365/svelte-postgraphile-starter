CREATE TABLE assocevent (
  "assocEventId" INT[],
  "eventId" INT REFERENCES eventresource ON DELETE CASCADE,
  "atAgency"  INT REFERENCES agency ON DELETE CASCADE,
  "timeCreated" TIMESTAMP DEFAULT NOW(),
  CONSTRAINT assocevent_pkey PRIMARY KEY ("atAgency", "eventId") -- explicit pk
);
CREATE INDEX ON assocevent("eventId");

--//

