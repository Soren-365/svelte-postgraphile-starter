FROM postgres:alpine

ENV POSTGRES_PASSWORD=cursuri_pass

# sudo apt-get install postgresql-server-dev-all
# sudo apt-get install postgresql-common

# RUN git clone https://github.com/eulerto/wal2json.git
# RUN cd wal2json
# RUN USE_PGXS=1 make
# RUN USE_PGXS=1 make install

# OR 

# git clone https://github.com/eulerto/wal2json -b master --single-branch \
#     && cd wal2json \
#     && git checkout d2b7fef021c46e0d429f2c1768de361069e58696 \
#     && make && make install \
#     && cd .. \
#     && rm -rf wal2json

# but PROBABLY not (to update repos):
# sudo apt-get install curl ca-certificates gnupg
# curl https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
# deb http://apt.postgresql.org/pub/repos/apt buster-pgdg main

COPY ./dump/dump.sql /docker-entrypoint-initdb.d/
COPY .pgpass /~/     
COPY pg_service.conf /etc/postgresql-common/

# COPY configure-db-new.sh configure-db-new.sh

