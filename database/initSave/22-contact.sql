CREATE TABLE contact (
    "id"         SERIAL primary key   
,    "firstName"         VARCHAR(64)
,    "lastName"          VARCHAR(64)
,    "associatedCompany" VARCHAR(128)
,    "street"            VARCHAR(128)
,    "city"              VARCHAR(64)
,    "postCode"          VARCHAR(32)
,    "country"           VARCHAR(32)
,    "telephone"         VARCHAR(32)
,    "email"             VARCHAR(32)
,    "isCompany"         BOOLEAN
,    "createdById"       INT 
,    "belongsToType"     resourcetype  
,    "belongsToId"              INT 
,    "timeCreated"       TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("createdById") REFERENCES usertable("id") 
);

CREATE INDEX ON contact("createdById");
CREATE INDEX ON contact("belongsToType");
--//


