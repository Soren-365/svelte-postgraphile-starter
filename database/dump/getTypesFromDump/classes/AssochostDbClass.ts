import { assochostDbType as AssochostDbType } from '../../dbTypes/__generatedFromBackend__/types/assochostDbType'

export class AssochostDbClass implements AssochostDbType {
assocHostId?: number[];
hostId?: number;
atAgency?: number;
timeCreated?: string;
 nodeId?: string;

  constructor(assocHostId?: number[],hostId?: number,atAgency?: number,timeCreated?: string, nodeId?: string,) {
    this.assocHostId = assocHostId
    this.hostId = hostId
    this.atAgency = atAgency
    this.timeCreated = timeCreated
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}