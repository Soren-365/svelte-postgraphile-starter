CREATE TABLE guidereview (
    "id"     SERIAL primary key   
,	"publisherId"       INT NOT NULL
,	"createdById"       INT NOT NULL
,   "isActive"           BOOLEAN DEFAULT TRUE
,	"halfStars"         SMALLINT 
,	"reviewText" 		VARCHAR(1000)
,	"guideIdTarget"	    INT NOT NULL
,	"startDateTripEvent"		DATE
,	"byRomanian"        BOOLEAN
,   "timeCreated"       TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("publisherId") REFERENCES publisher("id")
,    FOREIGN KEY ("guideIdTarget") REFERENCES guide("id")
,    FOREIGN KEY ("createdById") REFERENCES usertable("id")  
  
);

CREATE INDEX ON guidereview("publisherId");
CREATE INDEX ON guidereview("guideIdTarget");
CREATE INDEX ON guidereview("createdById");

--//

