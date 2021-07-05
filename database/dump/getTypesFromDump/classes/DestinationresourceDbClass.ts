import { destinationresourceDbType as DestinationresourceDbType } from '../../dbTypes/__generatedFromBackend__/types/destinationresourceDbType'

export class DestinationresourceDbClass implements DestinationresourceDbType {
id?: number;
destinationName?: string;
publishedById: number;
createdById: number;
area?: string;
judet?: string;
tripTypeName?: string;
isActive?: boolean;
priceInfoId?: number;
activeAtPeriodsId?: number;
presentationId?: number;
atAgency: number;
geoCodingId?: number;
isPublic: boolean;
lastModified?: string;
lastModifiedBy?: number;
 nodeId?: string;

  constructor(id?: number,destinationName?: string,publishedById: number,createdById: number,area?: string,judet?: string,tripTypeName?: string,isActive?: boolean,priceInfoId?: number,activeAtPeriodsId?: number,presentationId?: number,atAgency: number,geoCodingId?: number,isPublic: boolean,lastModified?: string,lastModifiedBy?: number, nodeId?: string,) {
    this.id = id
    this.destinationName = destinationName
    this.publishedById = publishedById
    this.createdById = createdById
    this.area = area
    this.judet = judet
    this.tripTypeName = tripTypeName
    this.isActive = isActive
    this.priceInfoId = priceInfoId
    this.activeAtPeriodsId = activeAtPeriodsId
    this.presentationId = presentationId
    this.atAgency = atAgency
    this.geoCodingId = geoCodingId
    this.isPublic = isPublic
    this.lastModified = lastModified
    this.lastModifiedBy = lastModifiedBy
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}