import { QTouristbid as objTouristbid from '../graphqlQueriesMS/__generated__/QTouristbid }'

import { Touristbid  as gqlTouristbid } from '*.graphqls


const TouristbidTransform = (raw: gqlTouristbid): objTouristbid => {
    return {
        touristBidId: `${raw.touristBidId}`,tripOfferResourceIdPool: `${raw.tripOfferResourceIdPool}`,eventResourceIdPool: `${raw.eventResourceIdPool}`,transportationResourceIdPool: `${raw.transportationResourceIdPool}`,accomodationResourceIdPool: `${raw.accomodationResourceIdPool}`,hostResourceIdPool: `${raw.hostResourceIdPool}`
    }
}
        