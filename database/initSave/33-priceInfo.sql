CREATE TABLE priceinfo (
    "id"        SERIAL primary key   
,	"publisherId"       INT NOT NULL
,	"createdById"       INT NOT NULL
,	"advertisedPrice"   MONEY NOT NULL
,	"currentHighBId"	MONEY
,	"bidId"				INT
,	"acceptsOffers"		BOOLEAN NOT NULL
,	"auctionExpiry"		TIMESTAMP 
,   "isAuction"         BOOLEAN NOT NULL
,   "isActive"          BOOLEAN DEFAULT true
,   "atResourceType"	resourcetype NOT NULL
, 	"belongsToId"		        INT NOT NULL
,    "lastModified"     TIMESTAMP 

,   "timeCreated"       TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("publisherId") REFERENCES publisher("id")
,    FOREIGN KEY ("createdById") REFERENCES usertable("id")
,    FOREIGN KEY ("bidId") REFERENCES bid("id")
  
);

CREATE INDEX ON priceinfo("publisherId");

CREATE INDEX ON priceinfo("createdById");

CREATE INDEX ON priceinfo("bidId");

--//



