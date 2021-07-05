import { QTouristresource as objTouristresource from '../graphqlQueriesMS/__generated__/QTouristresource }'

import { Touristresource  as gqlTouristresource } from '*.graphqls


const TouristresourceTransform = (raw: gqlTouristresource): objTouristresource => {
    return {
        touristId: `${raw.touristId}`,contactId: `${raw.contactId}`,publisherId: `${raw.publisherId}`,createdById: `${raw.createdById}`,atTravelGroup: `${raw.atTravelGroup}`,atAgency: `${raw.atAgency}`,atGuide: `${raw.atGuide}`,isSigned: `${raw.isSigned}`,priceInfoId: `${raw.priceInfoId}`,travellingCalendarId: `${raw.travellingCalendarId}`,isRomanian: `${raw.isRomanian}`,isActive: `${raw.isActive}`,isPrivate: `${raw.isPrivate}`,lastModified: `${raw.lastModified}`,timeCreated: `${raw.timeCreated}`
    }
}
        