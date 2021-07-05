import { guidedealDbType as GuidedealDbType } from '../../dbTypes/__generatedFromBackend__/types/guidedealDbType'

export class GuidedealDbClass implements GuidedealDbType {
id?: number;
tripsOfferResourceIdPool?: number[];
agenciesRomanianIdPool?: number[];
agenciesAbroadIdPool?: number[];
 nodeId?: string;

  constructor(id?: number,tripsOfferResourceIdPool?: number[],agenciesRomanianIdPool?: number[],agenciesAbroadIdPool?: number[], nodeId?: string,) {
    this.id = id
    this.tripsOfferResourceIdPool = tripsOfferResourceIdPool
    this.agenciesRomanianIdPool = agenciesRomanianIdPool
    this.agenciesAbroadIdPool = agenciesAbroadIdPool
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}