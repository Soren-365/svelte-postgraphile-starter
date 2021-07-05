import { tripofferresourceDbType as TripofferresourceDbType } from '../../dbTypes/__generatedFromBackend__/types/tripofferresourceDbType'

export class TripofferresourceDbClass implements TripofferresourceDbType {
id?: number;
tripOfferName?: string;
publisherId: number;
createdById: number;
availableAtCalendarId: number;
guideResponsibleId: number;
guideSecondaryId?: number;
atAgency?: number;
priceInfoId: number;
destinationId: number[];
isSigned: boolean;
atGuide?: number;
isActive?: boolean;
isPublic: boolean;
lastModified?: string;
 nodeId?: string;

  constructor(id?: number,tripOfferName?: string,publisherId: number,createdById: number,availableAtCalendarId: number,guideResponsibleId: number,guideSecondaryId?: number,atAgency?: number,priceInfoId: number,destinationId: number[],isSigned: boolean,atGuide?: number,isActive?: boolean,isPublic: boolean,lastModified?: string, nodeId?: string,) {
    this.id = id
    this.tripOfferName = tripOfferName
    this.publisherId = publisherId
    this.createdById = createdById
    this.availableAtCalendarId = availableAtCalendarId
    this.guideResponsibleId = guideResponsibleId
    this.guideSecondaryId = guideSecondaryId
    this.atAgency = atAgency
    this.priceInfoId = priceInfoId
    this.destinationId = destinationId
    this.isSigned = isSigned
    this.atGuide = atGuide
    this.isActive = isActive
    this.isPublic = isPublic
    this.lastModified = lastModified
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}