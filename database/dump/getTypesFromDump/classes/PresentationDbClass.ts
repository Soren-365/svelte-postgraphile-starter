import { presentationDbType as PresentationDbType } from '../../dbTypes/__generatedFromBackend__/types/presentationDbType'

export class PresentationDbClass implements PresentationDbType {
id?: number;
headline?: string;
publisherId: number;
createdById: number;
resourceType: string;
resourceTypeId: number;
isActive?: boolean;
lastModified?: string;
 nodeId?: string;

  constructor(id?: number,headline?: string,publisherId: number,createdById: number,resourceType: string,resourceTypeId: number,isActive?: boolean,lastModified?: string, nodeId?: string,) {
    this.id = id
    this.headline = headline
    this.publisherId = publisherId
    this.createdById = createdById
    this.resourceType = resourceType
    this.resourceTypeId = resourceTypeId
    this.isActive = isActive
    this.lastModified = lastModified
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}