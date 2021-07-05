CREATE TABLE assocguide (
  "assocGuideId" INT[],
  "guideId" INT REFERENCES guideresource ON DELETE CASCADE,
  "atAgency"  INT REFERENCES agency ON DELETE CASCADE,
  "timeCreated" TIMESTAMP DEFAULT NOW(),
  CONSTRAINT assocguide_pkey PRIMARY KEY ("atAgency", "guideId") -- explicit pk
);
CREATE INDEX ON assocguide("guideId");

--//

