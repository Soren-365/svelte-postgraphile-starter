CREATE TABLE guideresource (
    "id"          SERIAL primary key   
,   "guideResourceName"        VARCHAR(240) 
,	"publisherId"       INT NOT NULL
,	"createdById"       INT NOT NULL
,	"atGuide"         INT 
,	"timeRangeId"      INT 
,	"priceInfoId"		INT NOT NULL
,	"atAgency"			INT
,   "multipleTimeRange" BOOLEAN NOT NULL
,   "bookingCalendarId" INT 
,	"isRomanian"        BOOLEAN
,   "isActive"          BOOLEAN DEFAULT true
,   "isPublic"          BOOLEAN NOT NULL DEFAULT true
,    "lastModified"     TIMESTAMP 
,   "timeCreated"       TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("publisherId") REFERENCES publisher("id")
,    FOREIGN KEY ("createdById") REFERENCES usertable("id")
,    FOREIGN KEY ("bookingCalendarId") REFERENCES bookingcalendar("id")
,    FOREIGN KEY ("timeRangeId") REFERENCES timerange("id")
,    FOREIGN KEY ("priceInfoId") REFERENCES priceinfo("id")

  
);
CREATE INDEX ON guideresource("atAgency");
CREATE INDEX ON guideresource("atGuide");
CREATE INDEX ON guideresource("publisherId");
CREATE INDEX ON guideresource("createdById");
CREATE INDEX ON guideresource("bookingCalendarId");
CREATE INDEX ON guideresource("timeRangeId");
CREATE INDEX ON guideresource("priceInfoId");

--//


