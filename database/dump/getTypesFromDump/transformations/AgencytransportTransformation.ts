import { QAgencytransport as objAgencytransport from '../graphqlQueriesMS/__generated__/QAgencytransport }'

import { Agencytransport  as gqlAgencytransport } from '*.graphqls


const AgencytransportTransform = (raw: gqlAgencytransport): objAgencytransport => {
    return {
        agencyId: `${raw.agencyId}`,transportId: `${raw.transportId}`,timeCreated: `${raw.timeCreated}`
    }
}
        