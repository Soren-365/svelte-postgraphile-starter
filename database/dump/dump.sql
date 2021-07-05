--// Romanian +2h non-daylight saving time (summer time)
--//SET timezone = 'EET';



CREATE EXTENSION intarray;

--//


CREATE TYPE cities AS ENUM (
	'Bucuresti',
	'Cluj',
	'Timisoara',
	'Arad',
	'Constanta',
	'Brasov'
);

--//




CREATE TYPE class_type AS ENUM (
	'YOGA',
	'SHIVAISM'
);

--//




CREATE TYPE coupon_type AS ENUM (
	'teacher',
	'student',
	'administrator'
);

--//




CREATE TYPE genders AS ENUM ('man', 'woman');
--//


CREATE TYPE roles AS ENUM (
	'student',
	'teacher',
	'content_admin',
	'app_admin',
	'supervisor'
);

--//




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



CREATE TABLE grouptable (
     id SERIAL primary key,
     birth_datetime TIMESTAMPTZ DEFAULT NOW(),
     "year" SMALLINT,
     "type" class_type DEFAULT 'YOGA',
     lastModified TIMESTAMP,
     timeCreated TIMESTAMP default NOW()
);
CREATE INDEX ON grouptable(id);

--//


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


CREATE TABLE class_online (
    "id" SERIAL primary key,
    "classtable_id" INT REFERENCES classtable("id"),
    "theory_db_link" TEXT,
    "main_theory_start_time" TIME,
    "main_theory_duration" INTERVAL,
    "secondary_theory_start_time" TIME,
    "secondary_theory_duration" INTERVAL,
    "practice_start_time" TIME,
    "practice_duration" INTERVAL,
    "practice_program" TEXT,
    "practice_program_audio_link" TEXT,
    "lastModified" TIMESTAMP,
    "timeCreated" TIMESTAMP default NOW()
);
CREATE INDEX ON class_online("id");
CREATE INDEX ON class_online("classtable_id");

--//




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


CREATE TABLE coupon (
    id SERIAL primary key,
    coupon_code VARCHAR(12) UNIQUE NOT NULL,
    email TEXT UNIQUE,
    group_id INT REFERENCES grouptable(id),
    class_id INT REFERENCES classtable (id),
    teacher_id INT,
    city cities,
    gender genders,
    coupon_type coupon_type,
    signed_up BOOLEAN default false,
    invited BOOLEAN default false,
    lastModified TIMESTAMP,
    timeCreated TIMESTAMP default NOW()
);
CREATE INDEX ON coupon(id);
CREATE INDEX ON coupon(coupon_code);
CREATE INDEX ON coupon(class_id);
CREATE INDEX ON coupon(group_id);
CREATE INDEX ON coupon(teacher_id);
--//


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


create or replace function array_diff(array1 anyarray, array2 anyarray) returns anyarray language sql immutable as $$
select coalesce(array_agg(elem), '{}')
from unnest(array1) elem
where elem <> all(array2) $$;


-- create or replace function coupon_signup() RETURNS BOOLEAN AS $$
-- DECLARE BEGIN

-- INSERT INTO usertable (
--         "user_id",
--         "student_class_id",
--         "presented_name",
--         gender
--     )
-- VALUES (
--         NEW."id",
--         NEW."signup_in_class_id",
--         NEW."name",
--         NEW.gender
--     );
-- UPDATE classtable
-- SET "students_id" = array_append("students_id", NEW."id")
-- WHERE "id" = NEW."signup_in_class_id";
-- UPDATE student
-- SET yoga_year = classtable.year
-- FROM classtable
-- WHERE student.student_class_id = classtable.id;
-- RETURN NEW;
-- END;
-- $$ LANGUAGE 'plpgsql';
-- --//

-- INSERT into coupon (
--         coupon_code,
--         "signup_code",
--         class_teacher_id,
--         city,
--         coupon_type
--     )
-- VALUES ('VF3KC233UF6T', 'm102', 4, 'Cluj', 'student');


-- CREATE TABLE coupon (
--     "id" SERIAL primary key,
--     coupon_code VARCHAR(12),
--     "signup_code" VARCHAR(4),
--     class_teacher_id INT,
--     city cities,
--     coupon_type coupon_type,
--     "lastModified" TIMESTAMP,
--     "timeCreated" TIMESTAMP default NOW()
-- );
-- CREATE INDEX ON coupon("id");
-- CREATE INDEX ON coupon(coupon_code);
-- --//

