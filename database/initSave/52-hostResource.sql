CREATE TABLE hostresource (
    "id"    SERIAL primary key   
,   "hostResourceName"  VARCHAR(240) 
, 	"contactId"         INT NOT NULL
,	"publisherId"       INT NOT NULL
,	"createdById"       INT NOT NULL
,	"withAccomodation"  BOOLEAN NOT NULL
,   "atAccomodation"	INT 
,   "atAgency"          INT 
,   "atGuide"         INT 
,    "tripTypeName" VARCHAR(128)
,	"locatedIn"			area
,	"addressInfoId"		INT NOT NULL
,	"ownedByAt"         BOOLEAN NOT NULL DEFAULT false
,	"presentationId" 		INT NOT NULL
,   "bookingCalendarId"	INT NOT NULL
,	"isRomanian"        BOOLEAN
,   "isActive"          BOOLEAN DEFAULT true
,   "isPublic"          BOOLEAN NOT NULL DEFAULT true
,    "lastModified"     TIMESTAMP 
,   "timeCreated"       TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("contactId") REFERENCES contact("id")
,    FOREIGN KEY ("addressInfoId") REFERENCES contact("id")
,    FOREIGN KEY ("publisherId") REFERENCES publisher("id")
,    FOREIGN KEY ("createdById") REFERENCES usertable("id")

,    FOREIGN KEY ("bookingCalendarId") REFERENCES bookingcalendar("id")
,    FOREIGN KEY ("presentationId") REFERENCES presentation("id")
,    FOREIGN KEY ("atAccomodation") REFERENCES accomodationresource("id")

);

CREATE INDEX ON hostresource("tripTypeName");
CREATE INDEX ON hostresource("contactId");
CREATE INDEX ON hostresource("addressInfoId");
CREATE INDEX ON hostresource("publisherId");
CREATE INDEX ON hostresource("createdById");
CREATE INDEX ON hostresource("bookingCalendarId");
CREATE INDEX ON hostresource("presentationId");
CREATE INDEX ON hostresource("atAccomodation");

CREATE INDEX ON hostresource("atAgency");

CREATE INDEX ON hostresource("atGuide");

--//


