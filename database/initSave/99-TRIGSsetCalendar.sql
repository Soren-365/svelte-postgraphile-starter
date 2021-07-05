  create trigger travelgroupresource_create_bookingcalendar after insert
  on travelgroupresource
  for each row
  execute procedure create_bookingcalendar();

  --//

  create trigger guideresource_create_bookingcalendar after insert
  on guideresource
  for each row
  execute procedure create_bookingcalendar();

  --//

create trigger transportresource_create_bookingcalendar after insert
  on transportresource
  for each row
  execute procedure create_bookingcalendar();

  --//

create trigger hostresource_create_bookingcalendar after insert
  on hostresource
  for each row
  execute procedure create_bookingcalendar();

  --//

create trigger tourist_create_bookingcalendar after insert
  on touristresource
  for each row
  execute procedure create_bookingcalendar();

  --//  
create trigger destinationresource_create_bookingcalendar after insert
  on destinationresource
  for each row
  execute procedure create_bookingcalendar();

  --//

create trigger eventresource_create_bookingcalendar after insert
  on eventresource
  for each row
  execute procedure create_bookingcalendar();

  --//

create trigger tripofferresource_create_bookingcalendar after insert
  on tripofferresource
  for each row
  execute procedure create_bookingcalendar();

  --//

create trigger accomodationresource_create_bookingcalendar after insert
  on accomodationresource
  for each row
  execute procedure create_bookingcalendar();

  --//

create trigger guide_create_bookingcalendar after insert
  on guide
  for each row
  execute procedure create_bookingcalendar();

  --//

create trigger agency_create_bookingcalendar after insert
  on agency
  for each row
  execute procedure create_bookingcalendar();

  --//


create trigger touristresource_create_bookingcalendar after insert
  on touristresource
  for each row
  execute procedure create_bookingcalendar();

  --//

