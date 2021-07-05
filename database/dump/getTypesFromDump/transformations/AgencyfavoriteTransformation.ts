import { QAgencyfavorite as objAgencyfavorite from '../graphqlQueriesMS/__generated__/QAgencyfavorite }'

import { Agencyfavorite  as gqlAgencyfavorite } from '*.graphqls


const AgencyfavoriteTransform = (raw: gqlAgencyfavorite): objAgencyfavorite => {
    return {
        agencyFavoriteId: `${raw.agencyFavoriteId}`,guideResourceIdPool: `${raw.guideResourceIdPool}`,agencies_romanianIdPool: `${raw.agencies_romanianIdPool}`,agencies_abroadIdPool: `${raw.agencies_abroadIdPool}`,travelGroupResourceIdPool: `${raw.travelGroupResourceIdPool}`,eventResourceIdPool: `${raw.eventResourceIdPool}`,transportationResourceIdPool: `${raw.transportationResourceIdPool}`,accomodationResourceIdPool: `${raw.accomodationResourceIdPool}`,hostResourceIdPool: `${raw.hostResourceIdPool}`
    }
}
        