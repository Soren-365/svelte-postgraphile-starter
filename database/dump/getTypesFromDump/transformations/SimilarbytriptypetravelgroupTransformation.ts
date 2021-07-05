import { QSimilarbytriptypetravelgroup as objSimilarbytriptypetravelgroup from '../graphqlQueriesMS/__generated__/QSimilarbytriptypetravelgroup }'

import { Similarbytriptypetravelgroup  as gqlSimilarbytriptypetravelgroup } from '*.graphqls


const SimilarbytriptypetravelgroupTransform = (raw: gqlSimilarbytriptypetravelgroup): objSimilarbytriptypetravelgroup => {
    return {
        travelGroupIds: `${raw.travelGroupIds}`,triptype: `${raw.triptype}`,atAgency: `${raw.atAgency}`,timeCreated: `${raw.timeCreated}`
    }
}
        