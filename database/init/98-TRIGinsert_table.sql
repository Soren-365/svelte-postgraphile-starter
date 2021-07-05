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