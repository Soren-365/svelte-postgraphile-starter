CREATE OR REPLACE FUNCTION get_classes_by_ids(class_ids INT []) RETURNS TABLE(
        class_id INT,
        class_type class_type,
        class_year SMALLINT,
        week_day TEXT,
        start_time TEXT
    ) AS $$ BEGIN for counter in 1..coalesce(array_length(class_ids, 1), 0) loop RETURN QUERY
SELECT classtable.id AS class_id,
    classtable.type AS class_type,
    classtable.year AS class_year,
    classtable.week_day,
    classtable.start_time
FROM classtable
WHERE id = class_ids [counter];
end loop;
END;
$$ LANGUAGE plpgsql;
--//