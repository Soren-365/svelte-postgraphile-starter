#!/bin/bash

echo we are in: ${PWD}

rm -R dump/dump.sql

touch dump/dump.sql

for f in init/*.sql; do cat $f >> dump/dump.sql; done 


docker stop cursuri_database
docker container rm cursuri_database
docker pull postgres:alpine


if [ -e /home/soreng/docker/volumes/cursuri_db ]
then
echo present: /home/soreng/docker/volumes/cursuri_db
echo confirm with sudo to remove data volumen
sudo rm -R /home/soreng/docker/volumes/cursuri_db
echo "removed old container pgql volume"
fi

