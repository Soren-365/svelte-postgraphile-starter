CREATE TABLE usertable (
     "id"          INT UNIQUE NOT NULL
,    "firstName"       VARCHAR(50)
,    "lastName"        VARCHAR(50) 
,    "userEmail"       VARCHAR(50) PRIMARY KEY
,    "atAgency"        INT
,    "isAdmin"         BOOLEAN
,    "atGuide"         INT 
,    "atTourist"       INT
,    "timeCreated"     TIMESTAMP DEFAULT NOW()
,    "isActive"        BOOLEAN DEFAULT true
,    "isRomanian"      BOOLEAN

);

CREATE INDEX ON usertable("id");
CREATE INDEX ON usertable("atTourist");
CREATE INDEX ON usertable("atAgency");
CREATE INDEX ON usertable("atGuide");

--//


