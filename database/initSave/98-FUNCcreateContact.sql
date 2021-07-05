create function create_contact() returns trigger as $$
DECLARE 

p1 INT := NEW."createdById" ;
p2 INT := NEW."id" ;
p3 resourcetype := 'Unknown';
tname TEXT := TG_NAME ;

BEGIN 


IF tName='guide_create_contact' THEN
   p3 = 'Guide';
END IF;

IF tName='agency_create_contact' THEN
   p3 = 'Agency';
END IF;

IF tName='touristresource_create_contact' THEN
   p3 = 'TouristResource';
END IF;


IF tName='tourist_create_contact' THEN
   p3 = 'Tourist';
END IF;

IF tName='event_create_contact' THEN
   p3 = 'EventResource';
END IF;

IF tName='tripoffer_create_contact' THEN
   p3 = 'TripOfferResource';
END IF;


IF tName='guideresource_create_contact' THEN
   p3 = 'GuideResource';
END IF;

IF tName='host_create_contact' THEN
   p3 = 'HostResource';
END IF;

IF tName='accomodationresource_create_contact' THEN
   p3 = 'AccomodationResource';
END IF;

IF tName='carresource_create_contact' THEN
   p3 = 'CarResource';
END IF;

IF tName='destinationresource_create_contact' THEN
   p3 = 'DestinationResource';
END IF;

IF tName='travelgroup_create_contact' THEN
   p3 = 'TravelGroup';
END IF;


IF p1 IS NULL THEN
    RAISE EXCEPTION 'createdById cannot be null in createContact';
END IF;

IF p2 IS NULL THEN
    RAISE EXCEPTION 'id cannot be null in createContact';
END IF;

IF tName IS NULL THEN
   p3 = 'Unknown';
END IF;


INSERT INTO contact ("createdById", "belongsToId", "belongsToType")
  VALUES
  (p1, p2, p3);
  RETURN NEW;
END;
$$ LANGUAGE 'plpgsql';

--//
