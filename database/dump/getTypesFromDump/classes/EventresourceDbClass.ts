import { eventresourceDbType as EventresourceDbType } from '../../dbTypes/__generatedFromBackend__/types/eventresourceDbType'

export class EventresourceDbClass implements EventresourceDbType {
id?: number;
eventName?: string;
agencyName?: string;
contactId: number;
publisherId: number;
createdById: number;
locatedIn?: string;
locationAddressId: number;
tripTypeName?: string;
activeAtPeriodsId: number;
ownedByAt: boolean;
atAgency?: number;
atGuide?: number;
presentationId: number;
isActive?: boolean;
isPublic: boolean;
lastModified?: string;
 nodeId?: string;

  constructor(id?: number,eventName?: string,agencyName?: string,contactId: number,publisherId: number,createdById: number,locatedIn?: string,locationAddressId: number,tripTypeName?: string,activeAtPeriodsId: number,ownedByAt: boolean,atAgency?: number,atGuide?: number,presentationId: number,isActive?: boolean,isPublic: boolean,lastModified?: string, nodeId?: string,) {
    this.id = id
    this.eventName = eventName
    this.agencyName = agencyName
    this.contactId = contactId
    this.publisherId = publisherId
    this.createdById = createdById
    this.locatedIn = locatedIn
    this.locationAddressId = locationAddressId
    this.tripTypeName = tripTypeName
    this.activeAtPeriodsId = activeAtPeriodsId
    this.ownedByAt = ownedByAt
    this.atAgency = atAgency
    this.atGuide = atGuide
    this.presentationId = presentationId
    this.isActive = isActive
    this.isPublic = isPublic
    this.lastModified = lastModified
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}