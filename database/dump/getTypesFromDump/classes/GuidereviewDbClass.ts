import { guidereviewDbType as GuidereviewDbType } from '../../dbTypes/__generatedFromBackend__/types/guidereviewDbType'

export class GuidereviewDbClass implements GuidereviewDbType {
id?: number;
publisherId: number;
createdById: number;
isActive?: boolean;
halfStars?: number;
reviewText?: string;
guideIdTarget: number;
startDateTripEvent?: string;
byRomanian?: boolean;
 nodeId?: string;

  constructor(id?: number,publisherId: number,createdById: number,isActive?: boolean,halfStars?: number,reviewText?: string,guideIdTarget: number,startDateTripEvent?: string,byRomanian?: boolean, nodeId?: string,) {
    this.id = id
    this.publisherId = publisherId
    this.createdById = createdById
    this.isActive = isActive
    this.halfStars = halfStars
    this.reviewText = reviewText
    this.guideIdTarget = guideIdTarget
    this.startDateTripEvent = startDateTripEvent
    this.byRomanian = byRomanian
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}