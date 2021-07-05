import { agencyaccomodationDbType as AgencyaccomodationDbType } from '../../dbTypes/__generatedFromBackend__/types/agencyaccomodationDbType'

export class AgencyaccomodationDbClass implements AgencyaccomodationDbType {
agencyId: number;
accomodationId: number;
lastModified?: string;
urlExperyAt: string;
presentationPlacements?: string[];
agencyBucketUrls?: string[];
timeCreated?: string;
 nodeId?: string;

  constructor(agencyId: number,accomodationId: number,lastModified?: string,urlExperyAt: string,presentationPlacements?: string[],agencyBucketUrls?: string[],timeCreated?: string, nodeId?: string,) {
    this.agencyId = agencyId
    this.accomodationId = accomodationId
    this.lastModified = lastModified
    this.urlExperyAt = urlExperyAt
    this.presentationPlacements = presentationPlacements
    this.agencyBucketUrls = agencyBucketUrls
    this.timeCreated = timeCreated
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}