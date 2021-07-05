import { agencyeventDbType as AgencyeventDbType } from '../../dbTypes/__generatedFromBackend__/types/agencyeventDbType'

export class AgencyeventDbClass implements AgencyeventDbType {
agencyId: number;
eventId: number;
timeCreated?: string;
 nodeId?: string;

  constructor(agencyId: number,eventId: number,timeCreated?: string, nodeId?: string,) {
    this.agencyId = agencyId
    this.eventId = eventId
    this.timeCreated = timeCreated
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}