CREATE SCHEMA public;
GRANT ALL ON SCHEMA public TO public;
ALTER SCHEMA public OWNER to svelte_user;
GRANT ALL ON SCHEMA public TO svelte_user;
BEGIN;
    \i ../dump/dump.sql
    COMMIT;