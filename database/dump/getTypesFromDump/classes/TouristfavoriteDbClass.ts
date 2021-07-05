import { touristfavoriteDbType as TouristfavoriteDbType } from '../../dbTypes/__generatedFromBackend__/types/touristfavoriteDbType'

export class TouristfavoriteDbClass implements TouristfavoriteDbType {
id?: number;
agenciesRomanianIdPool?: number[];
agenciesAbroadIdPool?: number[];
travelGroupResourceIdPool?: number[];
tripsOfferResourceIdPool?: number[];
guideResourceIdPool?: number[];
eventResourceIdPool?: number[];
transportationResourceIdPool?: number[];
accomodationResourceIdPool?: number[];
 nodeId?: string;

  constructor(id?: number,agenciesRomanianIdPool?: number[],agenciesAbroadIdPool?: number[],travelGroupResourceIdPool?: number[],tripsOfferResourceIdPool?: number[],guideResourceIdPool?: number[],eventResourceIdPool?: number[],transportationResourceIdPool?: number[],accomodationResourceIdPool?: number[], nodeId?: string,) {
    this.id = id
    this.agenciesRomanianIdPool = agenciesRomanianIdPool
    this.agenciesAbroadIdPool = agenciesAbroadIdPool
    this.travelGroupResourceIdPool = travelGroupResourceIdPool
    this.tripsOfferResourceIdPool = tripsOfferResourceIdPool
    this.guideResourceIdPool = guideResourceIdPool
    this.eventResourceIdPool = eventResourceIdPool
    this.transportationResourceIdPool = transportationResourceIdPool
    this.accomodationResourceIdPool = accomodationResourceIdPool
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}