import { QAgencytourist as objAgencytourist from '../graphqlQueriesMS/__generated__/QAgencytourist }'

import { Agencytourist  as gqlAgencytourist } from '*.graphqls


const AgencytouristTransform = (raw: gqlAgencytourist): objAgencytourist => {
    return {
        agencyId: `${raw.agencyId}`,touristId: `${raw.touristId}`,timeCreated: `${raw.timeCreated}`
    }
}
        