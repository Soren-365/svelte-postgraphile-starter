import { QPriceinfo as objPriceinfo from '../graphqlQueriesMS/__generated__/QPriceinfo }'

import { Priceinfo  as gqlPriceinfo } from '*.graphqls


const PriceinfoTransform = (raw: gqlPriceinfo): objPriceinfo => {
    return {
        priceInfoId: `${raw.priceInfoId}`,publisherId: `${raw.publisherId}`,createdById: `${raw.createdById}`,advertisedPrice: `${raw.advertisedPrice}`,currentHighBId: `${raw.currentHighBId}`,bidId: `${raw.bidId}`,acceptsOffers: `${raw.acceptsOffers}`,auctionExpiry: `${raw.auctionExpiry}`,isAuction: `${raw.isAuction}`,isActive: `${raw.isActive}`,atResourceType: `${raw.atResourceType}`,atId: `${raw.atId}`,lastModified: `${raw.lastModified}`,timeCreated: `${raw.timeCreated}`
    }
}
        