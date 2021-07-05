import { assocdestinationDbType as AssocdestinationDbType } from '../../dbTypes/__generatedFromBackend__/types/assocdestinationDbType'

export class AssocdestinationDbClass implements AssocdestinationDbType {
assocDestinationId?: number[];
destinationId?: number;
atAgency?: number;
timeCreated?: string;
 nodeId?: string;

  constructor(assocDestinationId?: number[],destinationId?: number,atAgency?: number,timeCreated?: string, nodeId?: string,) {
    this.assocDestinationId = assocDestinationId
    this.destinationId = destinationId
    this.atAgency = atAgency
    this.timeCreated = timeCreated
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}