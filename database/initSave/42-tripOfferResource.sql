CREATE TABLE tripofferresource (
    "id"          SERIAL primary key   
,   "tripOfferName"        VARCHAR(240) 
,	"publisherId"          INT NOT NULL
,	"createdById"          INT NOT NULL
,   "availableAtCalendarId"   INT NOT NULL
,	"guideResponsibleId"     INT NOT NULL
,	"guideSecondaryId"       INT 
,	"atAgency"             INT 
,	"priceInfoId"          INT NOT NULL
,   "destinationId"        INT[] NOT NULL
,	"isSigned"			  BOOLEAN NOT NULL
,	"atGuide"             INT
,   "isActive"             BOOLEAN DEFAULT true
,   "isPublic"          BOOLEAN NOT NULL DEFAULT true
,    "lastModified"     TIMESTAMP 
,   "timeCreated"          TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("publisherId") REFERENCES publisher("id")
,    FOREIGN KEY ("createdById") REFERENCES usertable("id")
,    FOREIGN KEY ("availableAtCalendarId") REFERENCES bookingcalendar("id")
,    FOREIGN KEY ("priceInfoId") REFERENCES priceinfo("id")


);

CREATE INDEX ON tripofferresource("publisherId");

CREATE INDEX ON tripofferresource("createdById");

CREATE INDEX ON tripofferresource("availableAtCalendarId");

CREATE INDEX ON tripofferresource("priceInfoId");


CREATE INDEX ON tripofferresource("guideSecondaryId");

CREATE INDEX ON tripofferresource("guideResponsibleId");


CREATE INDEX ON tripofferresource("atAgency");

--//


