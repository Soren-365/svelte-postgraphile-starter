import { agencydealDbType as AgencydealDbType } from '../../dbTypes/__generatedFromBackend__/types/agencydealDbType'

export class AgencydealDbClass implements AgencydealDbType {
id?: number;
tripOfferResourceIdPool?: number[];
guideResourceIdPool?: number[];
touristResouceIdPool?: number[];
eventResourceIdPool?: number[];
transportationResourceIdPool?: number[];
accomodationResourceIdPool?: number[];
 nodeId?: string;

  constructor(id?: number,tripOfferResourceIdPool?: number[],guideResourceIdPool?: number[],touristResouceIdPool?: number[],eventResourceIdPool?: number[],transportationResourceIdPool?: number[],accomodationResourceIdPool?: number[], nodeId?: string,) {
    this.id = id
    this.tripOfferResourceIdPool = tripOfferResourceIdPool
    this.guideResourceIdPool = guideResourceIdPool
    this.touristResouceIdPool = touristResouceIdPool
    this.eventResourceIdPool = eventResourceIdPool
    this.transportationResourceIdPool = transportationResourceIdPool
    this.accomodationResourceIdPool = accomodationResourceIdPool
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}