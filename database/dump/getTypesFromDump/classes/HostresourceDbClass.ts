import { hostresourceDbType as HostresourceDbType } from '../../dbTypes/__generatedFromBackend__/types/hostresourceDbType'

export class HostresourceDbClass implements HostresourceDbType {
id?: number;
hostResourceName?: string;
contactId: number;
publisherId: number;
createdById: number;
withAccomodation: boolean;
atAccomodation?: number;
atAgency?: number;
atGuide?: number;
tripTypeName?: string;
locatedIn?: string;
addressInfoId: number;
ownedByAt: boolean;
presentationId: number;
bookingCalendarId: number;
isRomanian?: boolean;
isActive?: boolean;
isPublic: boolean;
lastModified?: string;
 nodeId?: string;

  constructor(id?: number,hostResourceName?: string,contactId: number,publisherId: number,createdById: number,withAccomodation: boolean,atAccomodation?: number,atAgency?: number,atGuide?: number,tripTypeName?: string,locatedIn?: string,addressInfoId: number,ownedByAt: boolean,presentationId: number,bookingCalendarId: number,isRomanian?: boolean,isActive?: boolean,isPublic: boolean,lastModified?: string, nodeId?: string,) {
    this.id = id
    this.hostResourceName = hostResourceName
    this.contactId = contactId
    this.publisherId = publisherId
    this.createdById = createdById
    this.withAccomodation = withAccomodation
    this.atAccomodation = atAccomodation
    this.atAgency = atAgency
    this.atGuide = atGuide
    this.tripTypeName = tripTypeName
    this.locatedIn = locatedIn
    this.addressInfoId = addressInfoId
    this.ownedByAt = ownedByAt
    this.presentationId = presentationId
    this.bookingCalendarId = bookingCalendarId
    this.isRomanian = isRomanian
    this.isActive = isActive
    this.isPublic = isPublic
    this.lastModified = lastModified
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}