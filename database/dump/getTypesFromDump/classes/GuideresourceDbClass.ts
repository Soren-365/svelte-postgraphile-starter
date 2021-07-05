import { guideresourceDbType as GuideresourceDbType } from '../../dbTypes/__generatedFromBackend__/types/guideresourceDbType'

export class GuideresourceDbClass implements GuideresourceDbType {
id?: number;
guideResourceName?: string;
publisherId: number;
createdById: number;
atGuide?: number;
timeRangeId?: number;
priceInfoId: number;
atAgency?: number;
multipleTimeRange: boolean;
bookingCalendarId?: number;
isRomanian?: boolean;
isActive?: boolean;
isPublic: boolean;
lastModified?: string;
 nodeId?: string;

  constructor(id?: number,guideResourceName?: string,publisherId: number,createdById: number,atGuide?: number,timeRangeId?: number,priceInfoId: number,atAgency?: number,multipleTimeRange: boolean,bookingCalendarId?: number,isRomanian?: boolean,isActive?: boolean,isPublic: boolean,lastModified?: string, nodeId?: string,) {
    this.id = id
    this.guideResourceName = guideResourceName
    this.publisherId = publisherId
    this.createdById = createdById
    this.atGuide = atGuide
    this.timeRangeId = timeRangeId
    this.priceInfoId = priceInfoId
    this.atAgency = atAgency
    this.multipleTimeRange = multipleTimeRange
    this.bookingCalendarId = bookingCalendarId
    this.isRomanian = isRomanian
    this.isActive = isActive
    this.isPublic = isPublic
    this.lastModified = lastModified
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}