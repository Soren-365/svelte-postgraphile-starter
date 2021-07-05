CREATE TABLE content_admin (
     "id" SERIAL primary key,
     "presented_name" TEXT,
     "user_id" INT REFERENCES usertable("id"),
     "email_for_notifications" TEXT,
     "lastModified" TIMESTAMP,
     "timeCreated" TIMESTAMP default NOW()
);
CREATE INDEX ON content_admin("id");
CREATE INDEX ON content_admin("user_id");

--//