-- CREATE TABLE usertable (
--     "id" SERIAL UNIQUE,
--     "name" TEXT,
--     "email" TEXT primary key,
--     "password" TEXT NOT NULL,
--     "telephone" TEXT,
--     "yoga_year" SMALLINT,
--     gender genders,
--     city cities,
--     "signup_in_class_id" INT DEFAULT NULL,
--     "signup_teacher_in_classes_id" INT [] DEFAULT array [0],
--     "is_administrator" BOOLEAN DEFAULT FALSE,
--     "my_role" my_role DEFAULT 'student',
--     "lastModified" TIMESTAMP,
--     "timeCreated" TIMESTAMP default NOW()
-- );
-- CREATE INDEX ON usertable("id");
-- CREATE INDEX ON usertable("email");
-- --//


CREATE OR REPLACE FUNCTION get_classes_by_ids(class_ids INT []) RETURNS TABLE(
        class_id INT,
        class_type class_type,
        class_year SMALLINT,
        week_day TEXT,
        start_time TEXT
    ) AS $$ BEGIN for counter in 1..coalesce(array_length(class_ids, 1), 0) loop RETURN QUERY
SELECT classtable.id AS class_id,
    classtable.type AS class_type,
    classtable.year AS class_year,
    classtable.week_day,
    classtable.start_time
FROM classtable
WHERE id = class_ids [counter];
end loop;
END;
$$ LANGUAGE plpgsql;
--//


CREATE FUNCTION insert_administrator_func() RETURNS TRIGGER AS $$ BEGIN BEGIN 
IF (NEW."my_role" = 'app_admin') THEN
INSERT INTO administrator (
        "user_id",
        "presented_name",
        "email_for_notifications"
    )
VALUES (
        NEW."id",
        NEW."name",
        NEW."email"
    );
END IF;
END;
RETURN NEW;
END;
$$ LANGUAGE 'plpgsql';

--//




CREATE FUNCTION insert_class_func() RETURNS TRIGGER AS $$
DECLARE BEGIN
UPDATE classtable
SET "updated_datetime" = "birth_datetime"
WHERE "id" = NEW."id";

INSERT INTO class_online(classtable_id, theory_db_link) VALUES (NEW.id, ('/linktoStreamForId/' || New.id ));
RETURN NEW;
END;
$$ LANGUAGE 'plpgsql';
--//


CREATE FUNCTION insert_content_admin_func() RETURNS TRIGGER AS $$ BEGIN BEGIN 
IF (NEW."my_role" = 'content_admin') THEN
INSERT INTO content_admin (
        "user_id",
        "presented_name",
        "email_for_notifications"
    )
VALUES (
        NEW."id",
        NEW."name",
        NEW."email"
    );
END IF;
END;
RETURN NEW;
END;
$$ LANGUAGE 'plpgsql';

--//




CREATE FUNCTION insert_student_func() RETURNS TRIGGER AS $$
DECLARE BEGIN
INSERT INTO student ("user_id", "class_id", "presented_name", gender, city)
VALUES (NEW."id", NEW."signup_in_class_id", NEW."name", NEW.gender, NEW.city);
UPDATE classtable
SET "students_id" = array_append("students_id", NEW."id")
WHERE "id" = NEW."signup_in_class_id";
UPDATE student
SET yoga_year = classtable.year
FROM classtable
WHERE student.class_id = classtable.id;
RETURN NEW;
END;
$$ LANGUAGE 'plpgsql';
--//


CREATE FUNCTION insert_teacher_func() RETURNS TRIGGER AS $$
DECLARE res1 BOOLEAN;
BEGIN BEGIN IF (NEW."signup_teacher_in_classes_id" <> '{0}') THEN
UPDATE usertable
SET "my_role" = 'teacher'
WHERE "id" = NEW."id";
INSERT INTO teacher (
        "user_id",
        "presented_name",
        "teaching_class_ids",
        "email_for_notifications",
        "class_id",
        gender
    )
VALUES (
        NEW."id",
        NEW."name",
        NEW."signup_teacher_in_classes_id",
        NEW."email",
        NEW."signup_in_class_id",
        NEW.gender
    );
