CREATE TRIGGER update_usertable_with_student_id
AFTER INSERT ON student
FOR EACH ROW
    EXECUTE PROCEDURE update_usertable_with_student_id_func();

--//



