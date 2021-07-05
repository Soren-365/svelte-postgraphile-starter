import { QAssoctransport as objAssoctransport from '../graphqlQueriesMS/__generated__/QAssoctransport }'

import { Assoctransport  as gqlAssoctransport } from '*.graphqls


const AssoctransportTransform = (raw: gqlAssoctransport): objAssoctransport => {
    return {
        assocTransportId: `${raw.assocTransportId}`,transportId: `${raw.transportId}`,atAgency: `${raw.atAgency}`
    }
}
        