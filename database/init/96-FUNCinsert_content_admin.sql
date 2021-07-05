CREATE FUNCTION insert_content_admin_func() RETURNS TRIGGER AS $$ BEGIN BEGIN 
IF (NEW."my_role" = 'content_admin') THEN
INSERT INTO content_admin (
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

