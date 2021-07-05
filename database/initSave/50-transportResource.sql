CREATE TABLE transportresource (
    "id"       SERIAL primary key   
,   "transportName"     VARCHAR(240) 
, 	"contactId"         INT NOT NULL
,	"publisherId"       INT NOT NULL
,	"createdById"       INT NOT NULL
,	"locatedIn"			area NOT NULL
,	"addressInfoId"		INT NOT NULL
,	"atAgency"			INT
,	"atGuide"			INT
,	"ownedByAt"         BOOLEAN NOT NULL DEFAULT false
,	"presentationId" 		INT
,	"isBus"				BOOLEAN NOT NULL
,	"numberOfPlaces"	INT NOT NULL
,	"bookingCalendarId"	INT NOT NULL
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
  
);

CREATE INDEX ON transportresource("contactId");
CREATE INDEX ON transportresource("addressInfoId");
CREATE INDEX ON transportresource("publisherId");
CREATE INDEX ON transportresource("createdById");
CREATE INDEX ON transportresource("bookingCalendarId");
CREATE INDEX ON transportresource("presentationId");

CREATE INDEX ON transportresource("atGuide");

CREATE INDEX ON transportresource("atAgency");

--//


