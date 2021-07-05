import { assocguideDbType as AssocguideDbType } from '../../dbTypes/__generatedFromBackend__/types/assocguideDbType'

export class AssocguideDbClass implements AssocguideDbType {
assocGuideId?: number[];
guideId?: number;
atAgency?: number;
timeCreated?: string;
 nodeId?: string;

  constructor(assocGuideId?: number[],guideId?: number,atAgency?: number,timeCreated?: string, nodeId?: string,) {
    this.assocGuideId = assocGuideId
    this.guideId = guideId
    this.atAgency = atAgency
    this.timeCreated = timeCreated
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}