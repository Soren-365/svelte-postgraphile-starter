import { similarbytriptypeeventDbType as SimilarbytriptypeeventDbType } from '../../dbTypes/__generatedFromBackend__/types/similarbytriptypeeventDbType'

export class SimilarbytriptypeeventDbClass implements SimilarbytriptypeeventDbType {
eventIds?: number[];
tripTypeName?: string;
atAgency?: number;
timeCreated?: string;
 nodeId?: string;

  constructor(eventIds?: number[],tripTypeName?: string,atAgency?: number,timeCreated?: string, nodeId?: string,) {
    this.eventIds = eventIds
    this.tripTypeName = tripTypeName
    this.atAgency = atAgency
    this.timeCreated = timeCreated
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}