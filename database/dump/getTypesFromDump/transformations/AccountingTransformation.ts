import { QAccounting as objAccounting from '../graphqlQueriesMS/__generated__/QAccounting }'

import { Accounting  as gqlAccounting } from '*.graphqls


const AccountingTransform = (raw: gqlAccounting): objAccounting => {
    return {
        accountingId: `${raw.accountingId}`,publisherId: `${raw.publisherId}`,paymentHistory: `${raw.paymentHistory}`,abonamentActive: `${raw.abonamentActive}`,lastPayment: `${raw.lastPayment}`,lastPaymentAmount: `${raw.lastPaymentAmount}`,abonamentExpires: `${raw.abonamentExpires}`,onYearlyPayment: `${raw.onYearlyPayment}`,onFreePeriod: `${raw.onFreePeriod}`,freePeriodExpires: `${raw.freePeriodExpires}`,isRomanian: `${raw.isRomanian}`,isActive: `${raw.isActive}`,timeCreated: `${raw.timeCreated}`
    }
}
        