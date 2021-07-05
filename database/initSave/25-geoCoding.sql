CREATE TABLE geocoding (
   "id"  SERIAL primary key    
,   "locationLat"  INT
,   "locationLng"  INT
,   "locationType" TEXT
,   "placesId"     TEXT
,   "formattedAdress"   TEXT
,   "type"             TEXT
,   "viewportNorthEastLat" INT            
,   "viewportNorthEastLng" INT            
,   "viewportSouthWestLat" INT            
,   "viewportSouthWestLng" INT
,   "createdById"           INT NOT NULL REFERENCES usertable("id")
,   "publishedById"         INT NOT NULL REFERENCES publisher
,    "lastModified"       TIMESTAMP 
,   "timeCreated"           TIMESTAMP default NOW()            
);

CREATE INDEX ON geocoding("createdById");
CREATE INDEX ON geocoding("publishedById");

--//

