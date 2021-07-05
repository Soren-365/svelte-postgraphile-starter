import { similarbytriptypedestinationDbType as SimilarbytriptypedestinationDbType } from '../../dbTypes/__generatedFromBackend__/types/similarbytriptypedestinationDbType'

export class SimilarbytriptypedestinationDbClass implements SimilarbytriptypedestinationDbType {
destinationIds?: number[];
tripTypeName?: string;
atAgency?: number;
timeCreated?: string;
 nodeId?: string;

  constructor(destinationIds?: number[],tripTypeName?: string,atAgency?: number,timeCreated?: string, nodeId?: string,) {
    this.destinationIds = destinationIds
    this.tripTypeName = tripTypeName
    this.atAgency = atAgency
    this.timeCreated = timeCreated
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}