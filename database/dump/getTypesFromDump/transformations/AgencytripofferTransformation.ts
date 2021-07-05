import { QAgencytripoffer as objAgencytripoffer from '../graphqlQueriesMS/__generated__/QAgencytripoffer }'

import { Agencytripoffer  as gqlAgencytripoffer } from '*.graphqls


const AgencytripofferTransform = (raw: gqlAgencytripoffer): objAgencytripoffer => {
    return {
        agencyId: `${raw.agencyId}`,tripOfferId: `${raw.tripOfferId}`,timeCreated: `${raw.timeCreated}`
    }
}
        