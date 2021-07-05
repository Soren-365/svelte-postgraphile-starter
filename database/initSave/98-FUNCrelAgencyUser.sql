CREATE FUNCTION updateAgencyUser_func() RETURNS TRIGGER AS $$ 
DECLARE 
p1 INT := NEW."id" ;
p2 INT := NEW."createdById" ;

BEGIN 

IF p1 IS NULL THEN
    RAISE EXCEPTION 'p1 cannot be null';
END IF;

IF p2 IS NULL THEN
    RAISE EXCEPTION 'p2 cannot be null';
END IF;

  INSERT INTO agencyuser ("agencyId", "userId")
  VALUES
  (p1, p2);

  UPDATE usertable SET "atAgency"=p1 WHERE "id"=p2;
  
  RETURN NEW;
END;
$$ LANGUAGE 'plpgsql';



-- CREATE TRIGGER updateAgencyUserINS
-- AFTER
-- INSERT ON usertable AS $$ BEGIN
-- SET
--   NOCOUNT ON;
-- INSERT INTO agencyuser(
--     "atAgency",
--     "accomodationId"
--   )
-- SELECT
--   i."atAgency",
--   i."accomodationId"
-- FROM inserted i
-- END;
-- $$ LANGUAGE 'plpgsql';
-- CREATE TRIGGER updateAgencyUserDEL
-- AFTER
--   DELETE ON usertable AS $$ BEGIN
-- SET
--   NOCOUNT ON;
-- DELETE FROM agencyuser("accomodationId")
-- SELECT
--   d."accomodationId"
-- FROM deleted d
-- END;
-- $$ LANGUAGE 'plpgsql';
-- -- CREATE TRIGGER updateAgencyUser AFTER INSERT
-- --     ON usertable
-- --     EXECUTE PROCEDURE updateAgencyUser_func("atAgency", "userId");

--//

