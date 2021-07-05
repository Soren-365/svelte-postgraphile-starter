CREATE FUNCTION updatemediadestination_func()  RETURNS TRIGGER AS $$ 
DECLARE 
p1 INT := NEW."atAgency" ;
p2 INT := NEW."id" ;
p3 timestamp := NEW."lastModified" ;

BEGIN 

IF p1 IS NULL THEN
    RAISE EXCEPTION 'p1 cannot be null';
END IF;

IF p2 IS NULL THEN
    RAISE EXCEPTION 'p2 cannot be null';
END IF;

IF p3 IS NULL THEN
    RAISE EXCEPTION 'p3 cannot be null';
END IF;


  INSERT INTO mediadestinationresource ("atAgency", "atDestination", "lastModified")
  VALUES
  (p1, p2, p3);
  RETURN NEW;
END;
$$ LANGUAGE 'plpgsql';

--//



