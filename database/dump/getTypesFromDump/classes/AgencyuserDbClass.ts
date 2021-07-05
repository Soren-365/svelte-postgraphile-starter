import { agencyuserDbType as AgencyuserDbType } from '../../dbTypes/__generatedFromBackend__/types/agencyuserDbType'

export class AgencyuserDbClass implements AgencyuserDbType {
agencyId?: number;
userId?: number;
timeCreated?: string;
 nodeId?: string;

  constructor(agencyId?: number,userId?: number,timeCreated?: string, nodeId?: string,) {
    this.agencyId = agencyId
    this.userId = userId
    this.timeCreated = timeCreated
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}