import { triptypeDbType as TriptypeDbType } from '../../dbTypes/__generatedFromBackend__/types/triptypeDbType'

export class TriptypeDbClass implements TriptypeDbType {
id: number;
tripTypeName: string;
atAgency?: number;
lastModified?: string;
timeCreated?: string;
 nodeId?: string;

  constructor(id: number,tripTypeName: string,atAgency?: number,lastModified?: string,timeCreated?: string, nodeId?: string,) {
    this.id = id
    this.tripTypeName = tripTypeName
    this.atAgency = atAgency
    this.lastModified = lastModified
    this.timeCreated = timeCreated
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}