import { assoctravelgroupDbType as AssoctravelgroupDbType } from '../../dbTypes/__generatedFromBackend__/types/assoctravelgroupDbType'

export class AssoctravelgroupDbClass implements AssoctravelgroupDbType {
assocTravelGroupId?: number[];
travelGroupId?: number;
atAgency?: number;
timeCreated?: string;
 nodeId?: string;

  constructor(assocTravelGroupId?: number[],travelGroupId?: number,atAgency?: number,timeCreated?: string, nodeId?: string,) {
    this.assocTravelGroupId = assocTravelGroupId
    this.travelGroupId = travelGroupId
    this.atAgency = atAgency
    this.timeCreated = timeCreated
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}