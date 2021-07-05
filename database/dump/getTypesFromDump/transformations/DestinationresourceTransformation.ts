import { QDestinationresource as objDestinationresource from '../graphqlQueriesMS/__generated__/QDestinationresource }'

import { Destinationresource  as gqlDestinationresource } from '*.graphqls


const DestinationresourceTransform = (raw: gqlDestinationresource): objDestinationresource => {
    return {
        destinationId: `${raw.destinationId}`,destinationName: `${raw.destinationName}`,publishedById: `${raw.publishedById}`,createdById: `${raw.createdById}`,area: `${raw.area}`,judet: `${raw.judet}`,triptype: `${raw.triptype}`,isActive: `${raw.isActive}`,priceInfoId: `${raw.priceInfoId}`,activeAtPeriodsId: `${raw.activeAtPeriodsId}`,presentationId: `${raw.presentationId}`,atAgency: `${raw.atAgency}`,geoCodingId: `${raw.geoCodingId}`,isPrivate: `${raw.isPrivate}`,lastModified: `${raw.lastModified}`,lastModifiedBy: `${raw.lastModifiedBy}`,timeCreated: `${raw.timeCreated}`
    }
}
        