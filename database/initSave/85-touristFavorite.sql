CREATE TABLE touristfavorite (
    "id"               SERIAL primary key     
,	"agenciesRomanianIdPool"       INT[]
,	"agenciesAbroadIdPool"         INT[]
,	"travelGroupResourceIdPool"    INT[]
,	"tripsOfferResourceIdPool"     INT[]
,	"guideResourceIdPool"          INT[]
,	"eventResourceIdPool"          INT[]
,	"transportationResourceIdPool" INT[]
,	"accomodationResourceIdPool"   INT[]
,	"hostResourceIdPool"           INT[]

);

ALTER TABLE tourist
ADD   FOREIGN KEY ("touristFavoriteId") REFERENCES touristfavorite("id");

--//


