CREATE TABLE medialocation (
        "id" INT UNIQUE  ,
    "mediaLocationPlacement" medialocationplacement,
    "atAgency"  INT REFERENCES agency("id"),
    "atResource" INT NOT NULL,
    "uploadLocationOriginal" TEXT UNIQUE,
    "uploadLocationThumbnail" TEXT UNIQUE,
    "uploadLocationMobile" TEXT UNIQUE,
    "uploadLocationTablet" TEXT UNIQUE, 
    "uploadLocationDesktop" TEXT UNIQUE, 
    "uploadLocation2K" TEXT UNIQUE, 
    "signedUrlThumbnail" TEXT,
    "signedUrlMobile" TEXT,
    "signedUrlTablet" TEXT,
    "signedUrlDesktop" TEXT,
    "signedUrl2K" TEXT,
    "signedUrlsUpdate" TIMESTAMP NOT NULL DEFAULT (NOW() + cast('1 day' as interval) * 6) CHECK ("signedUrlsUpdate" > NOW() AND "signedUrlsUpdate" < ("signedUrlsUpdate" + cast('1 day' as interval) * 7 )),
    "timeCreated" TIMESTAMP default NOW(),
    PRIMARY KEY("atAgency", "atResource", "mediaLocationPlacement")
);


-- CREATE INDEX on medialocation("uploadLocationOriginal");
-- CREATE INDEX on medialocation("uploadLocationThumbnail");
-- CREATE INDEX on medialocation("uploadLocationOriginal");
-- CREATE INDEX on medialocation("uploadLocationOriginal");
CREATE INDEX on medialocation("atAgency");
CREATE INDEX on medialocation("atResource");

--//


