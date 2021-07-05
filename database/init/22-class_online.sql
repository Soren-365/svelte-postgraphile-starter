CREATE TABLE class_online (
    "id" SERIAL primary key,
    "classtable_id" INT REFERENCES classtable("id"),
    "theory_db_link" TEXT,
    "main_theory_start_time" TIME,
    "main_theory_duration" INTERVAL,
    "secondary_theory_start_time" TIME,
    "secondary_theory_duration" INTERVAL,
    "practice_start_time" TIME,
    "practice_duration" INTERVAL,
    "practice_program" TEXT,
    "practice_program_audio_link" TEXT,
    "lastModified" TIMESTAMP,
    "timeCreated" TIMESTAMP default NOW()
);
CREATE INDEX ON class_online("id");
CREATE INDEX ON class_online("classtable_id");

--//

