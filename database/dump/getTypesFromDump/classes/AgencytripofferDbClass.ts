import { agencytripofferDbType as AgencytripofferDbType } from '../../dbTypes/__generatedFromBackend__/types/agencytripofferDbType'

export class AgencytripofferDbClass implements AgencytripofferDbType {
agencyId: number;
tripOfferId: number;
timeCreated?: string;
 nodeId?: string;

  constructor(agencyId: number,tripOfferId: number,timeCreated?: string, nodeId?: string,) {
    this.agencyId = agencyId
    this.tripOfferId = tripOfferId
    this.timeCreated = timeCreated
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}