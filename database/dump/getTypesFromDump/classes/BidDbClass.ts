import { bidDbType as BidDbType } from '../../dbTypes/__generatedFromBackend__/types/bidDbType'

export class BidDbClass implements BidDbType {
id?: number;
publisherId: number[];
createdById: number[];
bidAmount?: number[];
isActive: boolean[];
timeCreated: string[];
 nodeId?: string;

  constructor(id?: number,publisherId: number[],createdById: number[],bidAmount?: number[],isActive: boolean[],timeCreated: string[], nodeId?: string,) {
    this.id = id
    this.publisherId = publisherId
    this.createdById = createdById
    this.bidAmount = bidAmount
    this.isActive = isActive
    this.timeCreated = timeCreated
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}