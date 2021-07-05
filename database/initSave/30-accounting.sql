CREATE TABLE accounting (
    "id"      SERIAL primary key   
, 	"publisherId"            INT NOT NULL
,	"paymentHistory"    VARCHAR(64)[] 
,	"abonamentActive"   BOOLEAN NOT NULL
,	"lastPayment" 		DATE
,	"lastPaymentAmount" VARCHAR(64)
,	"abonamentExpires"  DATE
,	"onYearlyPayment"   Boolean NOT NULL
,	"onFreePeriod"      Boolean NOT NULL
,	"freePeriodExpires" DATE
,	"isRomanian"        BOOLEAN
,   "isActive"          BOOLEAN DEFAULT true 
,   "timeCreated"       TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("publisherId") REFERENCES publisher("id") 

);

CREATE INDEX ON accounting("publisherId");

--//





