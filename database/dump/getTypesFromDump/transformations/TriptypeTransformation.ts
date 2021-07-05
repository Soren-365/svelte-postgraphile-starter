import { QTriptype as objTriptype from '../graphqlQueriesMS/__generated__/QTriptype }'

import { Triptype  as gqlTriptype } from '*.graphqls


const TriptypeTransform = (raw: gqlTriptype): objTriptype => {
    return {
        triptypeId: `${raw.triptypeId}`,triptype: `${raw.triptype}`,atAgency: `${raw.atAgency}`,lastModified: `${raw.lastModified}`,timeCreated: `${raw.timeCreated}`
    }
}
        