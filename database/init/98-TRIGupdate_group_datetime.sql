CREATE TRIGGER update_group_datetime
AFTER
INSERT ON grouptable FOR EACH ROW EXECUTE PROCEDURE update_group_datetime_func();
--//