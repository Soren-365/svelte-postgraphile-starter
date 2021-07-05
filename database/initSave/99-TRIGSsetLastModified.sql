create trigger triptype_last_modified before update
  on triptype
  for each row
  execute procedure set_last_modified();

  --//

create trigger geocoding_last_modified before update
  on geocoding
  for each row
  execute procedure set_last_modified();

  --//
  
  create trigger presentation_last_modified before update
  on presentation
  for each row
  execute procedure set_last_modified();

  --//

create trigger priceinfo_last_modified before update
  on priceinfo
  for each row
  execute procedure set_last_modified();

  --//

create trigger accomodationresource_last_modified before update
  on accomodationresource
  for each row
  execute procedure set_last_modified();

  --//

create trigger destinationresource_last_modified before update
  on destinationresource
  for each row
  execute procedure set_last_modified();

  --//

create trigger eventresource_last_modified before update
  on eventresource
  for each row
  execute procedure set_last_modified();

  --//

create trigger tripofferresource_last_modified before update
  on tripofferresource
  for each row
  execute procedure set_last_modified();

  --//

create trigger transportresource_last_modified before update
  on transportresource
  for each row
  execute procedure set_last_modified();

  --//

create trigger hostresource_last_modified before update
  on hostresource
  for each row
  execute procedure set_last_modified();

  --//

create trigger guideresource_last_modified before update
  on guideresource
  for each row
  execute procedure set_last_modified();

  --//

create trigger guide_last_modified before update
  on guide
  for each row
  execute procedure set_last_modified();

  --//

create trigger agency_last_modified before update
  on agency
  for each row
  execute procedure set_last_modified();

  --//

create trigger touristresource_last_modified before update
  on touristresource
  for each row
  execute procedure set_last_modified();

  --//

  create trigger travelgroupresource_last_modified before update
  on travelgroupresource
  for each row
  execute procedure set_last_modified();

  --//

  create trigger agencyaccomodation_last_modified before update
  on agencyaccomodation
  for each row
  execute procedure set_last_modified();

  --//

  create trigger mediadestinationresource_last_modified before update
  on mediadestinationresource
  for each row
  execute procedure set_last_modified();

  --//

  create trigger agencymedialibrary_last_modified before update
  on agencymedialibrary
  for each row
  execute procedure set_last_modified();

  --//

