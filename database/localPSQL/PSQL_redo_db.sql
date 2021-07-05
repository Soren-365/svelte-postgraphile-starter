-- in order to work:
-- requires that pgql is installed locally
-- & user & db is correct in .pgpass & pg_service.conf files
-- & ../init exists with initialisation files
-- & ../dump/dump.sql is written with psql_local_redo-db script


DROP SCHEMA public CASCADE;
CREATE SCHEMA
public;

GRANT ALL ON SCHEMA public TO public;
ALTER SCHEMA public OWNER to cursuri_user;
GRANT ALL ON SCHEMA public TO cursuri_user;
BEGIN;
    \i ../dump/dump.sql
    COMMIT;
