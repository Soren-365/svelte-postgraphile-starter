CREATE OR REPLACE FUNCTION update_year() RETURNS BOOLEAN AS $$
DECLARE BEGIN
UPDATE classtable
SET "year" = TO_CHAR(
        AGE(
            NOW()::date,
            classtable.birth_datetime::date
        ) + INTERVAL '1 years',
        'YY'
    )::INTEGER;
RETURN true;
END;
$$ LANGUAGE 'plpgsql';
--//