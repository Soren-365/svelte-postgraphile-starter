CREATE TRIGGER insert_class
AFTER
INSERT ON classtable FOR EACH ROW EXECUTE PROCEDURE insert_class_func();
--//