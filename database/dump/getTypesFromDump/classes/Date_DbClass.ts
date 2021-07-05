import { date_DbType as Date_DbType } from '../../dbTypes/__generatedFromBackend__/types/date_DbType'

export class Date_DbClass implements Date_DbType {
useTimeStamp: boolean;
timeStamp?: string;
year?: string;
month?: string;
day?: string;
allDayEvent: boolean;
hour?: string;
minute?: string;
timeCreated?: string;
 nodeId?: string;

  constructor(useTimeStamp: boolean,timeStamp?: string,year?: string,month?: string,day?: string,allDayEvent: boolean,hour?: string,minute?: string,timeCreated?: string, nodeId?: string,) {
    this.useTimeStamp = useTimeStamp
    this.timeStamp = timeStamp
    this.year = year
    this.month = month
    this.day = day
    this.allDayEvent = allDayEvent
    this.hour = hour
    this.minute = minute
    this.timeCreated = timeCreated
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}