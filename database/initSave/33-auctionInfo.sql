CREATE TABLE auctioninfo (
    "id"        SERIAL primary key   
,	"publishedById"       INT NOT NULL
,	"createdById"       INT NOT NULL
,	"advertisedPrice"   MONEY NOT NULL
,	"currentHighBid"	MONEY
,	"bidId"			INT
,	"acceptsOffers"		BOOLEAN NOT NULL
,	"auctionExpiry"		TIMESTAMP 
,   "isAuction"         BOOLEAN NOT NULL
,   "isActive"          BOOLEAN DEFAULT true
,   "atResourceType"	resourcetype NOT NULL
, 	"belongsToId"		        INT NOT NULL
,   "timeCreated"       TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("publishedById") REFERENCES publisher("id")
,    FOREIGN KEY ("createdById") REFERENCES usertable("id")
,    FOREIGN KEY ("bidId") REFERENCES bid("id")
  
);

CREATE INDEX ON auctioninfo("publishedById");

CREATE INDEX ON auctioninfo("createdById");

CREATE INDEX ON auctioninfo("bidId");

--//



