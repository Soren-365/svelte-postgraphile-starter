import { QHostresource as objHostresource from '../graphqlQueriesMS/__generated__/QHostresource }'

import { Hostresource  as gqlHostresource } from '*.graphqls


const HostresourceTransform = (raw: gqlHostresource): objHostresource => {
    return {
        hostId: `${raw.hostId}`,hostResourceName: `${raw.hostResourceName}`,contactId: `${raw.contactId}`,publisherId: `${raw.publisherId}`,createdById: `${raw.createdById}`,withAccomodation: `${raw.withAccomodation}`,atAccomodation: `${raw.atAccomodation}`,atAgency: `${raw.atAgency}`,atGuide: `${raw.atGuide}`,triptype: `${raw.triptype}`,locatedIn: `${raw.locatedIn}`,addressInfoId: `${raw.addressInfoId}`,ownedByAt: `${raw.ownedByAt}`,presentationId: `${raw.presentationId}`,bookingCalendarId: `${raw.bookingCalendarId}`,isRomanian: `${raw.isRomanian}`,isActive: `${raw.isActive}`,isPrivate: `${raw.isPrivate}`,lastModified: `${raw.lastModified}`,timeCreated: `${raw.timeCreated}`
    }
}
        