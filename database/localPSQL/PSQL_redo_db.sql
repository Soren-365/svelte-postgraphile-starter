-- in order to work:
-- requires that pgql is installed locally
-- & user & db is correct in .pgpass (chmod 600 .pgpass) & pg_service.conf files
-- & ../init exists with initialisation files
-- & ../dump/dump.sql is written with psql_local_redo-db script


DROP SCHEMA public CASCADE;
CREATE SCHEMA
public;

GRANT ALL ON SCHEMA public TO public;
ALTER SCHEMA public OWNER to svelte_user;
GRANT ALL ON SCHEMA public TO svelte_user;
BEGIN;
    \i ../dump/dump.sql
    COMMIT;
