

create trigger guide_create_publisher after insert
  on guide
  for each row
  execute procedure create_publisher();

  --//

create trigger agency_create_publisher after insert
  on agency
  for each row
  execute procedure create_publisher();

  --//


create trigger touristresource_create_publisher after insert
  on touristresource
  for each row
  execute procedure create_publisher();

  --//
