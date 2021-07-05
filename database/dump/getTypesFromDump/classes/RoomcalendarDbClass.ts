import { roomcalendarDbType as RoomcalendarDbType } from '../../dbTypes/__generatedFromBackend__/types/roomcalendarDbType'

export class RoomcalendarDbClass implements RoomcalendarDbType {
id?: number;
publisherId: number;
createdById: number;
isActive?: boolean;
calendarentryId: number;
timeCreated?: string;
 nodeId?: string;

  constructor(id?: number,publisherId: number,createdById: number,isActive?: boolean,calendarentryId: number,timeCreated?: string, nodeId?: string,) {
    this.id = id
    this.publisherId = publisherId
    this.createdById = createdById
    this.isActive = isActive
    this.calendarentryId = calendarentryId
    this.timeCreated = timeCreated
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}