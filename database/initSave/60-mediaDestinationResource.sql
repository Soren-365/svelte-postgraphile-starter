CREATE TABLE mediadestinationresource (
        "id" INT UNIQUE  ,
    "atAgency"  INT NOT NULL REFERENCES agency("id")  ON DELETE CASCADE,
    "atDestination"  INT NOT NULL REFERENCES destinationresource("id") ON DELETE CASCADE,
    "lastModified" TIMESTAMP DEFAULT NOW(),
     "lastModifiedBy" INT,
    "mainImage" INT REFERENCES medialocation("id"),
    "mainImageSignedUrl" TEXT UNIQUE,
    "guideImage" INT REFERENCES medialocation("id"),
    "guideSignedUrl" TEXT UNIQUE,
    "mapImage" INT REFERENCES medialocation("id"),
    "mapImageSignedUrl" TEXT UNIQUE,
    "thumbnailImage" INT REFERENCES medialocation("id"),
    "thumbnailImageSignedUrl" TEXT UNIQUE,
    "imageGallery1" INT REFERENCES medialocation("id"),
    "imageGallery1SignedUrl" TEXT UNIQUE,
    "imageGallery2" INT REFERENCES medialocation("id"),
    "imageGallery2SignedUrl" TEXT UNIQUE,
    "imageGallery3" INT REFERENCES medialocation("id"),
    "imageGallery3SignedUrl" TEXT UNIQUE,
    "imageGallery4" INT REFERENCES medialocation("id"),
    "imageGallery4SignedUrl" TEXT UNIQUE,
    "imageGallery5" INT REFERENCES medialocation("id"),
    "imageGallery5SignedUrl" TEXT UNIQUE,
    "imageGallery6" INT REFERENCES medialocation("id"),
    "imageGallery6SignedUrl" TEXT UNIQUE,
    "imageGallery7" INT REFERENCES medialocation("id"),
    "imageGallery7SignedUrl" TEXT UNIQUE,
    "imageGallery8" INT REFERENCES medialocation("id"),
    "imageGallery8SignedUrl" TEXT UNIQUE,
    "imageGallery9" INT REFERENCES medialocation("id"),
    "imageGallery9SignedUrl" TEXT UNIQUE,
    "imageGallery10" INT REFERENCES medialocation("id"),
    "imageGallery10SignedUrl" TEXT UNIQUE,
    "signedUrlsUpdate" TIMESTAMP NOT NULL DEFAULT (NOW() + cast('1 day' as interval) * 6) CHECK (
        ("signedUrlsUpdate") > NOW()
        AND ("signedUrlsUpdate") < (
            ("signedUrlsUpdate") + cast('1 day' as interval) * 7
        )
    ),
    "timeCreated" TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY("atAgency", "atDestination"),
    FOREIGN KEY ("lastModifiedBy") REFERENCES usertable("id")
);

CREATE INDEX ON mediadestinationresource("signedUrlsUpdate");

CREATE INDEX ON mediadestinationresource("atAgency");
CREATE INDEX ON mediadestinationresource("atDestination");
CREATE INDEX ON mediadestinationresource("lastModifiedBy");
CREATE INDEX ON mediadestinationresource("lastModified");
CREATE INDEX ON mediadestinationresource("mainImage");
CREATE INDEX ON mediadestinationresource("guideImage");
CREATE INDEX ON mediadestinationresource("mapImage");
CREATE INDEX ON mediadestinationresource("thumbnailImage");
CREATE INDEX ON mediadestinationresource("imageGallery1");
CREATE INDEX ON mediadestinationresource("imageGallery2");
CREATE INDEX ON mediadestinationresource("imageGallery3");
CREATE INDEX ON mediadestinationresource("imageGallery4");
CREATE INDEX ON mediadestinationresource("imageGallery5");
CREATE INDEX ON mediadestinationresource("imageGallery6");
CREATE INDEX ON mediadestinationresource("imageGallery7");
CREATE INDEX ON mediadestinationresource("imageGallery8");
CREATE INDEX ON mediadestinationresource("imageGallery9");
CREATE INDEX ON mediadestinationresource("imageGallery10");



--//

