CREATE TABLE touristbid (
    "id"                 SERIAL primary key     
,   "tripOfferResourceIdPool"      INT[]
,	"eventResourceIdPool"          INT[]
,	"transportationResourceIdPool" INT[]
,	"accomodationResourceIdPool"   INT[]
,	"hostResourceIdPool"           INT[]

);

ALTER TABLE tourist
ADD   FOREIGN KEY ("touristBidId") REFERENCES touristbid("id");

--//


