#!/bin/sh

echo we are in: ${PWD}

rm -R dump/dump.sql

touch dump/dump.sql

for f in init/*.sql; do cat $f >> dump/dump.sql; echo '\n\n' >> dump/dump.sql;done 

docker stop svelte_database
docker container rm svelte_database
docker pull postgres:alpine


if [ -e /home/soreng/docker/volumes/svelte_db ]
then
echo present: /home/soreng/docker/volumes/svelte_db
echo confirm with sudo to remove data volumen
sudo rm -R /home/soreng/docker/volumes/svelte_db
echo "removed old container pgql volume!! completely new DB .sql files"
fi

