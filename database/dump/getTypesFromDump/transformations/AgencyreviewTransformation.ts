import { QAgencyreview as objAgencyreview from '../graphqlQueriesMS/__generated__/QAgencyreview }'

import { Agencyreview  as gqlAgencyreview } from '*.graphqls


const AgencyreviewTransform = (raw: gqlAgencyreview): objAgencyreview => {
    return {
        agencyReviewId: `${raw.agencyReviewId}`,publisherId: `${raw.publisherId}`,createdById: `${raw.createdById}`,isActive: `${raw.isActive}`,halfStars: `${raw.halfStars}`,reviewText: `${raw.reviewText}`,agencyIdTarget: `${raw.agencyIdTarget}`,startDateTripEvent: `${raw.startDateTripEvent}`,byRomanian: `${raw.byRomanian}`,timeCreated: `${raw.timeCreated}`
    }
}
        