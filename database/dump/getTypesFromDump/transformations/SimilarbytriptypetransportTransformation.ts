import { QSimilarbytriptypetransport as objSimilarbytriptypetransport from '../graphqlQueriesMS/__generated__/QSimilarbytriptypetransport }'

import { Similarbytriptypetransport  as gqlSimilarbytriptypetransport } from '*.graphqls


const SimilarbytriptypetransportTransform = (raw: gqlSimilarbytriptypetransport): objSimilarbytriptypetransport => {
    return {
        transportIds: `${raw.transportIds}`,triptype: `${raw.triptype}`,atAgency: `${raw.atAgency}`,timeCreated: `${raw.timeCreated}`
    }
}
        