CREATE TABLE agencydeal (
    "id"                SERIAL primary key      
,	"tripOfferResourceIdPool"     INT[]
,	"guideResourceIdPool"         INT[]
,	"touristResouceIdPool"        INT[]
,	"eventResourceIdPool"          INT[]
,	"transportationResourceIdPool" INT[]
,	"accomodationResourceIdPool"   INT[]
,	"hostResourceIdPool"           INT[]
);

ALTER TABLE agency
ADD FOREIGN KEY ("agencyDealId") REFERENCES agencydeal("id");

--//


