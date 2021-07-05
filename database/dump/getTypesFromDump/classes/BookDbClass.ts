import { bookDbType as BookDbType } from '../../dbTypes/__generatedFromBackend__/types/bookDbType'

export class BookDbClass implements BookDbType {
id?: number;
publishedYear?: number;
priceOfAquisition?: number;
 nodeId?: string;

  constructor(id?: number,publishedYear?: number,priceOfAquisition?: number, nodeId?: string,) {
    this.id = id
    this.publishedYear = publishedYear
    this.priceOfAquisition = priceOfAquisition
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}