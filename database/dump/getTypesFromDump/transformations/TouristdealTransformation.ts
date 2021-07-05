import { QTouristdeal as objTouristdeal from '../graphqlQueriesMS/__generated__/QTouristdeal }'

import { Touristdeal  as gqlTouristdeal } from '*.graphqls


const TouristdealTransform = (raw: gqlTouristdeal): objTouristdeal => {
    return {
        touristDealId: `${raw.touristDealId}`,tripsOfferResourceIdPool: `${raw.tripsOfferResourceIdPool}`,guideOfferResourceIdPool: `${raw.guideOfferResourceIdPool}`,agencies_romanianIdPool: `${raw.agencies_romanianIdPool}`,agencies_abroadIdPool: `${raw.agencies_abroadIdPool}`,eventResourceIdPool: `${raw.eventResourceIdPool}`,transportationResourceIdPool: `${raw.transportationResourceIdPool}`,accomodationResourceIdPool: `${raw.accomodationResourceIdPool}`,hostResourceIdPool: `${raw.hostResourceIdPool}`
    }
}
        