CREATE TABLE similarbytriptypeaccomodation (
  "accomodationIds" INT[],  -- resourceIds in one dimension, triptypes in the other   "tripTypeName"           VARCHAR(128),
     "tripTypeName"           VARCHAR(128),
  "atAgency"  INT REFERENCES agency ON DELETE CASCADE,
  "timeCreated" TIMESTAMP DEFAULT NOW(),
  CONSTRAINT similartriptypeaccomodation_pkey PRIMARY KEY ("atAgency", "tripTypeName") -- explicit pk
);
CREATE INDEX ON similarbytriptypeaccomodation("tripTypeName");

--//

