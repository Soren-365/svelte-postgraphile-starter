CREATE TABLE agencyaccomodation (
  "agencyId" INT NOT NULL,
  "accomodationId" INT NOT NULL,
  "lastModified" TIMESTAMP,
  "urlExperyAt" TIMESTAMP NOT NULL CHECK (
    ("urlExperyAt") > NOW()
    AND ("urlExperyAt") < (("urlExperyAt") + cast('1 day' as interval) * 7)
  ) -- OR interval '1' day * days_count;
,
  "presentationPlacements" TEXT[],
  "agencyBucketUrls" TEXT[],
  "timeCreated" TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY("agencyId", "accomodationId"),
  FOREIGN KEY ("agencyId") REFERENCES agency("id") ON DELETE CASCADE,
  FOREIGN KEY ("accomodationId") REFERENCES accomodationresource("id") ON DELETE CASCADE
);
CREATE INDEX ON agencyaccomodation("accomodationId");
CREATE INDEX ON agencyaccomodation("agencyId");
CREATE INDEX ON agencyaccomodation("lastModified");
CREATE INDEX ON agencyaccomodation("urlExperyAt");

COMMENT ON COLUMN agencyaccomodation."urlExperyAt" is E'Upcoming Signed Url expery at amazon S3 bucket, (max value: now+7days)';
COMMENT ON COLUMN agencyaccomodation."agencyBucketUrls" is E'This is the Urls of the original image uploaded to Amazon agency bucket (needs also presentationPlacements!)';
COMMENT ON COLUMN agencyaccomodation."presentationPlacements" is E'This is the resource-specific placement names in the agency interface presentation';

--//

