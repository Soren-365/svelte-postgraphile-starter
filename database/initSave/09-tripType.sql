CREATE TABLE triptype (
    "id"            SERIAL       NOT NULL UNIQUE
,    "tripTypeName"   VARCHAR(128) NOT NULL
,    "atAgency"        INT  
,    "lastModified"    TIMESTAMP 
,    "timeCreated"     TIMESTAMP DEFAULT NOW()  
,  CONSTRAINT triptype_pkey PRIMARY KEY ("atAgency", "tripTypeName") -- explicit pk
);

--// some comment here

