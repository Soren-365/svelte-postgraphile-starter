import { QGuidefavorite as objGuidefavorite from '../graphqlQueriesMS/__generated__/QGuidefavorite }'

import { Guidefavorite  as gqlGuidefavorite } from '*.graphqls


const GuidefavoriteTransform = (raw: gqlGuidefavorite): objGuidefavorite => {
    return {
        guideFavoriteId: `${raw.guideFavoriteId}`,agencies_romanianIdPool: `${raw.agencies_romanianIdPool}`,agencies_abroadIdPool: `${raw.agencies_abroadIdPool}`,travelGroupResourceIdPool: `${raw.travelGroupResourceIdPool}`
    }
}
        