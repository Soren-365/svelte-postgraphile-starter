import { touristdealDbType as TouristdealDbType } from '../../dbTypes/__generatedFromBackend__/types/touristdealDbType'

export class TouristdealDbClass implements TouristdealDbType {
id?: number;
tripsOfferResourceIdPool?: number[];
guideOfferResourceIdPool?: number[];
agenciesRomanianIdPool?: number[];
agenciesAbroadIdPool?: number[];
eventResourceIdPool?: number[];
transportationResourceIdPool?: number[];
accomodationResourceIdPool?: number[];
 nodeId?: string;

  constructor(id?: number,tripsOfferResourceIdPool?: number[],guideOfferResourceIdPool?: number[],agenciesRomanianIdPool?: number[],agenciesAbroadIdPool?: number[],eventResourceIdPool?: number[],transportationResourceIdPool?: number[],accomodationResourceIdPool?: number[], nodeId?: string,) {
    this.id = id
    this.tripsOfferResourceIdPool = tripsOfferResourceIdPool
    this.guideOfferResourceIdPool = guideOfferResourceIdPool
    this.agenciesRomanianIdPool = agenciesRomanianIdPool
    this.agenciesAbroadIdPool = agenciesAbroadIdPool
    this.eventResourceIdPool = eventResourceIdPool
    this.transportationResourceIdPool = transportationResourceIdPool
    this.accomodationResourceIdPool = accomodationResourceIdPool
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}