CREATE TABLE guide (
    "id"           SERIAL primary key   
,    "name"            VARCHAR(240)    
, 	"contactId"         INT NOT NULL
,	"hasGuideLicence"   BOOLEAN NOT NULL
,	"guideLicenceUrl"   VARCHAR(128)
,	"publisherId"       INT NOT NULL
,	"createdById"       INT NOT NULL   
,	"guideFirstName"    VARCHAR(64)    
,   "guideLastName"     VARCHAR(64)      
,	"hasOwnCompany"     BOOLEAN NOT NULL   
,	"atAgency"          INT     
,	"languageLevelId"    INT NOT NULL 
,	"areas"             area[] NOT NULL 
,    "tripTypeName" VARCHAR(128)
,	"guideOfferId"     INT NOT NULL
,	"guideBidId"       INT NOT NULL
,	"guideFavoriteId"  INT NOT NULL      
,	"guideDealId"      INT NOT NULL
,	"agencyReviewInIdPool"   INT[]       
,	"touristReviewInIdPool"  INT[]
,	"agencyReviewOutIdPool"  INT[]
,	"touristReviewOutIdPool"  INT[]	
,	"bookingCalendarId"     INT NOT NULL
,	"hostIdPool"          INT[]
,	"eventIdPool"         INT[]
,	"accomodationIdPool"  INT[]
,	"transportIdPool"     INT[]
,    "lastModified"     TIMESTAMP 
,   "timeCreated"       TIMESTAMP DEFAULT NOW()
,   "isActive"          BOOLEAN DEFAULT true
,   "isPublic"          BOOLEAN NOT NULL DEFAULT true
,    FOREIGN KEY ("contactId") REFERENCES contact("id")
,    FOREIGN KEY ("publisherId") REFERENCES publisher("id")
,    FOREIGN KEY ("createdById") REFERENCES usertable("id")
,    FOREIGN KEY ("languageLevelId") REFERENCES languagelevel("id")     
,    FOREIGN KEY ("bookingCalendarId") REFERENCES bookingcalendar("id")


);

CREATE INDEX ON guide("tripTypeName");
CREATE INDEX ON guide("guideOfferId");
CREATE INDEX ON guide("guideBidId");
CREATE INDEX ON guide("guideDealId");
CREATE INDEX ON guide("guideBidId");
CREATE INDEX ON guide("guideFavoriteId");
CREATE INDEX ON guide("atAgency");
CREATE INDEX ON guide("contactId");
CREATE INDEX ON guide("publisherId");
CREATE INDEX ON guide("createdById");
CREATE INDEX ON guide("languageLevelId");
CREATE INDEX ON guide("bookingCalendarId");


ALTER TABLE tripofferresource
ADD FOREIGN KEY ("guideResponsibleId") REFERENCES guide("id");


ALTER TABLE tripofferresource
ADD FOREIGN KEY ("guideSecondaryId") REFERENCES guide("id");


ALTER TABLE hostresource
ADD FOREIGN KEY ("atGuide") REFERENCES guide("id");





ALTER TABLE eventresource
ADD FOREIGN KEY ("atGuide") REFERENCES guide("id");



ALTER TABLE accomodationresource
ADD FOREIGN KEY ("atGuide") REFERENCES guide("id");






ALTER TABLE transportresource
ADD FOREIGN KEY ("atGuide") REFERENCES guide("id");




ALTER TABLE guideresource
ADD FOREIGN KEY ("atGuide") REFERENCES guide("id");



ALTER TABLE usertable
ADD FOREIGN KEY ("atGuide") REFERENCES guide("id");

--//




