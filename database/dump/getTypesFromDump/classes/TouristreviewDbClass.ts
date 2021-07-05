import { touristreviewDbType as TouristreviewDbType } from '../../dbTypes/__generatedFromBackend__/types/touristreviewDbType'

export class TouristreviewDbClass implements TouristreviewDbType {
id?: number;
publisherId: number;
createdById: number;
isActive?: boolean;
halfStars: number;
reviewText: string;
touristIdTarget: number;
startDateTripEvent: string;
byRomanian?: boolean;
 nodeId?: string;

  constructor(id?: number,publisherId: number,createdById: number,isActive?: boolean,halfStars: number,reviewText: string,touristIdTarget: number,startDateTripEvent: string,byRomanian?: boolean, nodeId?: string,) {
    this.id = id
    this.publisherId = publisherId
    this.createdById = createdById
    this.isActive = isActive
    this.halfStars = halfStars
    this.reviewText = reviewText
    this.touristIdTarget = touristIdTarget
    this.startDateTripEvent = startDateTripEvent
    this.byRomanian = byRomanian
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}