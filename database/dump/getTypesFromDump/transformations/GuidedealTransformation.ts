import { QGuidedeal as objGuidedeal from '../graphqlQueriesMS/__generated__/QGuidedeal }'

import { Guidedeal  as gqlGuidedeal } from '*.graphqls


const GuidedealTransform = (raw: gqlGuidedeal): objGuidedeal => {
    return {
        guideDealId: `${raw.guideDealId}`,tripsOfferResourceIdPool: `${raw.tripsOfferResourceIdPool}`,agencies_romanianIdPool: `${raw.agencies_romanianIdPool}`,agencies_abroadIdPool: `${raw.agencies_abroadIdPool}`,touristResourceIdPool: `${raw.touristResourceIdPool}`
    }
}
        