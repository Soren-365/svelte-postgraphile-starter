CREATE TABLE touristresource (
    "id" SERIAL primary key   
,    "name"             VARCHAR(240)  
, 	"contactId"         INT NOT NULL
,	"publisherId"       INT NOT NULL
,	"createdById"       INT NOT NULL
,	"atTravelGroup"			INT
,	"atAgency"			INT
,	"atGuide"			INT
,	"isSigned"			BOOLEAN NOT NULL
,	"priceInfoId"    		INT NOT NULL
,	"travellingCalendarId"	INT NOT NULL
,	"isRomanian"        BOOLEAN
,   "isActive"           BOOLEAN DEFAULT TRUE
,   "isPublic"          BOOLEAN NOT NULL DEFAULT true
,    "lastModified"     TIMESTAMP 
,   "timeCreated"       TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("contactId") REFERENCES contact("id")
,    FOREIGN KEY ("publisherId") REFERENCES publisher("id")
,    FOREIGN KEY ("priceInfoId") REFERENCES priceinfo("id")
,    FOREIGN KEY ("createdById") REFERENCES usertable("id")

,    FOREIGN KEY ("atAgency") REFERENCES agency("id")  
,    FOREIGN KEY ("atGuide") REFERENCES guide("id")
,    FOREIGN KEY ("travellingCalendarId") REFERENCES bookingcalendar("id")
  
);

CREATE INDEX ON touristresource("contactId");
CREATE INDEX ON touristresource("publisherId");
CREATE INDEX ON touristresource("priceInfoId");
CREATE INDEX ON touristresource("createdById");

CREATE INDEX ON touristresource("atGuide");
CREATE INDEX ON touristresource("atAgency");

CREATE INDEX ON touristresource("atTravelGroup");
CREATE INDEX ON touristresource("travellingCalendarId");

--//


