import { languagelevelDbType as LanguagelevelDbType } from '../../dbTypes/__generatedFromBackend__/types/languagelevelDbType'

export class LanguagelevelDbClass implements LanguagelevelDbType {
id?: number;
langauges: string;
langaugesSkill: string;
isActive?: boolean;
createdById: number;
publisherId: number;
 nodeId?: string;

  constructor(id?: number,langauges: string,langaugesSkill: string,isActive?: boolean,createdById: number,publisherId: number, nodeId?: string,) {
    this.id = id
    this.langauges = langauges
    this.langaugesSkill = langaugesSkill
    this.isActive = isActive
    this.createdById = createdById
    this.publisherId = publisherId
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}