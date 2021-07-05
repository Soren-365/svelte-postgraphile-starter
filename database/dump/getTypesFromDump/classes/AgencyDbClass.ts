import { agencyDbType as AgencyDbType } from '../../dbTypes/__generatedFromBackend__/types/agencyDbType'

export class AgencyDbClass implements AgencyDbType {
id?: number;
name: string;
contactId?: number;
activeInsurance: boolean;
insuranceUrl?: string;
insuranceExpery?: string;
publisherId?: number;
createdById: number;
isActive?: boolean;
isPublic?: boolean;
agencyBidId?: number;
agencyFavoriteId?: number;
agencyOfferId?: number;
agencyDealId?: number;
trustedPartnerIdPool?: number[];
extendedNetworkIdPool?: number[];
guideReviewInIdPool?: number[];
agencyReviewInIdPool?: number[];
touristReviewInIdPool?: number[];
guideReviewOutIdPool?: number[];
agencyReviewOutIdPool?: number[];
touristReviewOutIdPool?: number[];
agencyMediaLibraryId?: number;
isRomanian: boolean;
bookingCalendarId?: number;
specializedAgency?: string;
lastModified?: string;
 nodeId?: string;

  constructor(id?: number,name: string,contactId?: number,activeInsurance: boolean,insuranceUrl?: string,insuranceExpery?: string,publisherId?: number,createdById: number,isActive?: boolean,isPublic?: boolean,agencyBidId?: number,agencyFavoriteId?: number,agencyOfferId?: number,agencyDealId?: number,trustedPartnerIdPool?: number[],extendedNetworkIdPool?: number[],guideReviewInIdPool?: number[],agencyReviewInIdPool?: number[],touristReviewInIdPool?: number[],guideReviewOutIdPool?: number[],agencyReviewOutIdPool?: number[],touristReviewOutIdPool?: number[],agencyMediaLibraryId?: number,isRomanian: boolean,bookingCalendarId?: number,specializedAgency?: string,lastModified?: string, nodeId?: string,) {
    this.id = id
    this.name = name
    this.contactId = contactId
    this.activeInsurance = activeInsurance
    this.insuranceUrl = insuranceUrl
    this.insuranceExpery = insuranceExpery
    this.publisherId = publisherId
    this.createdById = createdById
    this.isActive = isActive
    this.isPublic = isPublic
    this.agencyBidId = agencyBidId
    this.agencyFavoriteId = agencyFavoriteId
    this.agencyOfferId = agencyOfferId
    this.agencyDealId = agencyDealId
    this.trustedPartnerIdPool = trustedPartnerIdPool
    this.extendedNetworkIdPool = extendedNetworkIdPool
    this.guideReviewInIdPool = guideReviewInIdPool
    this.agencyReviewInIdPool = agencyReviewInIdPool
    this.touristReviewInIdPool = touristReviewInIdPool
    this.guideReviewOutIdPool = guideReviewOutIdPool
    this.agencyReviewOutIdPool = agencyReviewOutIdPool
    this.touristReviewOutIdPool = touristReviewOutIdPool
    this.agencyMediaLibraryId = agencyMediaLibraryId
    this.isRomanian = isRomanian
    this.bookingCalendarId = bookingCalendarId
    this.specializedAgency = specializedAgency
    this.lastModified = lastModified
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}