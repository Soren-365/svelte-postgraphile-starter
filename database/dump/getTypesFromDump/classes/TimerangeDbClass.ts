import { timerangeDbType as TimerangeDbType } from '../../dbTypes/__generatedFromBackend__/types/timerangeDbType'

export class TimerangeDbClass implements TimerangeDbType {
id?: number;
fromTimestamp?: string;
toTimestamp?: string;
timeCreated?: string;
 nodeId?: string;

  constructor(id?: number,fromTimestamp?: string,toTimestamp?: string,timeCreated?: string, nodeId?: string,) {
    this.id = id
    this.fromTimestamp = fromTimestamp
    this.toTimestamp = toTimestamp
    this.timeCreated = timeCreated
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}