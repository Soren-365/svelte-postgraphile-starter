CREATE TABLE guidedeal (
    "id"               SERIAL primary key     
,	"tripsOfferResourceIdPool"     INT[]
,	"agenciesRomanianIdPool"       INT[]
,	"agenciesAbroadIdPool"         INT[]
,	"touristResourceIdPool"          INT[]

);

ALTER TABLE guide
ADD   FOREIGN KEY ("guideDealId") REFERENCES guidedeal("id");

--//