for counter in 1..coalesce(
    array_length(NEW."signup_teacher_in_classes_id", 1),
    0
) loop IF (
    NEW."signup_teacher_in_classes_id" [counter] < NEW."signup_in_class_id"
) THEN IF EXISTS (
    SELECT "teacher_id"
    FROM classtable
    WHERE "id" = NEW."signup_teacher_in_classes_id" [counter]
) THEN IF EXISTS (
    SELECT "teacher_id"
    FROM classtable
    WHERE "id" = NEW."signup_teacher_in_classes_id" [counter]
        AND "teacher_id" IS NULL
) THEN
UPDATE classtable
SET "teacher_id" = NEW."id"
WHERE "id" = NEW."signup_teacher_in_classes_id" [counter];
UPDATE teacher
SET yoga_year = classtable.year
FROM classtable
WHERE teacher.class_id = classtable.id;
ELSE raise exception 'class already has a teacher assigned, %',
FOUND using hint = 'a class can max. have one teacher';

END IF;
END IF;
ELSE raise exception 'teaching class over where student, class_id: %',
NEW."signup_in_class_id" using hint = 'user can not teach in the older class than is a student';
END IF;
end loop;
END IF;
END;
RETURN NEW;
END;
$$ LANGUAGE 'plpgsql';
--//


create function set_last_modified() returns trigger as $$
begin
  new."lastModified" := NOW();
  return new;
end;
$$ language plpgsql;

--//



CREATE FUNCTION update_class_datetime_func() RETURNS TRIGGER AS $$
DECLARE BEGIN
UPDATE classtable
SET "year" = TO_CHAR(
        AGE(NOW()::date, classtable.birth_datetime::date) + INTERVAL '1 year',
        'YY'
    )::INTEGER;
UPDATE classtable
SET "week_day" = extract(
        dow
        from NEW."updated_datetime"::date
    )
WHERE "id" = NEW."id";
UPDATE classtable
SET "start_time" = TO_CHAR(NEW."updated_datetime"::time, 'HH24:MI')
WHERE "id" = NEW."id";
RETURN NEW;
END;
$$ LANGUAGE 'plpgsql';
--//


CREATE FUNCTION update_group_datetime_func() RETURNS TRIGGER AS $$
DECLARE BEGIN
UPDATE grouptable
SET "year" = TO_CHAR(
        AGE(NOW()::date, grouptable.birth_datetime::date) + INTERVAL '1 year',
        'YY'
    )::INTEGER;

RETURN NEW;
END;
$$ LANGUAGE 'plpgsql';
--//


CREATE OR REPLACE FUNCTION update_year() RETURNS BOOLEAN AS $$
DECLARE BEGIN
UPDATE classtable
SET "year" = TO_CHAR(
        AGE(
            NOW()::date,
            classtable.birth_datetime::date
        ) + INTERVAL '1 years',
        'YY'
    )::INTEGER;
RETURN true;
END;
$$ LANGUAGE 'plpgsql';
--//


create trigger coupon_last_modified
before
update on coupon for each row execute procedure set_last_modified();
--//
create trigger usertable_last_modified
before
update on usertable for each row execute procedure set_last_modified();
--//
create trigger classtable_last_modified
before
update on classtable for each row execute procedure set_last_modified();
--//
create trigger student_last_modified
before
update on student for each row execute procedure set_last_modified();
--//
create trigger teacher_last_modified
before
update on teacher for each row execute procedure set_last_modified();
--//
create trigger classonline_last_modified
before
update on class_online for each row execute procedure set_last_modified();
--//



CREATE TRIGGER insert_class
AFTER
INSERT ON classtable FOR EACH ROW EXECUTE PROCEDURE insert_class_func();
--//


CREATE TRIGGER insert_student
AFTER
INSERT ON usertable FOR EACH ROW EXECUTE PROCEDURE insert_student_func();
--//
CREATE TRIGGER insert_teacher
AFTER
INSERT ON usertable FOR EACH ROW EXECUTE PROCEDURE insert_teacher_func();
--//
CREATE TRIGGER insert_administrator
AFTER
INSERT ON usertable FOR EACH ROW EXECUTE PROCEDURE insert_administrator_func();
--//
CREATE TRIGGER insert_content_admin
AFTER
INSERT ON usertable FOR EACH ROW EXECUTE PROCEDURE insert_class_func();
--//


