CREATE TRIGGER updateMediaDestinationINS
AFTER INSERT ON destinationresource
FOR EACH ROW
    EXECUTE PROCEDURE updatemediadestination_func();

--//



