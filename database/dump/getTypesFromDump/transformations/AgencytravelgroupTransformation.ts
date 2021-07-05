import { QAgencytravelgroup as objAgencytravelgroup from '../graphqlQueriesMS/__generated__/QAgencytravelgroup }'

import { Agencytravelgroup  as gqlAgencytravelgroup } from '*.graphqls


const AgencytravelgroupTransform = (raw: gqlAgencytravelgroup): objAgencytravelgroup => {
    return {
        agencyId: `${raw.agencyId}`,travelGroupId: `${raw.travelGroupId}`,timeCreated: `${raw.timeCreated}`
    }
}
        