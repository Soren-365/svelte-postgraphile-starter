CREATE TABLE guideoffer (
    "id"                   SERIAL primary key       
,	"guideResourceIdPool"                  INT[]      
,	"transportResourceIdPool"        INT[]     
,	"hostResourceIdPool"             INT[]    
,	"accomodationResourceIdPool"     INT[]  
  
);

ALTER TABLE guide
ADD  FOREIGN KEY ("guideOfferId") REFERENCES guideoffer("id");

--//


