CREATE TABLE presentation (
    "id"          SERIAL primary key   
,	"headline"          VARCHAR(160)
,	"publisherId"       INT NOT NULL
,	"createdById"       INT NOT NULL
,	"resourceType"		resourcetype NOT NULL
,	"resourceTypeId"      INT NOT NULL
,   "isActive"          BOOLEAN DEFAULT true
,    "lastModified"     TIMESTAMP 
,   "timeCreated"       TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("publisherId") REFERENCES publisher("id")
,    FOREIGN KEY ("createdById") REFERENCES usertable("id")
  
);

CREATE INDEX ON presentation("publisherId");

CREATE INDEX ON presentation("createdById");

--//



