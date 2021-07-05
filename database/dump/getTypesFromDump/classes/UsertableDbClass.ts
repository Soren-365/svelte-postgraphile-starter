import { usertableDbType as UsertableDbType } from '../../dbTypes/__generatedFromBackend__/types/usertableDbType'

export class UsertableDbClass implements UsertableDbType {
id: number;
firstName?: string;
lastName?: string;
userEmail?: string;
atAgency?: number;
isAdmin?: boolean;
atGuide?: number;
atTourist?: number;
timeCreated?: string;
isActive?: boolean;
 nodeId?: string;

  constructor(id: number,firstName?: string,lastName?: string,userEmail?: string,atAgency?: number,isAdmin?: boolean,atGuide?: number,atTourist?: number,timeCreated?: string,isActive?: boolean, nodeId?: string,) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.userEmail = userEmail
    this.atAgency = atAgency
    this.isAdmin = isAdmin
    this.atGuide = atGuide
    this.atTourist = atTourist
    this.timeCreated = timeCreated
    this.isActive = isActive
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}