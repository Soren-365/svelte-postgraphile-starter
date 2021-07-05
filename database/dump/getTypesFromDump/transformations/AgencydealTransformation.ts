import { QAgencydeal as objAgencydeal from '../graphqlQueriesMS/__generated__/QAgencydeal }'

import { Agencydeal  as gqlAgencydeal } from '*.graphqls


const AgencydealTransform = (raw: gqlAgencydeal): objAgencydeal => {
    return {
        agencyDealId: `${raw.agencyDealId}`,tripOfferResourceIdPool: `${raw.tripOfferResourceIdPool}`,guideResourceIdPool: `${raw.guideResourceIdPool}`,touristResouceIdPool: `${raw.touristResouceIdPool}`,eventResourceIdPool: `${raw.eventResourceIdPool}`,transportationResourceIdPool: `${raw.transportationResourceIdPool}`,accomodationResourceIdPool: `${raw.accomodationResourceIdPool}`,hostResourceIdPool: `${raw.hostResourceIdPool}`
    }
}
        