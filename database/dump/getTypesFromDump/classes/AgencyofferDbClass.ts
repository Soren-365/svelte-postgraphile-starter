import { agencyofferDbType as AgencyofferDbType } from '../../dbTypes/__generatedFromBackend__/types/agencyofferDbType'

export class AgencyofferDbClass implements AgencyofferDbType {
id?: number;
tripsOfferesourceIdPool?: number[];
 nodeId?: string;

  constructor(id?: number,tripsOfferesourceIdPool?: number[], nodeId?: string,) {
    this.id = id
    this.tripsOfferesourceIdPool = tripsOfferesourceIdPool
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}