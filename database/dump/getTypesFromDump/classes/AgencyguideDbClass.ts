import { agencyguideDbType as AgencyguideDbType } from '../../dbTypes/__generatedFromBackend__/types/agencyguideDbType'

export class AgencyguideDbClass implements AgencyguideDbType {
agencyId: number;
guideId: number;
timeCreated?: string;
 nodeId?: string;

  constructor(agencyId: number,guideId: number,timeCreated?: string, nodeId?: string,) {
    this.agencyId = agencyId
    this.guideId = guideId
    this.timeCreated = timeCreated
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}