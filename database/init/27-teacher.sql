CREATE TABLE teacher (
     "id" SERIAL primary key,
     "presented_name" TEXT,
     "user_id" INT REFERENCES usertable("id"),
     "yoga_year" SMALLINT,
     "class_id" INT REFERENCES classtable("id"),
     gender genders,
     "teaching_class_ids" INT [],
     "temp_teaching_class_ids" INT [],
     "email_for_notifications" TEXT,
     "lastModified" TIMESTAMP,
     "timeCreated" TIMESTAMP default NOW()
);
CREATE INDEX ON teacher("id");
CREATE INDEX ON teacher("class_id");
CREATE INDEX ON teacher("user_id");
ALTER TABLE coupon
ADD FOREIGN KEY (teacher_id) REFERENCES teacher("id") ON DELETE CASCADE;

--//