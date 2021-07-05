import { QTouristreview as objTouristreview from '../graphqlQueriesMS/__generated__/QTouristreview }'

import { Touristreview  as gqlTouristreview } from '*.graphqls


const TouristreviewTransform = (raw: gqlTouristreview): objTouristreview => {
    return {
        touristReviewId: `${raw.touristReviewId}`,publisherId: `${raw.publisherId}`,createdById: `${raw.createdById}`,isActive: `${raw.isActive}`,halfStars: `${raw.halfStars}`,reviewText: `${raw.reviewText}`,touristIdTarget: `${raw.touristIdTarget}`,startDateTripEvent: `${raw.startDateTripEvent}`,byRomanian: `${raw.byRomanian}`,timeCreated: `${raw.timeCreated}`
    }
}
        