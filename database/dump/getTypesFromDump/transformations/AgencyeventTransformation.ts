import { QAgencyevent as objAgencyevent from '../graphqlQueriesMS/__generated__/QAgencyevent }'

import { Agencyevent  as gqlAgencyevent } from '*.graphqls


const AgencyeventTransform = (raw: gqlAgencyevent): objAgencyevent => {
    return {
        agencyId: `${raw.agencyId}`,eventId: `${raw.eventId}`,timeCreated: `${raw.timeCreated}`
    }
}
        