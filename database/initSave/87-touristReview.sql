CREATE TABLE touristreview (
    "id"     SERIAL primary key   
,	"publisherId"       INT NOT NULL
,	"createdById"       INT NOT NULL 
,   "isActive"          BOOLEAN DEFAULT true
,	"halfStars"         SMALLINT NOT NULL
,	"reviewText" 		VARCHAR(1000) NOT NULL
,	"touristIdTarget"	INT NOT NULL
,	"startDateTripEvent"		DATE NOT NULL
,	"byRomanian"        BOOLEAN
,   "timeCreated"       TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("publisherId") REFERENCES publisher("id")
,    FOREIGN KEY ("touristIdTarget") REFERENCES tourist("id")
,    FOREIGN KEY ("createdById") REFERENCES usertable("id")  
);

CREATE INDEX ON touristreview("publisherId");
CREATE INDEX ON touristreview("touristIdTarget");
CREATE INDEX ON touristreview("createdById");

--//

