CREATE TABLE travelgroupresource (
    "id"          SERIAL primary key   
,   "travelGroupName"        VARCHAR(240) 
, 	"contactId"         INT NOT NULL
,	"publisherId"       INT NOT NULL
,	"createdById"       INT NOT NULL
,	"numberOfAdults"    SMALLINT  
,	"numberOfChildren"  SMALLINT
,	"customInfo"        TEXT[]
,	"bookingCalendarId"	INT NOT NULL
,	"atAgency"			INT 
,	"atGuide"			INT 
,	"language"			languages NOT NULL
,	"atTripOfferResource" INT
,	"atTouristResource"   INT NOT NULL
,	"isRomanian"        BOOLEAN NOT NULL
,   "isActive"          BOOLEAN DEFAULT TRUE
,    "lastModified"     TIMESTAMP 
,   "timeCreated"       TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("contactId") REFERENCES contact("id")
,    FOREIGN KEY ("publisherId") REFERENCES publisher("id")
,    FOREIGN KEY ("createdById") REFERENCES usertable("id")
,    FOREIGN KEY ("bookingCalendarId") REFERENCES bookingcalendar("id")
,    FOREIGN KEY ("atAgency") REFERENCES agency("id") 
,    FOREIGN KEY ("atGuide") REFERENCES guide("id")
,    FOREIGN KEY ("atTripOfferResource") REFERENCES tripofferresource("id")
,    FOREIGN KEY ("atTouristResource") REFERENCES touristresource("id")

);

ALTER TABLE touristresource
ADD FOREIGN KEY ("atTravelGroup") REFERENCES travelgroupresource("id");


CREATE INDEX ON travelgroupresource("contactId");
CREATE INDEX ON travelgroupresource("publisherId");
CREATE INDEX ON travelgroupresource("createdById");
CREATE INDEX ON travelgroupresource("bookingCalendarId");
CREATE INDEX ON travelgroupresource("atAgency");
CREATE INDEX ON travelgroupresource("atGuide");
CREATE INDEX ON travelgroupresource("atTripOfferResource");
CREATE INDEX ON travelgroupresource("atTouristResource");

