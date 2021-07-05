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