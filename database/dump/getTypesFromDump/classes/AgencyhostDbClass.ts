import { agencyhostDbType as AgencyhostDbType } from '../../dbTypes/__generatedFromBackend__/types/agencyhostDbType'

export class AgencyhostDbClass implements AgencyhostDbType {
agencyId: number;
hostId: number;
timeCreated?: string;
 nodeId?: string;

  constructor(agencyId: number,hostId: number,timeCreated?: string, nodeId?: string,) {
    this.agencyId = agencyId
    this.hostId = hostId
    this.timeCreated = timeCreated
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}