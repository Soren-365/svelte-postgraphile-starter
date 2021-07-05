CREATE FUNCTION update_class_datetime_func() RETURNS TRIGGER AS $$
DECLARE BEGIN
UPDATE classtable
SET "year" = TO_CHAR(
        AGE(NOW()::date, classtable.birth_datetime::date) + INTERVAL '1 year',
        'YY'
    )::INTEGER;
UPDATE classtable
SET "week_day" = extract(
        dow
        from NEW."updated_datetime"::date
    )
WHERE "id" = NEW."id";
UPDATE classtable
SET "start_time" = TO_CHAR(NEW."updated_datetime"::time, 'HH24:MI')
WHERE "id" = NEW."id";
RETURN NEW;
END;
$$ LANGUAGE 'plpgsql';
--//