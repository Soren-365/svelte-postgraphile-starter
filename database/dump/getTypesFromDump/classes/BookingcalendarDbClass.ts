import { bookingcalendarDbType as BookingcalendarDbType } from '../../dbTypes/__generatedFromBackend__/types/bookingcalendarDbType'

export class BookingcalendarDbClass implements BookingcalendarDbType {
id?: number;
belongsToId?: number;
belongsToType?: string;
createdById?: number;
isActive?: boolean;
fromTimestamp: string[];
toTimestamp: string[];
resourceType?: string[];
comment?: string[];
 nodeId?: string;

  constructor(id?: number,belongsToId?: number,belongsToType?: string,createdById?: number,isActive?: boolean,fromTimestamp: string[],toTimestamp: string[],resourceType?: string[],comment?: string[], nodeId?: string,) {
    this.id = id
    this.belongsToId = belongsToId
    this.belongsToType = belongsToType
    this.createdById = createdById
    this.isActive = isActive
    this.fromTimestamp = fromTimestamp
    this.toTimestamp = toTimestamp
    this.resourceType = resourceType
    this.comment = comment
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}