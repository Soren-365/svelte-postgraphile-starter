CREATE TABLE guidebid (
    "id"        SERIAL primary key      
,   "tripOfferIdPool"    INT[]  

);

ALTER TABLE guide
ADD  FOREIGN KEY ("guideBidId") REFERENCES guidebid("id");

--//


