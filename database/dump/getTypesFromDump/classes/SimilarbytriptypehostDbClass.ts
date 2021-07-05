import { similarbytriptypehostDbType as SimilarbytriptypehostDbType } from '../../dbTypes/__generatedFromBackend__/types/similarbytriptypehostDbType'

export class SimilarbytriptypehostDbClass implements SimilarbytriptypehostDbType {
hostIds?: number[];
tripTypeName?: string;
atAgency?: number;
timeCreated?: string;
 nodeId?: string;

  constructor(hostIds?: number[],tripTypeName?: string,atAgency?: number,timeCreated?: string, nodeId?: string,) {
    this.hostIds = hostIds
    this.tripTypeName = tripTypeName
    this.atAgency = atAgency
    this.timeCreated = timeCreated
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}