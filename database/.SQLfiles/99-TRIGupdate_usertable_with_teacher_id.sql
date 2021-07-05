CREATE TRIGGER update_usertable_with_teacher_id
AFTER INSERT ON teacher
FOR EACH ROW
    EXECUTE PROCEDURE update_usertable_with_teacher_id_func();

--//



