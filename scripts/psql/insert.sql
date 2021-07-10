CREATE OR REPLACE FUNCTION testfunc(cityname TEXT) RETURNS integer AS $$
DECLARE 
id INT;
BEGIN
INSERT INTO citytable (city) VALUES (cityname);
RETURN citytable.id FROM citytable WHERE city = cityname;
END;
$$ LANGUAGE plpgsql;