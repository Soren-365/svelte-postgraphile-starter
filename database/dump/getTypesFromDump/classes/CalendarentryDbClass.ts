import { calendarentryDbType as CalendarentryDbType } from '../../dbTypes/__generatedFromBackend__/types/calendarentryDbType'

export class CalendarentryDbClass implements CalendarentryDbType {
id?: number;
fromTimestamp: string[];
toTimestamp: string[];
resourceType?: string[];
comment?: string[];
timeCreated?: string;
 nodeId?: string;

  constructor(id?: number,fromTimestamp: string[],toTimestamp: string[],resourceType?: string[],comment?: string[],timeCreated?: string, nodeId?: string,) {
    this.id = id
    this.fromTimestamp = fromTimestamp
    this.toTimestamp = toTimestamp
    this.resourceType = resourceType
    this.comment = comment
    this.timeCreated = timeCreated
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}