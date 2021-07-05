import { QAgencyoffer as objAgencyoffer from '../graphqlQueriesMS/__generated__/QAgencyoffer }'

import { Agencyoffer  as gqlAgencyoffer } from '*.graphqls


const AgencyofferTransform = (raw: gqlAgencyoffer): objAgencyoffer => {
    return {
        agencyOfferId: `${raw.agencyOfferId}`,tripsOfferesourceIdPool: `${raw.tripsOfferesourceIdPool}`,guideResourceIdPool: `${raw.guideResourceIdPool}`
    }
}
        