CREATE TABLE roomcalendar (
    "id"    SERIAL primary key   
,	"publisherId"       INT NOT NULL
,	"createdById"       INT NOT NULL
,   "isActive"          BOOLEAN DEFAULT true
,	"calendarentryId" 	INT NOT NULL
,   "timeCreated"       TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("publisherId") REFERENCES publisher("id")
,    FOREIGN KEY ("createdById") REFERENCES usertable("id")
,    FOREIGN KEY ("calendarentryId") REFERENCES roomcalendarentry
  
);

ALTER TABLE roomcalendarentry
ADD FOREIGN KEY ("atRoomCalendar") REFERENCES roomcalendar("id");



CREATE INDEX ON roomcalendar("createdById");

CREATE INDEX ON roomcalendar("publisherId");

CREATE INDEX ON roomcalendar("calendarentryId");

--//


