CREATE TABLE agencybid (
    "id"            SERIAL primary key      
,   "agencyId"                INT REFERENCES agency("id")
,   "touristResourceIdPool"  INT[]  

);

CREATE INDEX ON agencybid("agencyId");

--//


