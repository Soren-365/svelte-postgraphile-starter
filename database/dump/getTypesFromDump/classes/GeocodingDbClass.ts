import { geocodingDbType as GeocodingDbType } from '../../dbTypes/__generatedFromBackend__/types/geocodingDbType'

export class GeocodingDbClass implements GeocodingDbType {
id?: number;
locationLat?: number;
locationLng?: number;
locationType?: string;
placesId?: string;
formattedAdress?: string;
type?: string;
viewportNorthEastLat?: number;
viewportNorthEastLng?: number;
viewportSouthWestLat?: number;
viewportSouthWestLng?: number;
createdById: number;
publishedById: number;
lastModified?: string;
timeCreated?: string;
 nodeId?: string;

  constructor(id?: number,locationLat?: number,locationLng?: number,locationType?: string,placesId?: string,formattedAdress?: string,type?: string,viewportNorthEastLat?: number,viewportNorthEastLng?: number,viewportSouthWestLat?: number,viewportSouthWestLng?: number,createdById: number,publishedById: number,lastModified?: string,timeCreated?: string, nodeId?: string,) {
    this.id = id
    this.locationLat = locationLat
    this.locationLng = locationLng
    this.locationType = locationType
    this.placesId = placesId
    this.formattedAdress = formattedAdress
    this.type = type
    this.viewportNorthEastLat = viewportNorthEastLat
    this.viewportNorthEastLng = viewportNorthEastLng
    this.viewportSouthWestLat = viewportSouthWestLat
    this.viewportSouthWestLng = viewportSouthWestLng
    this.createdById = createdById
    this.publishedById = publishedById
    this.lastModified = lastModified
    this.timeCreated = timeCreated
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}