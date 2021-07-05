import { QTouristfavorite as objTouristfavorite from '../graphqlQueriesMS/__generated__/QTouristfavorite }'

import { Touristfavorite  as gqlTouristfavorite } from '*.graphqls


const TouristfavoriteTransform = (raw: gqlTouristfavorite): objTouristfavorite => {
    return {
        touristFavoriteId: `${raw.touristFavoriteId}`,agencies_romanianIdPool: `${raw.agencies_romanianIdPool}`,agencies_abroadIdPool: `${raw.agencies_abroadIdPool}`,travelGroupResourceIdPool: `${raw.travelGroupResourceIdPool}`,tripsOfferResourceIdPool: `${raw.tripsOfferResourceIdPool}`,guideResourceIdPool: `${raw.guideResourceIdPool}`,eventResourceIdPool: `${raw.eventResourceIdPool}`,transportationResourceIdPool: `${raw.transportationResourceIdPool}`,accomodationResourceIdPool: `${raw.accomodationResourceIdPool}`,hostResourceIdPool: `${raw.hostResourceIdPool}`
    }
}
        