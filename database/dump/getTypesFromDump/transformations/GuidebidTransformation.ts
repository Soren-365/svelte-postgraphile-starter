import { QGuidebid as objGuidebid from '../graphqlQueriesMS/__generated__/QGuidebid }'

import { Guidebid  as gqlGuidebid } from '*.graphqls


const GuidebidTransform = (raw: gqlGuidebid): objGuidebid => {
    return {
        guideBidId: `${raw.guideBidId}`,tripOfferIdPool: `${raw.tripOfferIdPool}`
    }
}
        