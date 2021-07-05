CREATE TABLE account (
   "id"    SERIAL primary key   , 
   "emailHash"    TEXT,
  "passwordHash" TEXT,
  "sessionId"    TEXT,
   "logins"        INTEGER
);

ALTER TABLE usertable
ADD FOREIGN KEY ("id") REFERENCES account("id");

--//



