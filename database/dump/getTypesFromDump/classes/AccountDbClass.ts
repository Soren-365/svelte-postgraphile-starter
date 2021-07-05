import { accountDbType as AccountDbType } from '../../dbTypes/__generatedFromBackend__/types/accountDbType'

export class AccountDbClass implements AccountDbType {
id?: number;
emailHash?: string;
passwordHash?: string;
sessionId?: string;
 nodeId?: string;

  constructor(id?: number,emailHash?: string,passwordHash?: string,sessionId?: string, nodeId?: string,) {
    this.id = id
    this.emailHash = emailHash
    this.passwordHash = passwordHash
    this.sessionId = sessionId
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}