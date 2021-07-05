import { mediabookDbType as MediabookDbType } from '../../dbTypes/__generatedFromBackend__/types/mediabookDbType'

export class MediabookDbClass implements MediabookDbType {
id?: number;
atLibrary: number;
atBook: number;
lastModified: string;
lastModifiedBy?: number;
mainImage?: number;
mainImageSignedUrl?: string;
authorImage?: number;
authorSignedUrl?: string;
mapImage?: number;
mapImageSignedUrl?: string;
thumbnailImage?: number;
thumbnailImageSignedUrl?: string;
imageGallery1?: number;
imageGallery1SignedUrl?: string;
imageGallery2?: number;
imageGallery2SignedUrl?: string;
imageGallery3?: number;
imageGallery3SignedUrl?: string;
imageGallery4?: number;
imageGallery4SignedUrl?: string;
imageGallery5?: number;
imageGallery5SignedUrl?: string;
imageGallery6?: number;
imageGallery6SignedUrl?: string;
imageGallery7?: number;
imageGallery7SignedUrl?: string;
imageGallery8?: number;
imageGallery8SignedUrl?: string;
imageGallery9?: number;
imageGallery9SignedUrl?: string;
imageGallery10?: number;
imageGallery10SignedUrl?: string;
signedUrlsUpdate: string;
timeCreated: string;
 nodeId?: string;

  constructor(id?: number,atLibrary: number,atBook: number,lastModified: string,lastModifiedBy?: number,mainImage?: number,mainImageSignedUrl?: string,authorImage?: number,authorSignedUrl?: string,mapImage?: number,mapImageSignedUrl?: string,thumbnailImage?: number,thumbnailImageSignedUrl?: string,imageGallery1?: number,imageGallery1SignedUrl?: string,imageGallery2?: number,imageGallery2SignedUrl?: string,imageGallery3?: number,imageGallery3SignedUrl?: string,imageGallery4?: number,imageGallery4SignedUrl?: string,imageGallery5?: number,imageGallery5SignedUrl?: string,imageGallery6?: number,imageGallery6SignedUrl?: string,imageGallery7?: number,imageGallery7SignedUrl?: string,imageGallery8?: number,imageGallery8SignedUrl?: string,imageGallery9?: number,imageGallery9SignedUrl?: string,imageGallery10?: number,imageGallery10SignedUrl?: string,signedUrlsUpdate: string,timeCreated: string, nodeId?: string,) {
    this.id = id
    this.atLibrary = atLibrary
    this.atBook = atBook
    this.lastModified = lastModified
    this.lastModifiedBy = lastModifiedBy
    this.mainImage = mainImage
    this.mainImageSignedUrl = mainImageSignedUrl
    this.authorImage = authorImage
    this.authorSignedUrl = authorSignedUrl
    this.mapImage = mapImage
    this.mapImageSignedUrl = mapImageSignedUrl
    this.thumbnailImage = thumbnailImage
    this.thumbnailImageSignedUrl = thumbnailImageSignedUrl
    this.imageGallery1 = imageGallery1
    this.imageGallery1SignedUrl = imageGallery1SignedUrl
    this.imageGallery2 = imageGallery2
    this.imageGallery2SignedUrl = imageGallery2SignedUrl
    this.imageGallery3 = imageGallery3
    this.imageGallery3SignedUrl = imageGallery3SignedUrl
    this.imageGallery4 = imageGallery4
    this.imageGallery4SignedUrl = imageGallery4SignedUrl
    this.imageGallery5 = imageGallery5
    this.imageGallery5SignedUrl = imageGallery5SignedUrl
    this.imageGallery6 = imageGallery6
    this.imageGallery6SignedUrl = imageGallery6SignedUrl
    this.imageGallery7 = imageGallery7
    this.imageGallery7SignedUrl = imageGallery7SignedUrl
    this.imageGallery8 = imageGallery8
    this.imageGallery8SignedUrl = imageGallery8SignedUrl
    this.imageGallery9 = imageGallery9
    this.imageGallery9SignedUrl = imageGallery9SignedUrl
    this.imageGallery10 = imageGallery10
    this.imageGallery10SignedUrl = imageGallery10SignedUrl
    this.signedUrlsUpdate = signedUrlsUpdate
    this.timeCreated = timeCreated
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}