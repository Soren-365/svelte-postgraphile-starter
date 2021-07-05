CREATE TABLE tourist (
    "id"              SERIAL primary key   
,   "touristFirstName"       VARCHAR(64)
,   "touristLastName"        VARCHAR(64)
, 	"contactId"              INT NOT NULL
,	"publisherId"            INT NOT NULL
,	"createdById"            INT NOT NULL     
,   "nativeLanguage"         languages 
,   "alternativeLanguage"    languages
,	"touristOfferId"          INT NOT NULL
,	"touristFavoriteId"       INT NOT NULL
,	"touristBidId"            INT NOT NULL
,	"touristDealId"           INT NOT NULL
,	"guideReviewInIdPool"         INT[]
,	"agencyReviewInIdPool"        INT[]
,	"guideReviewOutIdPool"        INT[]
,	"agencyReviewOutIdPool"       INT[]
,   "timeCreated"            TIMESTAMP DEFAULT NOW()
,   "atTravelGroup"          INT
,   "isActive"               BOOLEAN DEFAULT true
,   "isRomanian"             BOOLEAN NOT NULL
,    FOREIGN KEY ("contactId") REFERENCES contact("id")
,    FOREIGN KEY ("publisherId") REFERENCES publisher("id")
,    FOREIGN KEY ("createdById") REFERENCES usertable("id")


);

CREATE INDEX ON tourist("contactId");
CREATE INDEX ON tourist("publisherId");
CREATE INDEX ON tourist("createdById");
CREATE INDEX ON tourist("touristOfferId");
CREATE INDEX ON tourist("touristFavoriteId");
CREATE INDEX ON tourist("touristDealId");
CREATE INDEX ON tourist("touristBidId");


ALTER TABLE usertable
ADD  FOREIGN KEY ("atTourist") REFERENCES tourist("id");

--//




