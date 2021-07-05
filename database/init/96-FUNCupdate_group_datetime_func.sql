CREATE FUNCTION update_group_datetime_func() RETURNS TRIGGER AS $$
DECLARE BEGIN
UPDATE grouptable
SET "year" = TO_CHAR(
        AGE(NOW()::date, grouptable.birth_datetime::date) + INTERVAL '1 year',
        'YY'
    )::INTEGER;

RETURN NEW;
END;
$$ LANGUAGE 'plpgsql';
--//