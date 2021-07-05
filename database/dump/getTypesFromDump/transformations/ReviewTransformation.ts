import { QReview as objReview from '../graphqlQueriesMS/__generated__/QReview }'

import { Review  as gqlReview } from '*.graphqls


const ReviewTransform = (raw: gqlReview): objReview => {
    return {
        ReviewId: `${raw.ReviewId}`,publisherId: `${raw.publisherId}`,createdById: `${raw.createdById}`,halfStars: `${raw.halfStars}`,reviewText: `${raw.reviewText}`,resourceType: `${raw.resourceType}`,resourceId: `${raw.resourceId}`,publisherTarget: `${raw.publisherTarget}`,startDateTripEvent: `${raw.startDateTripEvent}`,byRomanian: `${raw.byRomanian}`,isActive: `${raw.isActive}`,timeCreated: `${raw.timeCreated}`
    }
}
        