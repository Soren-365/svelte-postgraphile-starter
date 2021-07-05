CREATE TABLE grouptable (
     id SERIAL primary key,
     birth_datetime TIMESTAMPTZ DEFAULT NOW(),
     "year" SMALLINT,
     "type" class_type DEFAULT 'YOGA',
     lastModified TIMESTAMP,
     timeCreated TIMESTAMP default NOW()
);
CREATE INDEX ON grouptable(id);

--//