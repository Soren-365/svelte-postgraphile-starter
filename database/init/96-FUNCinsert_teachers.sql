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