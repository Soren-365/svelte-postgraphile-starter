import { QAssocevent as objAssocevent from '../graphqlQueriesMS/__generated__/QAssocevent }'

import { Assocevent  as gqlAssocevent } from '*.graphqls


const AssoceventTransform = (raw: gqlAssocevent): objAssocevent => {
    return {
        assocEventId: `${raw.assocEventId}`,eventId: `${raw.eventId}`,atAgency: `${raw.atAgency}`,timeCreated: `${raw.timeCreated}`
    }
}
        