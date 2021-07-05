import { agencytransportDbType as AgencytransportDbType } from '../../dbTypes/__generatedFromBackend__/types/agencytransportDbType'

export class AgencytransportDbClass implements AgencytransportDbType {
agencyId: number;
transportId: number;
timeCreated?: string;
 nodeId?: string;

  constructor(agencyId: number,transportId: number,timeCreated?: string, nodeId?: string,) {
    this.agencyId = agencyId
    this.transportId = transportId
    this.timeCreated = timeCreated
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}