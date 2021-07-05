import { guideDbType as GuideDbType } from '../../dbTypes/__generatedFromBackend__/types/guideDbType'

export class GuideDbClass implements GuideDbType {
id?: number;
name?: string;
contactId: number;
hasGuideLicence: boolean;
guideLicenceUrl?: string;
publisherId: number;
createdById: number;
guideFirstName?: string;
guideLastName?: string;
hasOwnCompany: boolean;
atAgency?: number;
languageLevelId: number;
areas: string[];
tripTypeName?: string;
guideOfferId: number;
guideBidId: number;
guideFavoriteId: number;
guideDealId: number;
agencyReviewInIdPool?: number[];
touristReviewInIdPool?: number[];
agencyReviewOutIdPool?: number[];
touristReviewOutIdPool?: number[];
bookingCalendarId: number;
hostIdPool?: number[];
eventIdPool?: number[];
accomodationIdPool?: number[];
transportIdPool?: number[];
lastModified?: string;
timeCreated?: string;
isActive?: boolean;
 nodeId?: string;

  constructor(id?: number,name?: string,contactId: number,hasGuideLicence: boolean,guideLicenceUrl?: string,publisherId: number,createdById: number,guideFirstName?: string,guideLastName?: string,hasOwnCompany: boolean,atAgency?: number,languageLevelId: number,areas: string[],tripTypeName?: string,guideOfferId: number,guideBidId: number,guideFavoriteId: number,guideDealId: number,agencyReviewInIdPool?: number[],touristReviewInIdPool?: number[],agencyReviewOutIdPool?: number[],touristReviewOutIdPool?: number[],bookingCalendarId: number,hostIdPool?: number[],eventIdPool?: number[],accomodationIdPool?: number[],transportIdPool?: number[],lastModified?: string,timeCreated?: string,isActive?: boolean, nodeId?: string,) {
    this.id = id
    this.name = name
    this.contactId = contactId
    this.hasGuideLicence = hasGuideLicence
    this.guideLicenceUrl = guideLicenceUrl
    this.publisherId = publisherId
    this.createdById = createdById
    this.guideFirstName = guideFirstName
    this.guideLastName = guideLastName
    this.hasOwnCompany = hasOwnCompany
    this.atAgency = atAgency
    this.languageLevelId = languageLevelId
    this.areas = areas
    this.tripTypeName = tripTypeName
    this.guideOfferId = guideOfferId
    this.guideBidId = guideBidId
    this.guideFavoriteId = guideFavoriteId
    this.guideDealId = guideDealId
    this.agencyReviewInIdPool = agencyReviewInIdPool
    this.touristReviewInIdPool = touristReviewInIdPool
    this.agencyReviewOutIdPool = agencyReviewOutIdPool
    this.touristReviewOutIdPool = touristReviewOutIdPool
    this.bookingCalendarId = bookingCalendarId
    this.hostIdPool = hostIdPool
    this.eventIdPool = eventIdPool
    this.accomodationIdPool = accomodationIdPool
    this.transportIdPool = transportIdPool
    this.lastModified = lastModified
    this.timeCreated = timeCreated
    this.isActive = isActive
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}