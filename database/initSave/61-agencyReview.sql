CREATE TABLE agencyreview (
    "id"          SERIAL primary key   
,	"publisherId"            INT NOT NULL
,	"createdById"            INT NOT NULL
,   "isActive"                BOOLEAN DEFAULT TRUE
,	"halfStars"              SMALLINT 
,	"reviewText" 		     VARCHAR(1000)
,	"agencyIdTarget"	     INT NOT NULL
,	"startDateTripEvent"     DATE
,	"byRomanian"             BOOLEAN
,   "timeCreated"           TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("publisherId") REFERENCES publisher("id") 
,    FOREIGN KEY ("agencyIdTarget") REFERENCES agency("id")
,    FOREIGN KEY ("createdById") REFERENCES usertable("id")  
);


CREATE INDEX ON agencyreview("publisherId");
CREATE INDEX ON agencyreview("agencyIdTarget");
CREATE INDEX ON agencyreview("createdById");

--//


