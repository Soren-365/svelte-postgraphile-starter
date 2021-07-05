CREATE TABLE similarbytriptypeguide (
  "guideIds" INT[],  -- resourceIds in one dimension, resource types in the other (7-8 or so) [destinationres, eventres, accomodationres, hostres, transportres, guideres, tourist?, travelgroup?]
   "tripTypeName"           VARCHAR(128),
  "atAgency"  INT REFERENCES agency ON DELETE CASCADE,
  "timeCreated" TIMESTAMP DEFAULT NOW(),
  CONSTRAINT similartriptypeguide_pkey PRIMARY KEY ("atAgency", "tripTypeName") -- explicit pk
);
CREATE INDEX ON similarbytriptypeguide("tripTypeName");

--//

