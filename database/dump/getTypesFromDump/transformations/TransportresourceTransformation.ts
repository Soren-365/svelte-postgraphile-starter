import { QTransportresource as objTransportresource from '../graphqlQueriesMS/__generated__/QTransportresource }'

import { Transportresource  as gqlTransportresource } from '*.graphqls


const TransportresourceTransform = (raw: gqlTransportresource): objTransportresource => {
    return {
        transportId: `${raw.transportId}`,transportName: `${raw.transportName}`,contactId: `${raw.contactId}`,publisherId: `${raw.publisherId}`,createdById: `${raw.createdById}`,locatedIn: `${raw.locatedIn}`,addressInfoId: `${raw.addressInfoId}`,atAgency: `${raw.atAgency}`,atGuide: `${raw.atGuide}`,ownedByAt: `${raw.ownedByAt}`,presentationId: `${raw.presentationId}`,isBus: `${raw.isBus}`,numberOfPlaces: `${raw.numberOfPlaces}`,bookingCalendarId: `${raw.bookingCalendarId}`,isActive: `${raw.isActive}`,isPrivate: `${raw.isPrivate}`,lastModified: `${raw.lastModified}`,timeCreated: `${raw.timeCreated}`
    }
}
        