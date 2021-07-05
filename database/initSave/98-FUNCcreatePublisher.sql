create function create_publisher() returns trigger as $$
DECLARE 
p1 INT := NEW."createdById" ;
p2 VARCHAR(240)  := NEW."name" ;
p3 INT  := NEW."id" ;
p4 resourcetype := 'Unknown';
tname TEXT := TG_NAME ;

BEGIN 

IF p1 IS NULL THEN
    RAISE EXCEPTION 'createdById cannot be null in createPublisher';
END IF;

IF p2 IS NULL THEN
    RAISE EXCEPTION 'name cannot be null in createPublisher';
END IF;

IF tname IS NULL THEN
    RAISE EXCEPTION 'tname cannot be null in createPublisher';
END IF;


IF tName='guide_create_publisher' THEN
    p4 = 'Guide';
END IF;

IF tName='agency_create_publisher' THEN
  p4 = 'Agency';
END IF;

IF tName='touristresource_create_publisher' THEN
 p4 = 'TouristResource';
END IF;


IF tName='tourist_create_publisher' THEN
 p4 = 'Tourist';
END IF;

INSERT INTO publisher ("createdById", "name", "belongsToId", "belongsToType")
  VALUES
  (p1, p2, p3, p4);
  RETURN NEW;
END;
$$ LANGUAGE 'plpgsql';

--//
