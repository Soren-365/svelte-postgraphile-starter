import { accomodationresourceDbType as AccomodationresourceDbType } from '../../dbTypes/__generatedFromBackend__/types/accomodationresourceDbType'

export class AccomodationresourceDbClass implements AccomodationresourceDbType {
id?: number;
accomodationName?: string;
contactId: number;
addressId: number;
locatedIn?: string;
locationCalendarId: number;
tripTypeName?: string;
publisherId: number;
createdById: number;
isActive?: boolean;
ownedByAt?: boolean;
presentationId: number;
atAgency?: number;
atGuide?: number;
isPublic?: boolean;
lastModified?: string;
 nodeId?: string;

  constructor(id?: number,accomodationName?: string,contactId: number,addressId: number,locatedIn?: string,locationCalendarId: number,tripTypeName?: string,publisherId: number,createdById: number,isActive?: boolean,ownedByAt?: boolean,presentationId: number,atAgency?: number,atGuide?: number,isPublic?: boolean,lastModified?: string, nodeId?: string,) {
    this.id = id
    this.accomodationName = accomodationName
    this.contactId = contactId
    this.addressId = addressId
    this.locatedIn = locatedIn
    this.locationCalendarId = locationCalendarId
    this.tripTypeName = tripTypeName
    this.publisherId = publisherId
    this.createdById = createdById
    this.isActive = isActive
    this.ownedByAt = ownedByAt
    this.presentationId = presentationId
    this.atAgency = atAgency
    this.atGuide = atGuide
    this.isPublic = isPublic
    this.lastModified = lastModified
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}