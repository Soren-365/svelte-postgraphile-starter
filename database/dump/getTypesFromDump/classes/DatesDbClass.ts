import { DatesDbType } from '../../dbTypes/__generatedFromBackend__/types/DatesDbType'

export class DatesDbClass implements DatesDbType {
useTimeStamp: boolean;
timeStamp: string;
year: string;
month: string;
day: string;
allDayEvent: boolean;
hour: string;
minute: string;
timeCreated: string;

  constructor(useTimeStamp: boolean,timeStamp: string,year: string,month: string,day: string,allDayEvent: boolean,hour: string,minute: string,timeCreated: string,) {
    this.useTimeStamp = useTimeStamp
    this.timeStamp = timeStamp
    this.year = year
    this.month = month
    this.day = day
    this.allDayEvent = allDayEvent
    this.hour = hour
    this.minute = minute
    this.timeCreated = timeCreated
  }
//  add methods here and move to 'edited' folder
}