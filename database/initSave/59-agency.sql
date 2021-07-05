CREATE TABLE agency (
    "id"          SERIAL primary key    
,   "name"             VARCHAR(240) NOT NULL 
, 	"contactId"         INT 
,	"activeInsurance"   BOOLEAN NOT NULL
,	"insuranceUrl"      VARCHAR(128)
,   "insuranceExpery"   DATE
,	"publisherId"       INT 
,	"createdById"       INT NOT NULL
,   "isActive"          BOOLEAN DEFAULT true
,   "isPublic"          BOOLEAN DEFAULT true
,	"agencyBidId"      INT 
,	"agencyFavoriteId" INT 
,	"agencyOfferId"    INT 
,	"agencyDealId"     INT 
,	"trustedPartnerIdPool"   INT[] 
,	"extendedNetworkIdPool"   INT[] 
,	"guideReviewInIdPool"    INT[]
,	"agencyReviewInIdPool"   INT[]
,	"touristReviewInIdPool"  INT[]
,	"guideReviewOutIdPool"   INT[]
,	"agencyReviewOutIdPool"  INT[]
,	"touristReviewOutIdPool" INT[]
,   "agencyMediaLibraryId"    INT 
,	"isRomanian"        BOOLEAN NOT NULL
,	"bookingCalendarId"  INT 
,	"specializedAgency" resourcetype
,    "lastModified"     TIMESTAMP 
,   "timeCreated"       TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("contactId") REFERENCES contact("id")
,    FOREIGN KEY ("publisherId") REFERENCES publisher("id")
,    FOREIGN KEY ("createdById") REFERENCES usertable("id")       
,    FOREIGN KEY ("bookingCalendarId") REFERENCES bookingcalendar("id")


  
);

CREATE INDEX ON agency("contactId");
CREATE INDEX ON agency("publisherId");
CREATE INDEX ON agency("createdById");
CREATE INDEX ON agency("bookingCalendarId");
CREATE INDEX ON agency("agencyOfferId");
CREATE INDEX ON agency("agencyFavoriteId");
CREATE INDEX ON agency("agencyDealId");
CREATE INDEX ON agency("agencyMediaLibraryId");
CREATE INDEX ON agency("agencyBidId");

ALTER TABLE usertable
ADD  FOREIGN KEY ("atAgency") REFERENCES agency("id");

ALTER TABLE triptype
ADD  FOREIGN KEY ("atAgency") REFERENCES agency("id") ON DELETE CASCADE;

ALTER TABLE guide
ADD FOREIGN KEY ("atAgency") REFERENCES agency("id");


ALTER TABLE guideresource
ADD FOREIGN KEY ("atAgency") REFERENCES agency("id") ON DELETE CASCADE;

ALTER TABLE tripofferresource
ADD FOREIGN KEY ("atAgency") REFERENCES agency("id") ON DELETE CASCADE;

ALTER TABLE hostresource
ADD FOREIGN KEY ("atAgency") REFERENCES agency("id") ON DELETE CASCADE;

ALTER TABLE eventresource
ADD FOREIGN KEY ("atAgency") REFERENCES agency("id") ON DELETE CASCADE;


ALTER TABLE accomodationresource
ADD FOREIGN KEY ("atAgency") REFERENCES agency("id") ON DELETE CASCADE;


ALTER TABLE transportresource
ADD FOREIGN KEY ("atAgency") REFERENCES agency("id") ON DELETE CASCADE;

ALTER TABLE destinationresource
ADD FOREIGN KEY ("atAgency") REFERENCES agency("id") ON DELETE CASCADE;

--//



