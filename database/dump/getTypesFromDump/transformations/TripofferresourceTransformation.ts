import { QTripofferresource as objTripofferresource from '../graphqlQueriesMS/__generated__/QTripofferresource }'

import { Tripofferresource  as gqlTripofferresource } from '*.graphqls


const TripofferresourceTransform = (raw: gqlTripofferresource): objTripofferresource => {
    return {
        tripOfferId: `${raw.tripOfferId}`,tripOfferName: `${raw.tripOfferName}`,publisherId: `${raw.publisherId}`,createdById: `${raw.createdById}`,availableAtCalendarId: `${raw.availableAtCalendarId}`,guideResponsibleId: `${raw.guideResponsibleId}`,guideSecondaryId: `${raw.guideSecondaryId}`,atAgency: `${raw.atAgency}`,priceInfoId: `${raw.priceInfoId}`,destinationId: `${raw.destinationId}`,isSigned: `${raw.isSigned}`,atGuide: `${raw.atGuide}`,isActive: `${raw.isActive}`,isPrivate: `${raw.isPrivate}`,lastModified: `${raw.lastModified}`,timeCreated: `${raw.timeCreated}`
    }
}
        