import { agencybidDbType as AgencybidDbType } from '../../dbTypes/__generatedFromBackend__/types/agencybidDbType'

export class AgencybidDbClass implements AgencybidDbType {
id?: number;
agencyId?: number;
 nodeId?: string;

  constructor(id?: number,agencyId?: number, nodeId?: string,) {
    this.id = id
    this.agencyId = agencyId
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}