import { auctioninfoDbType as AuctioninfoDbType } from '../../dbTypes/__generatedFromBackend__/types/auctioninfoDbType'

export class AuctioninfoDbClass implements AuctioninfoDbType {
id?: number;
publishedById: number;
createdById: number;
advertisedPrice: number;
currentHighBid?: number;
bidId?: number;
acceptsOffers: boolean;
auctionExpiry?: string;
isAuction: boolean;
isActive?: boolean;
atResourceType: string;
belongsToId: number;
 nodeId?: string;

  constructor(id?: number,publishedById: number,createdById: number,advertisedPrice: number,currentHighBid?: number,bidId?: number,acceptsOffers: boolean,auctionExpiry?: string,isAuction: boolean,isActive?: boolean,atResourceType: string,belongsToId: number, nodeId?: string,) {
    this.id = id
    this.publishedById = publishedById
    this.createdById = createdById
    this.advertisedPrice = advertisedPrice
    this.currentHighBid = currentHighBid
    this.bidId = bidId
    this.acceptsOffers = acceptsOffers
    this.auctionExpiry = auctionExpiry
    this.isAuction = isAuction
    this.isActive = isActive
    this.atResourceType = atResourceType
    this.belongsToId = belongsToId
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}