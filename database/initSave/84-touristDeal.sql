CREATE TABLE touristdeal (
    "id"               SERIAL primary key     
,	"tripsOfferResourceIdPool"     INT[]
,   "guideOfferResourceIdPool"      INT[]
,	"agenciesRomanianIdPool"       INT[]
,	"agenciesAbroadIdPool"         INT[]
,	"eventResourceIdPool"          INT[]
,	"transportationResourceIdPool" INT[]
,	"accomodationResourceIdPool"   INT[]
,	"hostResourceIdPool"           INT[]

);

ALTER TABLE tourist
ADD   FOREIGN KEY ("touristDealId") REFERENCES touristdeal("id");

--//


