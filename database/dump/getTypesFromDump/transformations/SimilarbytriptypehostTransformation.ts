import { QSimilarbytriptypehost as objSimilarbytriptypehost from '../graphqlQueriesMS/__generated__/QSimilarbytriptypehost }'

import { Similarbytriptypehost  as gqlSimilarbytriptypehost } from '*.graphqls


const SimilarbytriptypehostTransform = (raw: gqlSimilarbytriptypehost): objSimilarbytriptypehost => {
    return {
        hostIds: `${raw.hostIds}`,triptype: `${raw.triptype}`,atAgency: `${raw.atAgency}`,timeCreated: `${raw.timeCreated}`
    }
}
        