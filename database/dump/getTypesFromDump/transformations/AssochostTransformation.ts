import { QAssochost as objAssochost from '../graphqlQueriesMS/__generated__/QAssochost }'

import { Assochost  as gqlAssochost } from '*.graphqls


const AssochostTransform = (raw: gqlAssochost): objAssochost => {
    return {
        assocHostId: `${raw.assocHostId}`,hostId: `${raw.hostId}`,atAgency: `${raw.atAgency}`,timeCreated: `${raw.timeCreated}`
    }
}
        