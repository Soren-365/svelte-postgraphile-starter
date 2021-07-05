import { agencyfavoriteDbType as AgencyfavoriteDbType } from '../../dbTypes/__generatedFromBackend__/types/agencyfavoriteDbType'

export class AgencyfavoriteDbClass implements AgencyfavoriteDbType {
resourceId?: number;
resourceType?: string;
atAgency?: number;
 nodeId?: string;

  constructor(resourceId?: number,resourceType?: string,atAgency?: number, nodeId?: string,) {
    this.resourceId = resourceId
    this.resourceType = resourceType
    this.atAgency = atAgency
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}