import { commandlogentryDbType as CommandlogentryDbType } from '../../dbTypes/__generatedFromBackend__/types/commandlogentryDbType'

export class CommandlogentryDbClass implements CommandlogentryDbType {
id?: number;
atPublisher: number;
belongsToType?: string;
resourceId?: number;
logcommand: string;
timeCommand?: string;
 nodeId?: string;

  constructor(id?: number,atPublisher: number,belongsToType?: string,resourceId?: number,logcommand: string,timeCommand?: string, nodeId?: string,) {
    this.id = id
    this.atPublisher = atPublisher
    this.belongsToType = belongsToType
    this.resourceId = resourceId
    this.logcommand = logcommand
    this.timeCommand = timeCommand
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}