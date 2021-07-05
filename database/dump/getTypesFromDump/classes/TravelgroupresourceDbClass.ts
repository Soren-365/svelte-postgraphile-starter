import { travelgroupresourceDbType as TravelgroupresourceDbType } from '../../dbTypes/__generatedFromBackend__/types/travelgroupresourceDbType'

export class TravelgroupresourceDbClass implements TravelgroupresourceDbType {
id?: number;
travelGroupName?: string;
contactId: number;
publisherId: number;
createdById: number;
numberOfAdults?: number;
numberOfChildren?: number;
customInfo?: string[];
bookingCalendarId: number;
atAgency?: number;
atGuide?: number;
language: string;
atTripOfferResource?: number;
atTouristResource: number;
isRomanian: boolean;
isActive?: boolean;
lastModified?: string;
 nodeId?: string;

  constructor(id?: number,travelGroupName?: string,contactId: number,publisherId: number,createdById: number,numberOfAdults?: number,numberOfChildren?: number,customInfo?: string[],bookingCalendarId: number,atAgency?: number,atGuide?: number,language: string,atTripOfferResource?: number,atTouristResource: number,isRomanian: boolean,isActive?: boolean,lastModified?: string, nodeId?: string,) {
    this.id = id
    this.travelGroupName = travelGroupName
    this.contactId = contactId
    this.publisherId = publisherId
    this.createdById = createdById
    this.numberOfAdults = numberOfAdults
    this.numberOfChildren = numberOfChildren
    this.customInfo = customInfo
    this.bookingCalendarId = bookingCalendarId
    this.atAgency = atAgency
    this.atGuide = atGuide
    this.language = language
    this.atTripOfferResource = atTripOfferResource
    this.atTouristResource = atTouristResource
    this.isRomanian = isRomanian
    this.isActive = isActive
    this.lastModified = lastModified
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}