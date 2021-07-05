import LogpublisherDbType from '../../dbTypes/__generated__/types/LogpublisherDbType'

export class LogpublisherDbClass implements LogpublisherDbType {
logPublisherId: number;
createdById: number;
belongsToType: string;
atPublisher: number;
command: string;
timeCommand: string;
timeCreated: string;

  constructor(logPublisherId: number,createdById: number,belongsToType: string,atPublisher: number,command: string,timeCommand: string,timeCreated: string,) {
    this.logPublisherId = logPublisherId
    this.createdById = createdById
    this.belongsToType = belongsToType
    this.atPublisher = atPublisher
    this.command = command
    this.timeCommand = timeCommand
    this.timeCreated = timeCreated
  }
//  add methods here and move to 'edited' folder
}