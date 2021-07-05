import { QAgencyuser as objAgencyuser from '../graphqlQueriesMS/__generated__/QAgencyuser }'

import { Agencyuser  as gqlAgencyuser } from '*.graphqls


const AgencyuserTransform = (raw: gqlAgencyuser): objAgencyuser => {
    return {
        agencyId: `${raw.agencyId}`,userId: `${raw.userId}`,timeCreated: `${raw.timeCreated}`
    }
}
        