import { QTravelgroupresource as objTravelgroupresource from '../graphqlQueriesMS/__generated__/QTravelgroupresource }'

import { Travelgroupresource  as gqlTravelgroupresource } from '*.graphqls


const TravelgroupresourceTransform = (raw: gqlTravelgroupresource): objTravelgroupresource => {
    return {
        travelGroupId: `${raw.travelGroupId}`,travelGroupName: `${raw.travelGroupName}`,contactId: `${raw.contactId}`,publisherId: `${raw.publisherId}`,createdById: `${raw.createdById}`,numberOfAdults: `${raw.numberOfAdults}`,numberOfChildren: `${raw.numberOfChildren}`,customInfo: `${raw.customInfo}`,bookingCalendarId: `${raw.bookingCalendarId}`,atAgency: `${raw.atAgency}`,atGuide: `${raw.atGuide}`,language: `${raw.language}`,atTripOfferResource: `${raw.atTripOfferResource}`,atTouristResource: `${raw.atTouristResource}`,isRomanian: `${raw.isRomanian}`,isActive: `${raw.isActive}`,lastModified: `${raw.lastModified}`,timeCreated: `${raw.timeCreated}`
    }
}
        