CREATE TABLE administrator (
     "id" SERIAL primary key,
     "presented_name" TEXT,
     "user_id" INT REFERENCES usertable("id"),
     "email_for_notifications" TEXT,
     "lastModified" TIMESTAMP,
     "timeCreated" TIMESTAMP default NOW()
);
CREATE INDEX ON administrator("id");
CREATE INDEX ON administrator("user_id");

--//