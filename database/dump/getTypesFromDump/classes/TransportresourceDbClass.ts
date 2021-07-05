import { transportresourceDbType as TransportresourceDbType } from '../../dbTypes/__generatedFromBackend__/types/transportresourceDbType'

export class TransportresourceDbClass implements TransportresourceDbType {
id?: number;
transportName?: string;
contactId: number;
publisherId: number;
createdById: number;
locatedIn: string;
addressInfoId: number;
atAgency?: number;
atGuide?: number;
ownedByAt: boolean;
presentationId?: number;
isBus: boolean;
numberOfPlaces: number;
bookingCalendarId: number;
isActive?: boolean;
isPublic: boolean;
lastModified?: string;
 nodeId?: string;

  constructor(id?: number,transportName?: string,contactId: number,publisherId: number,createdById: number,locatedIn: string,addressInfoId: number,atAgency?: number,atGuide?: number,ownedByAt: boolean,presentationId?: number,isBus: boolean,numberOfPlaces: number,bookingCalendarId: number,isActive?: boolean,isPublic: boolean,lastModified?: string, nodeId?: string,) {
    this.id = id
    this.transportName = transportName
    this.contactId = contactId
    this.publisherId = publisherId
    this.createdById = createdById
    this.locatedIn = locatedIn
    this.addressInfoId = addressInfoId
    this.atAgency = atAgency
    this.atGuide = atGuide
    this.ownedByAt = ownedByAt
    this.presentationId = presentationId
    this.isBus = isBus
    this.numberOfPlaces = numberOfPlaces
    this.bookingCalendarId = bookingCalendarId
    this.isActive = isActive
    this.isPublic = isPublic
    this.lastModified = lastModified
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}