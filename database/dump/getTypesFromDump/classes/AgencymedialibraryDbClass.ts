import { agencymedialibraryDbType as AgencymedialibraryDbType } from '../../dbTypes/__generatedFromBackend__/types/agencymedialibraryDbType'

export class AgencymedialibraryDbClass implements AgencymedialibraryDbType {
id?: number;
atAgency: number;
uploadLocations?: string[];
locationSignedUrls?: string[];
signedUrlsUpdate?: string[];
lastModifiedBy: number;
timeCreated?: string;
 nodeId?: string;

  constructor(id?: number,atAgency: number,uploadLocations?: string[],locationSignedUrls?: string[],signedUrlsUpdate?: string[],lastModifiedBy: number,timeCreated?: string, nodeId?: string,) {
    this.id = id
    this.atAgency = atAgency
    this.uploadLocations = uploadLocations
    this.locationSignedUrls = locationSignedUrls
    this.signedUrlsUpdate = signedUrlsUpdate
    this.lastModifiedBy = lastModifiedBy
    this.timeCreated = timeCreated
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}