import { priceinfoDbType as PriceinfoDbType } from '../../dbTypes/__generatedFromBackend__/types/priceinfoDbType'

export class PriceinfoDbClass implements PriceinfoDbType {
id?: number;
publisherId: number;
createdById: number;
advertisedPrice: number;
currentHighBId?: number;
bidId?: number;
acceptsOffers: boolean;
auctionExpiry?: string;
isAuction: boolean;
isActive?: boolean;
atResourceType: string;
belongsToId: number;
lastModified?: string;
 nodeId?: string;

  constructor(id?: number,publisherId: number,createdById: number,advertisedPrice: number,currentHighBId?: number,bidId?: number,acceptsOffers: boolean,auctionExpiry?: string,isAuction: boolean,isActive?: boolean,atResourceType: string,belongsToId: number,lastModified?: string, nodeId?: string,) {
    this.id = id
    this.publisherId = publisherId
    this.createdById = createdById
    this.advertisedPrice = advertisedPrice
    this.currentHighBId = currentHighBId
    this.bidId = bidId
    this.acceptsOffers = acceptsOffers
    this.auctionExpiry = auctionExpiry
    this.isAuction = isAuction
    this.isActive = isActive
    this.atResourceType = atResourceType
    this.belongsToId = belongsToId
    this.lastModified = lastModified
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}