import { QBid as objBid from '../graphqlQueriesMS/__generated__/QBid }'

import { Bid  as gqlBid } from '*.graphqls


const BidTransform = (raw: gqlBid): objBid => {
    return {
        bidId: `${raw.bidId}`,publisherId: `${raw.publisherId}`,createdById: `${raw.createdById}`,bidAmount: `${raw.bidAmount}`,isActive: `${raw.isActive}`,timeCreated: `${raw.timeCreated}`
    }
}
        