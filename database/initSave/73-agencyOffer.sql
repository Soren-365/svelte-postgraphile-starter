CREATE TABLE agencyoffer (
    "id"                   SERIAL primary key       
,	"tripsOfferesourceIdPool"         INT[]     
,	"guideResourceIdPool"             INT[]


);

ALTER TABLE agency
ADD FOREIGN KEY ("agencyOfferId") REFERENCES agencyoffer("id");

--//


