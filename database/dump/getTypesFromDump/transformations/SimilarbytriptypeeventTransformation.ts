import { QSimilarbytriptypeevent as objSimilarbytriptypeevent from '../graphqlQueriesMS/__generated__/QSimilarbytriptypeevent }'

import { Similarbytriptypeevent  as gqlSimilarbytriptypeevent } from '*.graphqls


const SimilarbytriptypeeventTransform = (raw: gqlSimilarbytriptypeevent): objSimilarbytriptypeevent => {
    return {
        eventIds: `${raw.eventIds}`,triptype: `${raw.triptype}`,atAgency: `${raw.atAgency}`,timeCreated: `${raw.timeCreated}`
    }
}
        