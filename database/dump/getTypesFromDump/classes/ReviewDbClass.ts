import { reviewDbType as ReviewDbType } from '../../dbTypes/__generatedFromBackend__/types/reviewDbType'

export class ReviewDbClass implements ReviewDbType {
id?: number;
publisherId: number;
createdById: number;
halfStars?: number;
reviewText?: string;
resourceType: string;
resourceId: number;
publisherTarget: number;
startDateTripEvent?: string;
byRomanian?: boolean;
isActive?: boolean;
 nodeId?: string;

  constructor(id?: number,publisherId: number,createdById: number,halfStars?: number,reviewText?: string,resourceType: string,resourceId: number,publisherTarget: number,startDateTripEvent?: string,byRomanian?: boolean,isActive?: boolean, nodeId?: string,) {
    this.id = id
    this.publisherId = publisherId
    this.createdById = createdById
    this.halfStars = halfStars
    this.reviewText = reviewText
    this.resourceType = resourceType
    this.resourceId = resourceId
    this.publisherTarget = publisherTarget
    this.startDateTripEvent = startDateTripEvent
    this.byRomanian = byRomanian
    this.isActive = isActive
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}