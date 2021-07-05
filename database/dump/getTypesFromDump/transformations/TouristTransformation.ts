import { QTourist as objTourist from '../graphqlQueriesMS/__generated__/QTourist }'

import { Tourist  as gqlTourist } from '*.graphqls


const TouristTransform = (raw: gqlTourist): objTourist => {
    return {
        touristId: `${raw.touristId}`,touristFirstName: `${raw.touristFirstName}`,touristLastName: `${raw.touristLastName}`,contactId: `${raw.contactId}`,publisherId: `${raw.publisherId}`,createdById: `${raw.createdById}`,nativeLanguage: `${raw.nativeLanguage}`,alternativeLanguage: `${raw.alternativeLanguage}`,touristOfferId: `${raw.touristOfferId}`,touristFavoriteId: `${raw.touristFavoriteId}`,touristBidId: `${raw.touristBidId}`,touristDealId: `${raw.touristDealId}`,guideReviewINIdPool: `${raw.guideReviewINIdPool}`,agencyReviewINIdPool: `${raw.agencyReviewINIdPool}`,guideReviewOUTIdPool: `${raw.guideReviewOUTIdPool}`,agencyReviewOUTIdPool: `${raw.agencyReviewOUTIdPool}`,timeCreated: `${raw.timeCreated}`,atTravelGroup: `${raw.atTravelGroup}`,isActive: `${raw.isActive}`,isRomanian: `${raw.isRomanian}`
    }
}
        