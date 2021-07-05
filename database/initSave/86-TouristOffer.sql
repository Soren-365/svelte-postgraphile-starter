CREATE TABLE touristoffer (
    "id"               SERIAL primary key     
,	"touristResourceIdPool"        INT[]  

);

ALTER TABLE tourist
ADD FOREIGN KEY ("touristOfferId") REFERENCES touristoffer("id");

--//


