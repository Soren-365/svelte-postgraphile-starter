import { QAuctioninfo as objAuctioninfo from '../graphqlQueriesMS/__generated__/QAuctioninfo }'

import { Auctioninfo  as gqlAuctioninfo } from '*.graphqls


const AuctioninfoTransform = (raw: gqlAuctioninfo): objAuctioninfo => {
    return {
        auctionInfoId: `${raw.auctionInfoId}`,publishedById: `${raw.publishedById}`,createdById: `${raw.createdById}`,advertisedPrice: `${raw.advertisedPrice}`,currentHighBid: `${raw.currentHighBid}`,bidId: `${raw.bidId}`,acceptsOffers: `${raw.acceptsOffers}`,auctionExpiry: `${raw.auctionExpiry}`,isAuction: `${raw.isAuction}`,isActive: `${raw.isActive}`,atResourceType: `${raw.atResourceType}`,atId: `${raw.atId}`,timeCreated: `${raw.timeCreated}`
    }
}
        