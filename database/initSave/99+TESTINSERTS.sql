--//

--// with SERIAL primary keys

--  INSERT INTO account("id") VALUES(1);

--  INSERT INTO usertable("id","userEmail") VALUES(1,'ss');

-- INSERT INTO agency("name","id","activeInsurance","insuranceExpery","createdById","isActive","isRomanian","lastModified") VALUES('Hemmingways construnction tours',1,false,'2020-03-20 18:45:45',1,true,true,'2000-10-10 08:08:19');


--//

--// with uuid s

-- INSERT INTO account("id") VALUES('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11');

-- INSERT INTO usertable("id","userEmail") VALUES('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11','sorens@gmail.com');

-- INSERT INTO contact("id","createdById","belongsToType","belongsToId") VALUES('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13','a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11','Guide','a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11');

-- INSERT INTO publisher("id","createdById","publisherId","isAgency","isTourist","isGuide","command") VALUES('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11','a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11','a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12','true','false','false',ARRAY['Guide']::logcommand[]);

-- INSERT INTO calendarentry("id","comment") VALUES('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a14',ARRAY['THis is freakin marvelous']);

-- INSERT INTO bookingcalendar("id","id","publisherId","createdById","id") VALUES('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a14','a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13','a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12','a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11','a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a14');

-- INSERT INTO agency("agencyName","id","activeInsurance","insuranceExpery","publisherId","createdById","isActive","isRomanian","bookingCalendarId","lastModified") VALUES('Hemmingways construnction tours','a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13',false,'2020-03-20 18:45:45','a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12','a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',true,true,'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a14','2000-10-10 08:08:19');


-- --//



