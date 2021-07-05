import { touristDbType as TouristDbType } from '../../dbTypes/__generatedFromBackend__/types/touristDbType'

export class TouristDbClass implements TouristDbType {
id?: number;
touristFirstName?: string;
touristLastName?: string;
contactId: number;
publisherId: number;
createdById: number;
nativeLanguage?: string;
alternativeLanguage?: string;
touristOfferId: number;
touristFavoriteId: number;
touristBidId: number;
touristDealId: number;
guideReviewInIdPool?: number[];
agencyReviewInIdPool?: number[];
guideReviewOutIdPool?: number[];
agencyReviewOutIdPool?: number[];
timeCreated?: string;
atTravelGroup?: number;
isActive?: boolean;
 nodeId?: string;

  constructor(id?: number,touristFirstName?: string,touristLastName?: string,contactId: number,publisherId: number,createdById: number,nativeLanguage?: string,alternativeLanguage?: string,touristOfferId: number,touristFavoriteId: number,touristBidId: number,touristDealId: number,guideReviewInIdPool?: number[],agencyReviewInIdPool?: number[],guideReviewOutIdPool?: number[],agencyReviewOutIdPool?: number[],timeCreated?: string,atTravelGroup?: number,isActive?: boolean, nodeId?: string,) {
    this.id = id
    this.touristFirstName = touristFirstName
    this.touristLastName = touristLastName
    this.contactId = contactId
    this.publisherId = publisherId
    this.createdById = createdById
    this.nativeLanguage = nativeLanguage
    this.alternativeLanguage = alternativeLanguage
    this.touristOfferId = touristOfferId
    this.touristFavoriteId = touristFavoriteId
    this.touristBidId = touristBidId
    this.touristDealId = touristDealId
    this.guideReviewInIdPool = guideReviewInIdPool
    this.agencyReviewInIdPool = agencyReviewInIdPool
    this.guideReviewOutIdPool = guideReviewOutIdPool
    this.agencyReviewOutIdPool = agencyReviewOutIdPool
    this.timeCreated = timeCreated
    this.atTravelGroup = atTravelGroup
    this.isActive = isActive
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}