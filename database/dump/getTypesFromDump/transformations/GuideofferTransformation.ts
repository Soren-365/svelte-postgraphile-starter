import { QGuideoffer as objGuideoffer from '../graphqlQueriesMS/__generated__/QGuideoffer }'

import { Guideoffer  as gqlGuideoffer } from '*.graphqls


const GuideofferTransform = (raw: gqlGuideoffer): objGuideoffer => {
    return {
        guideOfferId: `${raw.guideOfferId}`,guideResourceIdPool: `${raw.guideResourceIdPool}`,transportResourceIdPool: `${raw.transportResourceIdPool}`,hostResourceIdPool: `${raw.hostResourceIdPool}`,accomodationResourceIdPool: `${raw.accomodationResourceIdPool}`
    }
}
        