import { touristofferDbType as TouristofferDbType } from '../../dbTypes/__generatedFromBackend__/types/touristofferDbType'

export class TouristofferDbClass implements TouristofferDbType {
id?: number;
 nodeId?: string;

  constructor(id?: number, nodeId?: string,) {
    this.id = id
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}