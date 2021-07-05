CREATE TABLE review (
    "id"     SERIAL primary key   
,	"publisherId"       INT NOT NULL
,	"createdById"       INT NOT NULL
,	"halfStars"			SMALLINT
,	"reviewText"		TEXT
,	"resourceType"		resourcetype NOT NULL
,	"resourceId"		INT NOT NULL
,	"publisherTarget" 	INT NOT NULL
,	"startDateTripEvent"	DATE
,	"byRomanian"        BOOLEAN
,   "isActive"          BOOLEAN DEFAULT true
,   "timeCreated"       TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("publisherId") REFERENCES publisher("id")
,    FOREIGN KEY ("createdById") REFERENCES usertable("id")
,    FOREIGN KEY ("publisherTarget") REFERENCES publisher("id")
  
);

CREATE INDEX ON review("createdById");
CREATE INDEX ON review("publisherId");
CREATE INDEX ON review("publisherTarget");

--//


