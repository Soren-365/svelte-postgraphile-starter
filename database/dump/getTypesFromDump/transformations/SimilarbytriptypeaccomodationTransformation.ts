import { QSimilarbytriptypeaccomodation as objSimilarbytriptypeaccomodation from '../graphqlQueriesMS/__generated__/QSimilarbytriptypeaccomodation }'

import { Similarbytriptypeaccomodation  as gqlSimilarbytriptypeaccomodation } from '*.graphqls


const SimilarbytriptypeaccomodationTransform = (raw: gqlSimilarbytriptypeaccomodation): objSimilarbytriptypeaccomodation => {
    return {
        accomodationIds: `${raw.accomodationIds}`,triptype: `${raw.triptype}`,atAgency: `${raw.atAgency}`,timeCreated: `${raw.timeCreated}`,triptype: `${raw.triptype}`
    }
}
        