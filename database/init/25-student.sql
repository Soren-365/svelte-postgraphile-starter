CREATE TABLE student (
     "id" SERIAL primary key,
     "presented_name" TEXT,
     "user_id" INT REFERENCES usertable("id"),
     "yoga_year" SMALLINT,
     gender genders,
     city cities,
     "class_id" INT REFERENCES classtable("id"),
     "lastModified" TIMESTAMP,
     "timeCreated" TIMESTAMP default NOW()
);
CREATE INDEX ON student("id");
CREATE INDEX ON student("class_id");
CREATE INDEX ON student("user_id");

--//