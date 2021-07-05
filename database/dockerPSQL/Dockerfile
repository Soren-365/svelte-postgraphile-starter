FROM postgres:alpine

ENV POSTGRES_PASSWORD=cursuri_pass

COPY ../dump/dump.sql /docker-entrypoint-initdb.d/
COPY .pgpass /~/     
COPY pg_service.conf /etc/postgresql-common/

# COPY configure-db-new.sh configure-db-new.sh

