import { similarbytriptypetransportDbType as SimilarbytriptypetransportDbType } from '../../dbTypes/__generatedFromBackend__/types/similarbytriptypetransportDbType'

export class SimilarbytriptypetransportDbClass implements SimilarbytriptypetransportDbType {
transportIds?: number[];
tripTypeName?: string;
atAgency?: number;
timeCreated?: string;
 nodeId?: string;

  constructor(transportIds?: number[],tripTypeName?: string,atAgency?: number,timeCreated?: string, nodeId?: string,) {
    this.transportIds = transportIds
    this.tripTypeName = tripTypeName
    this.atAgency = atAgency
    this.timeCreated = timeCreated
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}