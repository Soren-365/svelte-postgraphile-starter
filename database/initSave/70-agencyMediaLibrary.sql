CREATE TABLE agencymedialibrary (
    "id"         INT UNIQUE  ,
    "atAgency"          INT NOT NULL,
    "uploadLocations"       TEXT[],
    "locationSignedUrls"      TEXT[],
    "signedUrlsUpdate"      TIMESTAMP[],
	"lastModifiedBy"            INT NOT NULL,
   "timeCreated"           TIMESTAMP DEFAULT NOW(),
   "lastModified"           TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY ("atAgency") REFERENCES agency("id"),
    FOREIGN KEY ("lastModifiedBy") REFERENCES usertable("id")  
);


CREATE INDEX ON agencymedialibrary("atAgency");
CREATE INDEX ON agencymedialibrary("lastModifiedBy");
CREATE INDEX ON agencymedialibrary("lastModified");

--//

ALTER TABLE agency
ADD FOREIGN KEY ("agencyMediaLibraryId") REFERENCES agencymedialibrary("id");
