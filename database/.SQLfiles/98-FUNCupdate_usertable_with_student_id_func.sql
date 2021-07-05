CREATE FUNCTION update_usertable_with_student_id_func() RETURNS TRIGGER AS $$
DECLARE BEGIN
UPDATE usertable SET "student_id" = NEW."id" WHERE "id" = NEW."user_id";
RETURN NEW;
END;
$$ LANGUAGE 'plpgsql';

--//
