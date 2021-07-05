import { agencytouristDbType as AgencytouristDbType } from '../../dbTypes/__generatedFromBackend__/types/agencytouristDbType'

export class AgencytouristDbClass implements AgencytouristDbType {
agencyId: number;
touristId: number;
timeCreated?: string;
 nodeId?: string;

  constructor(agencyId: number,touristId: number,timeCreated?: string, nodeId?: string,) {
    this.agencyId = agencyId
    this.touristId = touristId
    this.timeCreated = timeCreated
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}