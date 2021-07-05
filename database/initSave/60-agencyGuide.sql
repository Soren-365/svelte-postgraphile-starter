CREATE TABLE agencyguide (
  "agencyId"     INT NOT NULL
,  "guideId"     INT NOT NULL
,  "timeCreated" TIMESTAMP DEFAULT NOW() 
,  PRIMARY KEY("agencyId", "guideId")
,  FOREIGN KEY ("agencyId") REFERENCES agency("id") ON DELETE CASCADE
,  FOREIGN KEY ("guideId") REFERENCES guide("id") ON DELETE CASCADE
);

CREATE INDEX ON agencyguide("agencyId");
CREATE INDEX ON agencyguide("guideId");
CREATE INDEX ON agencyguide("agencyId", "guideId");

--//

