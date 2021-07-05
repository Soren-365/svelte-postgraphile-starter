import { assoceventDbType as AssoceventDbType } from '../../dbTypes/__generatedFromBackend__/types/assoceventDbType'

export class AssoceventDbClass implements AssoceventDbType {
assocEventId?: number[];
eventId?: number;
atAgency?: number;
timeCreated?: string;
 nodeId?: string;

  constructor(assocEventId?: number[],eventId?: number,atAgency?: number,timeCreated?: string, nodeId?: string,) {
    this.assocEventId = assocEventId
    this.eventId = eventId
    this.atAgency = atAgency
    this.timeCreated = timeCreated
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}