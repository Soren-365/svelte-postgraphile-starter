CREATE TABLE bookingcalendar (
    "id" SERIAL primary key   
, 	"belongsToId"         INT 
,    "belongsToType"     resourcetype   
,	"createdById"       INT 
,   "isActive"          BOOLEAN DEFAULT true
,   "fromTimestamp"     TIMESTAMP[] NOT NULL default array[now()]
,   "toTimestamp"       TIMESTAMP[] NOT NULL default array[now()]
,   "resourceType"      resourcetype[]
,   "comment"           TEXT[]
,   "timeCreated"       TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("createdById") REFERENCES usertable("id")
);


CREATE INDEX ON bookingcalendar("belongsToId");
CREATE INDEX ON bookingcalendar("belongsToType");
CREATE INDEX ON bookingcalendar("createdById");


--//

