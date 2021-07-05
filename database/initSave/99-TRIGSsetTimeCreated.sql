create trigger triptype_time_created before insert
  on triptype
  for each row
  execute procedure set_time_created();

  --//

create trigger usertable_time_created before insert
  on usertable
  for each row
  execute procedure set_time_created();

  --//

  create trigger contact_time_created before insert
  on contact
  for each row
  execute procedure set_time_created();

  --//

   create trigger publisher_time_created before insert
  on publisher
  for each row
  execute procedure set_time_created();

  --//

create trigger geocoding_time_created before insert
  on geocoding
  for each row
  execute procedure set_time_created();

  --//
  create trigger accounting_time_created before insert
  on accounting
  for each row
  execute procedure set_time_created();

  --//

  create trigger bid_time_created before insert
  on bid
  for each row
  execute procedure set_time_created();

  --//

  create trigger auctioninfo_time_created before insert
  on auctioninfo
  for each row
  execute procedure set_time_created();

  --//

    create trigger presentation_time_created before insert
  on presentation
  for each row
  execute procedure set_time_created();

  --//

create trigger priceinfo_time_created before insert
  on priceinfo
  for each row
  execute procedure set_time_created();

  --//

  create trigger calendarentry_time_created before insert
  on calendarentry
  for each row
  execute procedure set_time_created();

  --//

  create trigger timerange_time_created before insert
  on timerange
  for each row
  execute procedure set_time_created();

  --//

  create trigger bookingcalendar_time_created before insert
  on bookingcalendar
  for each row
  execute procedure set_time_created();

  --//

create trigger accomodationresource_time_created before insert
  on accomodationresource
  for each row
  execute procedure set_time_created();

  --//

create trigger destinationresource_time_created before insert
  on destinationresource
  for each row
  execute procedure set_time_created();

  --//

create trigger eventresource_time_created before insert
  on eventresource
  for each row
  execute procedure set_time_created();

  --//

create trigger tripofferresource_time_created before insert
  on tripofferresource
  for each row
  execute procedure set_time_created();

  --//

  create trigger roomcalendarentry_time_created before insert
  on roomcalendarentry
  for each row
  execute procedure set_time_created();

  --//

  create trigger roomcalendar_time_created before insert
  on roomcalendar
  for each row
  execute procedure set_time_created();

  --//

create trigger transportresource_time_created before insert
  on transportresource
  for each row
  execute procedure set_time_created();

  --//

create trigger review_time_created before insert
  on review
  for each row
  execute procedure set_time_created();

  --//  

create trigger hostresource_time_created before insert
  on hostresource
  for each row
  execute procedure set_time_created();

  --//

create trigger tourist_time_created before insert
  on touristresource
  for each row
  execute procedure set_time_created();

  --//  

create trigger languagelevel_time_created before insert
  on languagelevel
  for each row
  execute procedure set_time_created();

  --//

create trigger guideresource_time_created before insert
  on guideresource
  for each row
  execute procedure set_time_created();

  --//

create trigger guide_time_created before insert
  on guide
  for each row
  execute procedure set_time_created();

  --//

create trigger agency_time_created before insert
  on agency
  for each row
  execute procedure set_time_created();

  --//

  create trigger medialocation_time_created before insert
  on medialocation
  for each row
  execute procedure set_time_created();

  --//

create trigger touristresource_time_created before insert
  on touristresource
  for each row
  execute procedure set_time_created();

  --//

  create trigger travelgroupresource_time_created before insert
  on travelgroupresource
  for each row
  execute procedure set_time_created();

  --//

  create trigger agencyaccomodation_time_created before insert
  on agencyaccomodation
  for each row
  execute procedure set_time_created();

  --//

    create trigger agencyevent_time_created before insert
  on agencyevent
  for each row
  execute procedure set_time_created();

  --//

    create trigger agencyguide_time_created before insert
  on agencyguide
  for each row
  execute procedure set_time_created();

  --//

    create trigger agencyhost_time_created before insert
  on agencyhost
  for each row
  execute procedure set_time_created();

  --//

    create trigger agencytourist_time_created before insert
  on agencytourist
  for each row
  execute procedure set_time_created();

  --//

    create trigger agencytransport_time_created before insert
  on agencytransport
  for each row
  execute procedure set_time_created();

  --//

    create trigger agencytravelgroup_time_created before insert
  on agencytravelgroup
  for each row
  execute procedure set_time_created();

  --//

    create trigger agencytripoffer_time_created before insert
  on agencytripoffer
  for each row
  execute procedure set_time_created();

  --//

    create trigger agencyuser_time_created before insert
  on agencyuser
  for each row
  execute procedure set_time_created();

  --//

  create trigger mediadestinationresource_time_created before insert
  on mediadestinationresource
  for each row
  execute procedure set_time_created();

  --//

  create trigger agencyreview_time_created before insert
  on agencyreview
  for each row
  execute procedure set_time_created();

  --//


  create trigger guidereview_time_created before insert
  on guidereview
  for each row
  execute procedure set_time_created();

  --//


  create trigger date_time_created before insert
  on date_
  for each row
  execute procedure set_time_created();

  --//


  create trigger touristreview_time_created before insert
  on touristreview
  for each row
  execute procedure set_time_created();

  --//

  create trigger agencymedialibrary_time_created before insert
  on agencymedialibrary
  for each row
  execute procedure set_time_created();

  --//

  create trigger similarbytriptypeaccomodation_time_created before insert
  on similarbytriptypeaccomodation
  for each row
  execute procedure set_time_created();

  --//

  create trigger similarbytriptypeevent_time_created before insert
  on similarbytriptypeevent
  for each row
  execute procedure set_time_created();

  --//

  create trigger similarbytriptypeguide_time_created before insert
  on similarbytriptypeguide
  for each row
  execute procedure set_time_created();

  --//

  create trigger similarbytriptypehost_time_created before insert
  on similarbytriptypehost
  for each row
  execute procedure set_time_created();

  --//

  create trigger similarbytriptypetransport_time_created before insert
  on similarbytriptypetransport
  for each row
  execute procedure set_time_created();

  --//

  create trigger similarbytriptypetravelgroup_time_created before insert
  on similarbytriptypetravelgroup
  for each row
  execute procedure set_time_created();

  --//

  create trigger assocaccomodation_time_created before insert
  on assocaccomodation
  for each row
  execute procedure set_time_created();

  --//


  create trigger assocguide_time_created before insert
  on assocguide
  for each row
  execute procedure set_time_created();

  --//

  create trigger assochost_time_created before insert
  on assochost
  for each row
  execute procedure set_time_created();

  --//

  create trigger assocevent_time_created before insert
  on assocevent
  for each row
  execute procedure set_time_created();

  --//

  create trigger assocdestination_time_created before insert
  on assocdestination
  for each row
  execute procedure set_time_created();

  --//

  create trigger assoctravelgroup_time_created before insert
  on assoctravelgroup
  for each row
  execute procedure set_time_created();

  --//



