import { QAgencyhost as objAgencyhost from '../graphqlQueriesMS/__generated__/QAgencyhost }'

import { Agencyhost  as gqlAgencyhost } from '*.graphqls


const AgencyhostTransform = (raw: gqlAgencyhost): objAgencyhost => {
    return {
        agencyId: `${raw.agencyId}`,hostId: `${raw.hostId}`,timeCreated: `${raw.timeCreated}`
    }
}
        