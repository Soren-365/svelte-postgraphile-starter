import { QAssocdestination as objAssocdestination from '../graphqlQueriesMS/__generated__/QAssocdestination }'

import { Assocdestination  as gqlAssocdestination } from '*.graphqls


const AssocdestinationTransform = (raw: gqlAssocdestination): objAssocdestination => {
    return {
        assocDestinationId: `${raw.assocDestinationId}`,destinationId: `${raw.destinationId}`,atAgency: `${raw.atAgency}`,timeCreated: `${raw.timeCreated}`
    }
}
        