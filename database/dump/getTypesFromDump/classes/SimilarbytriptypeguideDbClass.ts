import { similarbytriptypeguideDbType as SimilarbytriptypeguideDbType } from '../../dbTypes/__generatedFromBackend__/types/similarbytriptypeguideDbType'

export class SimilarbytriptypeguideDbClass implements SimilarbytriptypeguideDbType {
guideIds?: number[];
tripTypeName?: string;
atAgency?: number;
timeCreated?: string;
 nodeId?: string;

  constructor(guideIds?: number[],tripTypeName?: string,atAgency?: number,timeCreated?: string, nodeId?: string,) {
    this.guideIds = guideIds
    this.tripTypeName = tripTypeName
    this.atAgency = atAgency
    this.timeCreated = timeCreated
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}