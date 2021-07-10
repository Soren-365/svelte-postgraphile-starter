#!/bin/bash
#method 1:
#  Using createuser and createdb, we can be explicit about the database name,
# enter with: sudo -u postgres psql  //
 sudo -u postgres createuser -s svelte_user
 echo 1
 sudo -u postgres createdb svelte_db
 echo 2
 sudo -u postgres psql -c "ALTER USER svelte_user PASSWORD 'svelte_pass';"

# You should probably be omitting that entirely and letting all the commands default to the user's name instead.

# $ sudo -u postgres createuser -s $USER
# $ createdb
# $ psql
###########################################################################

#method 2:
# sudo -u postgres psql postgres -c "CREATE ROLE cursuri_user LOGIN PASSWORD 'cursuri_pass'"
# sudo -u postgres psql postgres -c "CREATE DATABASE cursuri_db WITH OWNER = cursuri_user;"

# login with
# psql -d cursuri_db -U cursuri_user 

cd database/localPSQL
echo 4
pwd
psql -h 127.0.0.1 -U svelte_user -d svelte_db -a -f PSQL_init_db.sql

# cat ~/.bash_history
# exit 0

##https://stackoverflow.com/questions/60995703/postgresql-definition-of-service-not-found-pgadmin-psql
# 2. System-wide solution

# You can type this to check for the path where the global pg_service.conf file has to be located:

# $ pg_config --sysconfdir
# /etc/postgresql-common

# You can copy your pg_service.conf file in this directory (but without the dot . here). It has to be own by root. 

## pg_pass:
##.pgpass in /home with  chmod 600 .pgpass containing 127.0.0.1:5432:svelte_db:svelte_user:svelte_pass