import { QSimilarbytriptypedestination as objSimilarbytriptypedestination from '../graphqlQueriesMS/__generated__/QSimilarbytriptypedestination }'

import { Similarbytriptypedestination  as gqlSimilarbytriptypedestination } from '*.graphqls


const SimilarbytriptypedestinationTransform = (raw: gqlSimilarbytriptypedestination): objSimilarbytriptypedestination => {
    return {
        destinationIds: `${raw.destinationIds}`,triptype: `${raw.triptype}`,atAgency: `${raw.atAgency}`,timeCreated: `${raw.timeCreated}`
    }
}
        