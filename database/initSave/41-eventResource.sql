CREATE TABLE eventresource (
    "id"          SERIAL primary key   
,   "eventName"         VARCHAR(180)
,   "agencyName"        VARCHAR(180) 
, 	"contactId"         INT NOT NULL
,	"publisherId"       INT NOT NULL
,	"createdById"       INT NOT NULL
,	"locatedIn"			area
,	"locationAddressId"  INT NOT NULL
 ,  "tripTypeName" VARCHAR(128)
,	"activeAtPeriodsId"   INT NOT NULL
,	"ownedByAt"         BOOLEAN NOT NULL DEFAULT false
,	"atAgency"			INT 
,	"atGuide"			INT
,	"presentationId"    INT NOT NULL
,   "isActive"          BOOLEAN DEFAULT true
,   "isPublic"          BOOLEAN NOT NULL DEFAULT true
,    "lastModified"     TIMESTAMP 
,   "timeCreated"       TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("contactId") REFERENCES contact("id")
,    FOREIGN KEY ("publisherId") REFERENCES publisher("id")
,    FOREIGN KEY ("createdById") REFERENCES usertable("id")
,    FOREIGN KEY ("locationAddressId") REFERENCES contact("id")
,    FOREIGN KEY ("activeAtPeriodsId") REFERENCES bookingcalendar("id")
,    FOREIGN KEY ("presentationId") REFERENCES presentation("id")
,      FOREIGN KEY ("atAgency", "tripTypeName") REFERENCES triptype("atAgency", "tripTypeName") 
     
);
CREATE INDEX ON eventresource("tripTypeName");
CREATE INDEX ON eventresource("createdById");
CREATE INDEX ON eventresource("contactId");
CREATE INDEX ON eventresource("publisherId");
CREATE INDEX ON eventresource("presentationId");
CREATE INDEX ON eventresource("createdById");
CREATE INDEX ON eventresource("locationAddressId");
CREATE INDEX ON eventresource("activeAtPeriodsId");
CREATE INDEX ON eventresource("atGuide");
CREATE INDEX ON eventresource("atAgency");

--//





