CREATE TABLE accomodationresource (
    "id"     SERIAL primary key   
,   "accomodationName"   VARCHAR(240) 
, 	"contactId"          INT NOT NULL
,	"addressId"			 INT NOT NULL
,	"locatedIn"			 area
,   "locationCalendarId" INT NOT NULL
,   "tripTypeName"       VARCHAR(128)
,	"publisherId"        INT NOT NULL
,	"createdById"        INT NOT NULL
,   "isActive"           BOOLEAN DEFAULT true
,	"ownedByAt" 	     BOOLEAN DEFAULT false
,	"presentationId"     INT NOT NULL
,   "atAgency"            INT
,   "atGuide"            INT
,   "isPublic"          BOOLEAN DEFAULT true
,    "lastModified"     TIMESTAMP 
,   "timeCreated"        TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("contactId") REFERENCES contact("id")
,    FOREIGN KEY ("addressId") REFERENCES contact("id")
,    FOREIGN KEY ("publisherId") REFERENCES publisher("id")
,    FOREIGN KEY ("createdById") REFERENCES usertable("id")
,    FOREIGN KEY ("locationCalendarId") REFERENCES bookingcalendar("id")
,    FOREIGN KEY ("presentationId") REFERENCES presentation("id")  
,    FOREIGN KEY ("atAgency", "tripTypeName") REFERENCES triptype("atAgency", "tripTypeName") 
     
);

CREATE INDEX ON accomodationresource("contactId");

CREATE INDEX ON accomodationresource("tripTypeName");

CREATE INDEX ON accomodationresource("addressId");

CREATE INDEX ON accomodationresource("createdById");

CREATE INDEX ON accomodationresource("publisherId");

CREATE INDEX ON accomodationresource("presentationId");

CREATE INDEX ON accomodationresource("locationCalendarId");

CREATE INDEX ON accomodationresource("atAgency");

CREATE INDEX ON accomodationresource("atGuide");

--//

