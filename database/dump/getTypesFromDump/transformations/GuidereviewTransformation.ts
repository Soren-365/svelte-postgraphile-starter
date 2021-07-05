import { QGuidereview as objGuidereview from '../graphqlQueriesMS/__generated__/QGuidereview }'

import { Guidereview  as gqlGuidereview } from '*.graphqls


const GuidereviewTransform = (raw: gqlGuidereview): objGuidereview => {
    return {
        guideReviewId: `${raw.guideReviewId}`,publisherId: `${raw.publisherId}`,createdById: `${raw.createdById}`,isActive: `${raw.isActive}`,halfStars: `${raw.halfStars}`,reviewText: `${raw.reviewText}`,guideIdTarget: `${raw.guideIdTarget}`,startDateTripEvent: `${raw.startDateTripEvent}`,byRomanian: `${raw.byRomanian}`,timeCreated: `${raw.timeCreated}`
    }
}
        