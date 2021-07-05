import { medialocationDbType as MedialocationDbType } from '../../dbTypes/__generatedFromBackend__/types/medialocationDbType'

export class MedialocationDbClass implements MedialocationDbType {
id?: number;
mediaLocationPlacement?: string;
atAgency?: number;
atResource: number;
uploadLocationOriginal?: string;
uploadLocationThumbnail?: string;
uploadLocationMobile?: string;
uploadLocationTablet?: string;
uploadLocationDesktop?: string;
uploadLocation2K?: string;
signedUrlThumbnail?: string;
signedUrlMobile?: string;
signedUrlTablet?: string;
signedUrlDesktop?: string;
signedUrl2K?: string;
signedUrlsUpdate: string;
timeCreated?: string;
 nodeId?: string;

  constructor(id?: number,mediaLocationPlacement?: string,atAgency?: number,atResource: number,uploadLocationOriginal?: string,uploadLocationThumbnail?: string,uploadLocationMobile?: string,uploadLocationTablet?: string,uploadLocationDesktop?: string,uploadLocation2K?: string,signedUrlThumbnail?: string,signedUrlMobile?: string,signedUrlTablet?: string,signedUrlDesktop?: string,signedUrl2K?: string,signedUrlsUpdate: string,timeCreated?: string, nodeId?: string,) {
    this.id = id
    this.mediaLocationPlacement = mediaLocationPlacement
    this.atAgency = atAgency
    this.atResource = atResource
    this.uploadLocationOriginal = uploadLocationOriginal
    this.uploadLocationThumbnail = uploadLocationThumbnail
    this.uploadLocationMobile = uploadLocationMobile
    this.uploadLocationTablet = uploadLocationTablet
    this.uploadLocationDesktop = uploadLocationDesktop
    this.uploadLocation2K = uploadLocation2K
    this.signedUrlThumbnail = signedUrlThumbnail
    this.signedUrlMobile = signedUrlMobile
    this.signedUrlTablet = signedUrlTablet
    this.signedUrlDesktop = signedUrlDesktop
    this.signedUrl2K = signedUrl2K
    this.signedUrlsUpdate = signedUrlsUpdate
    this.timeCreated = timeCreated
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}