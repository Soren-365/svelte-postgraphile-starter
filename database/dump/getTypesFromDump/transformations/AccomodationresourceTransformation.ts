import { QAccomodationresource as objAccomodationresource from '../graphqlQueriesMS/__generated__/QAccomodationresource }'

import { Accomodationresource  as gqlAccomodationresource } from '*.graphqls


const AccomodationresourceTransform = (raw: gqlAccomodationresource): objAccomodationresource => {
    return {
        accomodationId: `${raw.accomodationId}`,accomodationName: `${raw.accomodationName}`,contactId: `${raw.contactId}`,addressId: `${raw.addressId}`,locatedIn: `${raw.locatedIn}`,locationCalendarId: `${raw.locationCalendarId}`,triptype: `${raw.triptype}`,publisherId: `${raw.publisherId}`,createdById: `${raw.createdById}`,isActive: `${raw.isActive}`,ownedByAt: `${raw.ownedByAt}`,presentationId: `${raw.presentationId}`,atAgency: `${raw.atAgency}`,atGuide: `${raw.atGuide}`,isPrivate: `${raw.isPrivate}`,lastModified: `${raw.lastModified}`,timeCreated: `${raw.timeCreated}`
    }
}
        