CREATE TRIGGER update_class_datetime
AFTER
UPDATE OF updated_datetime ON classtable FOR EACH ROW EXECUTE PROCEDURE update_class_datetime_func();
--//


CREATE TRIGGER update_group_datetime
AFTER
INSERT ON grouptable FOR EACH ROW EXECUTE PROCEDURE update_group_datetime_func();
--//


INSERT into classtable ("birth_datetime", type, city, teacher_id)
VALUES (NOW() - INTERVAL '0 year 7 months', 'YOGA', 'Bucuresti',1);
INSERT into classtable ("birth_datetime", type, city, teacher_id)
VALUES (NOW() - INTERVAL '1 year 7 months', 'YOGA', 'Bucuresti',1);
INSERT into classtable ("birth_datetime", type, city, teacher_id)
VALUES (NOW() - INTERVAL '2 year 7 months', 'YOGA', 'Bucuresti',1);
INSERT into classtable ("birth_datetime", type, city, teacher_id)
VALUES (
        NOW() - INTERVAL '2 year 7 months',
        'YOGA',
        'Bucuresti',
        2
    );
INSERT into classtable ("birth_datetime", type, city)
VALUES (NOW() - INTERVAL '3 year 7 months', 'YOGA', 'Bucuresti');
INSERT into classtable ("birth_datetime", type, city)
VALUES (NOW() - INTERVAL '4 year 7 months', 'YOGA', 'Bucuresti');
INSERT into classtable ("birth_datetime", type, city)
VALUES (NOW() - INTERVAL '5 year 7 months', 'YOGA', 'Bucuresti');
INSERT into classtable ("birth_datetime", type, city)
VALUES (NOW() - INTERVAL '6 year 7 months', 'YOGA', 'Bucuresti');
INSERT into classtable ("birth_datetime", type, city)
VALUES (NOW() - INTERVAL '7 year 7 months', 'YOGA', 'Bucuresti');
INSERT into classtable ("birth_datetime", type, city)
VALUES (NOW() - INTERVAL '8 year 7 months', 'YOGA', 'Bucuresti');
INSERT into classtable ("birth_datetime", type, city)
VALUES (NOW() - INTERVAL '9 year 7 months', 'YOGA', 'Bucuresti');
INSERT into classtable ("birth_datetime", type, city)
VALUES (NOW() - INTERVAL '10 year 7 months', 'YOGA', 'Bucuresti');
INSERT into classtable ("birth_datetime", type, city)
VALUES (NOW() - INTERVAL '11 year 7 months', 'YOGA', 'Bucuresti');
INSERT into classtable ("birth_datetime", type, city)
VALUES (NOW() - INTERVAL '12 year 7 months', 'YOGA', 'Bucuresti');
INSERT into classtable ("birth_datetime", type, city)
VALUES (NOW() - INTERVAL '13 year 7 months', 'YOGA', 'Bucuresti');
INSERT into classtable ("birth_datetime", type, city)
VALUES (NOW() - INTERVAL '14 year 7 months', 'YOGA', 'Bucuresti');
INSERT into classtable ("birth_datetime", type, city)
VALUES (NOW() - INTERVAL '15 year 7 months', 'YOGA', 'Bucuresti');
INSERT into classtable ("birth_datetime", type, city)
VALUES (NOW() - INTERVAL '16 year 7 months', 'YOGA', 'Bucuresti');
INSERT into classtable ("birth_datetime", type, city)
VALUES (NOW() - INTERVAL '17 year 7 months', 'YOGA', 'Bucuresti');
INSERT into classtable ("birth_datetime", type, city)
VALUES (NOW() - INTERVAL '18 year 7 months', 'YOGA', 'Bucuresti');
INSERT into classtable ("birth_datetime", type, city)
VALUES (NOW() - INTERVAL '19 year 7 months', 'YOGA', 'Bucuresti');
INSERT into classtable ("birth_datetime", type, city)
VALUES (NOW() - INTERVAL '20 year 7 months', 'YOGA', 'Bucuresti');
INSERT into classtable ("birth_datetime", type, city)
VALUES (NOW() - INTERVAL '21 year 7 months', 'YOGA', 'Bucuresti');
INSERT into classtable ("birth_datetime", type, city)
VALUES (NOW() - INTERVAL '22 year 7 months', 'YOGA', 'Bucuresti');
INSERT into classtable ("birth_datetime", type, city)
VALUES (NOW() - INTERVAL '23 year 7 months', 'YOGA', 'Bucuresti');
INSERT into classtable ("birth_datetime", type, city)
VALUES (NOW() - INTERVAL '24 year 7 months', 'YOGA', 'Bucuresti');
INSERT into classtable ("birth_datetime", type, city)
VALUES (NOW() - INTERVAL '25 year 7 months', 'YOGA', 'Bucuresti');
INSERT into classtable ("birth_datetime", type, city, teacher_id)
VALUES (NOW() - INTERVAL '26 year 7 months', 'YOGA', 'Bucuresti',1);
INSERT into classtable ("birth_datetime", type, city,
teacher_id)
VALUES (NOW() - INTERVAL '27 year 7 months', 'YOGA', 'Bucuresti',
1);
INSERT into classtable ("birth_datetime", type, city,
teacher_id)
VALUES (NOW() - INTERVAL '28 year 7 months', 'YOGA', 'Bucuresti',1);
INSERT into classtable ("birth_datetime", type, city)
VALUES (NOW() - INTERVAL '29 year 7 months', 'YOGA', 'Bucuresti');
INSERT into classtable ("birth_datetime", type, city)
VALUES (NOW() - INTERVAL '30 year 7 months', 'YOGA', 'Bucuresti');
INSERT into classtable ("birth_datetime", type, city)
VALUES (NOW() - INTERVAL '31 year 7 months', 'YOGA', 'Bucuresti');
INSERT into classtable ("birth_datetime", type, city)
VALUES (NOW() - INTERVAL '32 year 7 months', 'YOGA', 'Bucuresti');

