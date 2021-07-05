

create trigger guide_create_contact after insert
  on guide
  for each row
  execute procedure create_contact();

  --//

create trigger agency_create_contact after insert
  on agency
  for each row
  execute procedure create_contact();

  --//




create trigger touristresource_create_contact after insert
  on touristresource
  for each row
  execute procedure create_contact();

  --//


create trigger accomodationresource_create_contact after insert
  on accomodationresource
  for each row
  execute procedure create_contact();

  --//


create trigger eventresource_create_contact after insert
  on eventresource
  for each row
  execute procedure create_contact();

  --//


create trigger transportresource_create_contact after insert
  on transportresource
  for each row
  execute procedure create_contact();

  --//



create trigger hostresource_create_contact after insert
  on hostresource
  for each row
  execute procedure create_contact();

  --//

create trigger tourist_create_contact after insert
  on tourist
  for each row
  execute procedure create_contact();

  --//


create trigger travelgroupresource_create_contact after insert
  on travelgroupresource
  for each row
  execute procedure create_contact();

  --//
