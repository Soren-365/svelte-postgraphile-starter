import { accountingDbType as AccountingDbType } from '../../dbTypes/__generatedFromBackend__/types/accountingDbType'

export class AccountingDbClass implements AccountingDbType {
id?: number;
publisherId: number;
paymentHistory?: string[];
abonamentActive: boolean;
lastPayment?: string;
lastPaymentAmount?: string;
abonamentExpires?: string;
onYearlyPayment: boolean;
onFreePeriod: boolean;
freePeriodExpires?: string;
isRomanian?: boolean;
isActive?: boolean;
 nodeId?: string;

  constructor(id?: number,publisherId: number,paymentHistory?: string[],abonamentActive: boolean,lastPayment?: string,lastPaymentAmount?: string,abonamentExpires?: string,onYearlyPayment: boolean,onFreePeriod: boolean,freePeriodExpires?: string,isRomanian?: boolean,isActive?: boolean, nodeId?: string,) {
    this.id = id
    this.publisherId = publisherId
    this.paymentHistory = paymentHistory
    this.abonamentActive = abonamentActive
    this.lastPayment = lastPayment
    this.lastPaymentAmount = lastPaymentAmount
    this.abonamentExpires = abonamentExpires
    this.onYearlyPayment = onYearlyPayment
    this.onFreePeriod = onFreePeriod
    this.freePeriodExpires = freePeriodExpires
    this.isRomanian = isRomanian
    this.isActive = isActive
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}