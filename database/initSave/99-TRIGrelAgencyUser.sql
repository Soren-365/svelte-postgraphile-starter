CREATE TRIGGER updateAgencyUserINS
AFTER INSERT ON agency
FOR EACH ROW
    EXECUTE PROCEDURE updateAgencyUser_func();

--//



