CREATE SCHEMA public;
GRANT ALL ON SCHEMA public TO public;
ALTER SCHEMA public OWNER to cursuri_user;
GRANT ALL ON SCHEMA public TO cursuri_user;
BEGIN;
    \i ../dump/dump.sql
    COMMIT;