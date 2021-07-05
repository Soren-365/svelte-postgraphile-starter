import { touristbidDbType as TouristbidDbType } from '../../dbTypes/__generatedFromBackend__/types/touristbidDbType'

export class TouristbidDbClass implements TouristbidDbType {
id?: number;
tripOfferResourceIdPool?: number[];
eventResourceIdPool?: number[];
transportationResourceIdPool?: number[];
accomodationResourceIdPool?: number[];
 nodeId?: string;

  constructor(id?: number,tripOfferResourceIdPool?: number[],eventResourceIdPool?: number[],transportationResourceIdPool?: number[],accomodationResourceIdPool?: number[], nodeId?: string,) {
    this.id = id
    this.tripOfferResourceIdPool = tripOfferResourceIdPool
    this.eventResourceIdPool = eventResourceIdPool
    this.transportationResourceIdPool = transportationResourceIdPool
    this.accomodationResourceIdPool = accomodationResourceIdPool
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}