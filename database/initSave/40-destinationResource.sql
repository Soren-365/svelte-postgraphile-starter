CREATE TABLE destinationresource (
    "id" SERIAL primary key   ,
    "destinationName" VARCHAR(240),
    "publishedById" INT NOT NULL REFERENCES publisher,
    "createdById" INT NOT NULL,
    "area" area,
    "judet" judet,
    "tripTypeName" VARCHAR(128),
    "isActive" BOOLEAN DEFAULT true,
    "priceInfoId" INT,
    "activeAtPeriodsId" INT,
    "presentationId" INT,
    "atAgency"  INT NOT NULL,
    "geoCodingId" INT REFERENCES geocoding,
    "isPublic" BOOLEAN NOT NULL DEFAULT true,
    "lastModified" TIMESTAMP DEFAULT NOW(),
       "lastModifiedBy" INT,
    "timeCreated" TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY ("createdById") REFERENCES usertable("id"),
   FOREIGN KEY ("lastModifiedBy") REFERENCES usertable("id"),
    FOREIGN KEY ("presentationId") REFERENCES presentation("id"),
    FOREIGN KEY ("activeAtPeriodsId") REFERENCES bookingcalendar("id"),
    FOREIGN KEY ("priceInfoId") REFERENCES priceinfo("id"),
    FOREIGN KEY ("atAgency", "tripTypeName") REFERENCES triptype("atAgency", "tripTypeName") 
     
);

CREATE INDEX ON destinationresource("tripTypeName");

CREATE INDEX ON destinationresource("createdById");
CREATE INDEX ON destinationresource("lastModifiedBy");

CREATE INDEX ON destinationresource("presentationId");

CREATE INDEX ON destinationresource("activeAtPeriodsId");

CREATE INDEX ON destinationresource("priceInfoId");

CREATE INDEX ON destinationresource("geoCodingId");

CREATE INDEX ON destinationresource("publishedById");

CREATE INDEX ON destinationresource("atAgency");



--//

