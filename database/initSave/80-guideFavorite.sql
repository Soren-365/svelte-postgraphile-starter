CREATE TABLE guidefavorite (
    "id"           SERIAL primary key     
,	"agenciesRomanianIdPool"     INT[]
,	"agenciesAbroadIdPool"       INT[]
,	"travelGroupResourceIdPool"  INT[]

);

ALTER TABLE guide
ADD   FOREIGN KEY ("guideFavoriteId") REFERENCES guidefavorite("id");

--//


