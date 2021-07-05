import { assocaccomodationDbType as AssocaccomodationDbType } from '../../dbTypes/__generatedFromBackend__/types/assocaccomodationDbType'

export class AssocaccomodationDbClass implements AssocaccomodationDbType {
assocAccomodationId?: number[];
accomodationId?: number;
atAgency?: number;
timeCreated?: string;
 nodeId?: string;

  constructor(assocAccomodationId?: number[],accomodationId?: number,atAgency?: number,timeCreated?: string, nodeId?: string,) {
    this.assocAccomodationId = assocAccomodationId
    this.accomodationId = accomodationId
    this.atAgency = atAgency
    this.timeCreated = timeCreated
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}