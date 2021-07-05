import { similarbytriptypetravelgroupDbType as SimilarbytriptypetravelgroupDbType } from '../../dbTypes/__generatedFromBackend__/types/similarbytriptypetravelgroupDbType'

export class SimilarbytriptypetravelgroupDbClass implements SimilarbytriptypetravelgroupDbType {
travelGroupIds?: number[];
tripTypeName?: string;
atAgency?: number;
timeCreated?: string;
 nodeId?: string;

  constructor(travelGroupIds?: number[],tripTypeName?: string,atAgency?: number,timeCreated?: string, nodeId?: string,) {
    this.travelGroupIds = travelGroupIds
    this.tripTypeName = tripTypeName
    this.atAgency = atAgency
    this.timeCreated = timeCreated
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}