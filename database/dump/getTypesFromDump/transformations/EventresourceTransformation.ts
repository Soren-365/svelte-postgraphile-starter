import { QEventresource as objEventresource from '../graphqlQueriesMS/__generated__/QEventresource }'

import { Eventresource  as gqlEventresource } from '*.graphqls


const EventresourceTransform = (raw: gqlEventresource): objEventresource => {
    return {
        eventId: `${raw.eventId}`,eventName: `${raw.eventName}`,agencyName: `${raw.agencyName}`,contactId: `${raw.contactId}`,publisherId: `${raw.publisherId}`,createdById: `${raw.createdById}`,locatedIn: `${raw.locatedIn}`,locationAddressId: `${raw.locationAddressId}`,triptypeId: `${raw.triptypeId}`,activeAtPeriodsId: `${raw.activeAtPeriodsId}`,ownedByAt: `${raw.ownedByAt}`,atAgency: `${raw.atAgency}`,atGuide: `${raw.atGuide}`,presentationId: `${raw.presentationId}`,isActive: `${raw.isActive}`,isPrivate: `${raw.isPrivate}`,lastModified: `${raw.lastModified}`,timeCreated: `${raw.timeCreated}`
    }
}
        