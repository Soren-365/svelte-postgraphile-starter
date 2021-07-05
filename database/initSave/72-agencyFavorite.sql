CREATE TABLE agencyfavorite ( 
    "resourceId"   INT
,   "resourceType"  resourcetype
,   "atAgency"      INT REFERENCES agency
,  PRIMARY KEY( "atAgency","resourceId", "resourceType")

);

CREATE INDEX ON agencyfavorite("resourceType");
CREATE INDEX ON agencyfavorite("resourceId");
CREATE INDEX ON agencyfavorite("atAgency");


