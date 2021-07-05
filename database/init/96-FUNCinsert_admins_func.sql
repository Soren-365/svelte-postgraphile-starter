CREATE FUNCTION insert_administrator_func() RETURNS TRIGGER AS $$ BEGIN BEGIN 
IF (NEW."my_role" = 'app_admin') THEN
INSERT INTO administrator (
        "user_id",
        "presented_name",
        "email_for_notifications"
    )
VALUES (
        NEW."id",
        NEW."name",
        NEW."email"
    );
END IF;
END;
RETURN NEW;
END;
$$ LANGUAGE 'plpgsql';

--//

