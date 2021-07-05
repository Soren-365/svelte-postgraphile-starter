import { touristresourceDbType as TouristresourceDbType } from '../../dbTypes/__generatedFromBackend__/types/touristresourceDbType'

export class TouristresourceDbClass implements TouristresourceDbType {
id?: number;
name?: string;
contactId: number;
publisherId: number;
createdById: number;
atTravelGroup?: number;
atAgency?: number;
atGuide?: number;
isSigned: boolean;
priceInfoId: number;
travellingCalendarId: number;
isRomanian?: boolean;
isActive?: boolean;
isPublic: boolean;
lastModified?: string;
 nodeId?: string;

  constructor(id?: number,name?: string,contactId: number,publisherId: number,createdById: number,atTravelGroup?: number,atAgency?: number,atGuide?: number,isSigned: boolean,priceInfoId: number,travellingCalendarId: number,isRomanian?: boolean,isActive?: boolean,isPublic: boolean,lastModified?: string, nodeId?: string,) {
    this.id = id
    this.name = name
    this.contactId = contactId
    this.publisherId = publisherId
    this.createdById = createdById
    this.atTravelGroup = atTravelGroup
    this.atAgency = atAgency
    this.atGuide = atGuide
    this.isSigned = isSigned
    this.priceInfoId = priceInfoId
    this.travellingCalendarId = travellingCalendarId
    this.isRomanian = isRomanian
    this.isActive = isActive
    this.isPublic = isPublic
    this.lastModified = lastModified
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}