import { agencytravelgroupDbType as AgencytravelgroupDbType } from '../../dbTypes/__generatedFromBackend__/types/agencytravelgroupDbType'

export class AgencytravelgroupDbClass implements AgencytravelgroupDbType {
agencyId?: number;
travelGroupId?: number;
timeCreated?: string;
 nodeId?: string;

  constructor(agencyId?: number,travelGroupId?: number,timeCreated?: string, nodeId?: string,) {
    this.agencyId = agencyId
    this.travelGroupId = travelGroupId
    this.timeCreated = timeCreated
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}