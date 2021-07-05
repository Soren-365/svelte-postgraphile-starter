import { QAgencybid as objAgencybid from '../graphqlQueriesMS/__generated__/QAgencybid }'

import { Agencybid  as gqlAgencybid } from '*.graphqls


const AgencybidTransform = (raw: gqlAgencybid): objAgencybid => {
    return {
        agencyBidId: `${raw.agencyBidId}`,agencyId: `${raw.agencyId}`,touristResourceIdPool: `${raw.touristResourceIdPool}`
    }
}
        