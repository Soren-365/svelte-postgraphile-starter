import { publisherDbType as PublisherDbType } from '../../dbTypes/__generatedFromBackend__/types/publisherDbType'

export class PublisherDbClass implements PublisherDbType {
id?: number;
name?: string;
createdById?: number;
belongsToId?: number;
belongsToType?: string;
canReview?: boolean;
canPublish?: boolean;
isRomanian?: boolean;
isActive?: boolean;
commandLogEntryId?: number[];
timeCreated?: string;
 nodeId?: string;

  constructor(id?: number,name?: string,createdById?: number,belongsToId?: number,belongsToType?: string,canReview?: boolean,canPublish?: boolean,isRomanian?: boolean,isActive?: boolean,commandLogEntryId?: number[],timeCreated?: string, nodeId?: string,) {
    this.id = id
    this.name = name
    this.createdById = createdById
    this.belongsToId = belongsToId
    this.belongsToType = belongsToType
    this.canReview = canReview
    this.canPublish = canPublish
    this.isRomanian = isRomanian
    this.isActive = isActive
    this.commandLogEntryId = commandLogEntryId
    this.timeCreated = timeCreated
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}