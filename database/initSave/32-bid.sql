CREATE TABLE bid (
    "id"             SERIAL primary key   
,	"publisherId"       INT[] NOT NULL
,	"createdById"       INT[] NOT NULL
,	"bidAmount"         MONEY[]
,   "isActive"          BOOLEAN[] NOT NULL

,   "timeCreated"       TIMESTAMP[] NOT NULL DEFAULT array[now()]
  
);

--//





