CREATE TABLE agencyuser (
  "agencyId"     INT 
,	"userId"     INT 
,  "timeCreated" TIMESTAMP DEFAULT NOW() 
,  PRIMARY KEY("agencyId", "userId")
,  FOREIGN KEY ("agencyId") REFERENCES agency("id") ON DELETE CASCADE
,  FOREIGN KEY ("userId") REFERENCES usertable("id") ON DELETE CASCADE
);

CREATE INDEX ON agencyuser("userId");

--//

