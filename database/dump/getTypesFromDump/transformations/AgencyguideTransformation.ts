import { QAgencyguide as objAgencyguide from '../graphqlQueriesMS/__generated__/QAgencyguide }'

import { Agencyguide  as gqlAgencyguide } from '*.graphqls


const AgencyguideTransform = (raw: gqlAgencyguide): objAgencyguide => {
    return {
        agencyId: `${raw.agencyId}`,guideId: `${raw.guideId}`,timeCreated: `${raw.timeCreated}`
    }
}
        