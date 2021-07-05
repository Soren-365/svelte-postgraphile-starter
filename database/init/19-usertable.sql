CREATE TABLE usertable (
     "id" SERIAL UNIQUE,
     "name" TEXT,
     "email" TEXT primary key,
     "password" TEXT NOT NULL,
     "telephone" TEXT,
     "yoga_year" SMALLINT,
     gender genders,
     city cities,
     "signup_in_class_id" INT DEFAULT NULL,
     "signup_teacher_in_classes_id" INT [] DEFAULT array [0],
     "is_administrator" BOOLEAN DEFAULT FALSE,
     "my_role" roles DEFAULT 'student',
     "lastModified" TIMESTAMP,
     "timeCreated" TIMESTAMP default NOW()
);
CREATE INDEX ON usertable("id");
CREATE INDEX ON usertable("email");
CREATE INDEX ON usertable("signup_in_class_id");

--//