INSERT into classtable ("birth_datetime", type, city, teacher_id)
VALUES (
        NOW() - INTERVAL '14 year 7 months',
        'YOGA',
        'Brasov',
        3
    );

INSERT into classtable ("birth_datetime", type, city, teacher_id)
VALUES (
        NOW() - INTERVAL '2 year 7 months',
        'YOGA',
        'Cluj',
        4
    );


INSERT into grouptable ("year")
VALUES ('1');
INSERT into grouptable ("year")
VALUES ('2');
INSERT into grouptable ("year")
VALUES ('3');
INSERT into grouptable ("year")
VALUES ('4');
INSERT into grouptable ("year")
VALUES ('5');
INSERT into grouptable ("year")
VALUES ('6');
INSERT into grouptable ("year")
VALUES ('7');
INSERT into grouptable ("year")
VALUES ('8');
INSERT into grouptable ("year")
VALUES ('10');
INSERT into grouptable ("year")
VALUES ('11');
INSERT into grouptable ("year")
VALUES ('12');
INSERT into grouptable ("year")
VALUES ('13');
INSERT into grouptable ("year")
VALUES ('14');
INSERT into grouptable ("year")
VALUES ('15');
INSERT into grouptable ("year")
VALUES ('16');
INSERT into grouptable ("year")
VALUES ('17');
INSERT into grouptable ("year")
VALUES ('18');
INSERT into grouptable ("year")
VALUES ('19');
INSERT into grouptable ("year")
VALUES ('20');
INSERT into grouptable ("year")
VALUES ('21');
INSERT into grouptable ("year")
VALUES ('22');
INSERT into grouptable ("year")
VALUES ('23');
INSERT into grouptable ("year")
VALUES ('24');
INSERT into grouptable ("year")
VALUES ('25');
INSERT into grouptable ("year")
VALUES ('26');
INSERT into grouptable ("year")
VALUES ('27');
INSERT into grouptable ("year")
VALUES ('28');
INSERT into grouptable ("year")
VALUES ('29');
INSERT into grouptable ("year")
VALUES ('30');
INSERT into grouptable ("year")
VALUES ('31');
INSERT into grouptable ("year")
VALUES ('31');
INSERT into grouptable ("year")
VALUES ('32');
INSERT into grouptable ("year")
VALUES ('33');
INSERT into grouptable ("year")
VALUES ('34');



INSERT INTO teacher ("presented_name") VALUES ('Hermina');
INSERT INTO teacher ("presented_name") VALUES ('Simona');
INSERT INTO teacher ("presented_name") VALUES ('Andra');
INSERT INTO teacher ("presented_name") VALUES ('Petru');
INSERT INTO teacher ("presented_name")VALUES ('Anton');



