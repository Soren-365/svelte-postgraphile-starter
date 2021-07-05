CREATE TABLE roomlist (
    "id"        SERIAL primary key   
,    "atAccomodation"    INT NOT NULL 
,	"roomNames"			VARCHAR(128)
, 	"roomNumPeople"	    INT
, 	"roomCalendarId"    INT REFERENCES roomcalendar
,	"roomPrices"		MONEY
,   "roomActive"        BOOLEAN
,    FOREIGN KEY ("atAccomodation") REFERENCES accomodationresource("id")  

);


CREATE INDEX ON roomlist("atAccomodation");
CREATE INDEX ON roomlist("roomCalendarId");

--//


