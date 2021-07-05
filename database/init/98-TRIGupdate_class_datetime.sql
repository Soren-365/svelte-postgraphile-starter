CREATE TRIGGER update_class_datetime
AFTER
UPDATE OF updated_datetime ON classtable FOR EACH ROW EXECUTE PROCEDURE update_class_datetime_func();
--//