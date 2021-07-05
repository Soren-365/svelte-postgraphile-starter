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