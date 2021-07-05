import { assoctransportDbType as AssoctransportDbType } from '../../dbTypes/__generatedFromBackend__/types/assoctransportDbType'

export class AssoctransportDbClass implements AssoctransportDbType {
assocTransportId?: number[];
transportId?: number;
atAgency?: number;
 nodeId?: string;

  constructor(assocTransportId?: number[],transportId?: number,atAgency?: number, nodeId?: string,) {
    this.assocTransportId = assocTransportId
    this.transportId = transportId
    this.atAgency = atAgency
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}