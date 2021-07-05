import { roomcalendarentryDbType as RoomcalendarentryDbType } from '../../dbTypes/__generatedFromBackend__/types/roomcalendarentryDbType'

export class RoomcalendarentryDbClass implements RoomcalendarentryDbType {
id?: number;
atRoomCalendar?: number;
fromDate?: string[];
toDate?: string[];
comment?: string[];
timeCreated?: string;
 nodeId?: string;

  constructor(id?: number,atRoomCalendar?: number,fromDate?: string[],toDate?: string[],comment?: string[],timeCreated?: string, nodeId?: string,) {
    this.id = id
    this.atRoomCalendar = atRoomCalendar
    this.fromDate = fromDate
    this.toDate = toDate
    this.comment = comment
    this.timeCreated = timeCreated
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}