INSERT into coupon (
        coupon_code,
        teacher_id,
        coupon_type,
        gender,
        class_id
    )
VALUES ('MVJQG36CHXSL', 1,  'student',
'woman', 28);

INSERT into coupon (
        coupon_code,
        teacher_id,
        coupon_type,
        gender,
        class_id
    )
VALUES (
        'VF3KC233UF6T',
        1,
        
        'student',
        'woman',
        3
    );

INSERT into coupon (
        coupon_code,
        teacher_id,
        coupon_type,
        gender,
        class_id
    )
VALUES (
        'V9EK76PSUSP6',
        2,
        
        'student',
        'woman',
        4
    );

    INSERT into coupon (
        coupon_code,
        teacher_id,
        coupon_type,
        gender,
        class_id
    )
VALUES (
        'V9EK76PGUSP6',

        4,
        'student',
        'woman',
        5
    );

    INSERT into coupon (
        coupon_code,
        teacher_id,
        coupon_type,
        gender,
        class_id
    )
VALUES (
        'V9EK96PGUSP6',
      5,
        'student',
        'woman',
        5
    );

INSERT into coupon (
        coupon_code,
        teacher_id,
        coupon_type,
        gender,
        class_id
    )
VALUES (
        'V9EK78PGUSP6',

        4,
        'student',
        'woman',
        4
    );



INSERT into coupon (
        coupon_code,
        teacher_id,
        coupon_type,
        gender,
        class_id
    )
VALUES (
        'XHYQP25SEA53',

        3,
       
        'student',
        'woman',
        35
    );

INSERT into coupon (
        coupon_code,
        teacher_id,
        coupon_type,
        gender,
        class_id
    )
VALUES (
        'VF3KC233UF8T',

        4,
      
        'teacher',
        'man',
       36
    );

    INSERT into coupon (
        coupon_code,
        teacher_id,
        coupon_type,
        gender,
        class_id
    )
VALUES (
        'HF3HC233UF6T',

        4,
        'teacher',
        'man',
        36
    );



INSERT into usertable (
        "name",
        "telephone",
        "signup_in_class_id",
        "signup_teacher_in_classes_id",
        "email",
        "password"
    )
VALUES (
        'benny',
        '22',
        2,
        array [0],
        'benny@sol.ro',
        '$2b$10$k4OCZrRkySRSvOHofF/QyeKt6iXQeJVHhYWuVwPEjn8crFhTa3sPe'
    );
--password is "lovelove"
INSERT into usertable (
        "name",
        "telephone",
        "signup_in_class_id",
        "signup_teacher_in_classes_id",
        "email",
        "password"
    )
VALUES (
        'allstar',
        '333',
        5,
        array [0],
        --31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4
        'allstar@sol.ro',
        '$2b$10$k4OCZrRkySRSvOHofF/QyeKt6iXQeJVHhYWuVwPEjn8crFhTa3sPe'
    );
--password is "lovelove"
INSERT into usertable (
        "name",
        "telephone",
        "signup_in_class_id",
        "signup_teacher_in_classes_id",
        "email",
        "password"
    )
VALUES (
        'Allstar Micisescu',
        '333',
        23,
        array [8,5,6,7],
        --31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4
        'allstar2@sol.ro',
        '$2b$10$k4OCZrRkySRSvOHofF/QyeKt6iXQeJVHhYWuVwPEjn8crFhTa3sPe'
    );
--password is "lovelove"
INSERT into usertable (
        "name",
        "telephone",
        "signup_in_class_id",
        "signup_teacher_in_classes_id",
        "email",
        "password"
    )
VALUES (
        'Vlad Tepes',
        '22342',
        2,
        array [0],
        'vlad@sol.ro',
        '$2b$10$k4OCZrRkySRSvOHofF/QyeKt6iXQeJVHhYWuVwPEjn8crFhTa3sPe'
    );
--password is "lovelove"

INSERT into usertable (
        "name",
        "email",
        "password",
        "my_role"
    )
VALUES (
        'admin',
        'contact@avantweb.ro',
        '$2b$10$k4OCZrRkySRSvOHofF/QyeKt6iXQeJVHhYWuVwPEjn8crFhTa3sPe',
        'app_admin'
    );
--password is "lovelove"


