CREATE TABLE classtable (
     "id" SERIAL primary key,
     "birth_datetime" TIMESTAMPTZ DEFAULT NOW(),
     "updated_datetime" TIMESTAMPTZ,
     "duration_inverval" INTERVAL DEFAULT '2 hours',
     "year" SMALLINT,
     "week_day" TEXT,
     "start_time" TEXT,
     "duration" TEXT,
     "address" TEXT,
     "type" class_type DEFAULT 'YOGA',
     "teacher_id" INT,
     "city" cities DEFAULT 'Bucuresti',
     "temp_teachers_id" INT [] DEFAULT array []::integer [],
     "students_id" INT [] DEFAULT array []::integer [],
     "lastModified" TIMESTAMP,
     "timeCreated" TIMESTAMP default NOW()
);
CREATE INDEX ON classtable("id");
CREATE INDEX ON classtable("students_id");
CREATE INDEX ON classtable("teacher_id");
CREATE INDEX ON classtable("temp_teachers_id");
ALTER TABLE usertable
ADD FOREIGN KEY ("signup_in_class_id") REFERENCES classtable("id");

--//