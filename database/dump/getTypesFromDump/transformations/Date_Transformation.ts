import { QDate_ as objDate_ from '../graphqlQueriesMS/__generated__/QDate_ }'

import { Date_  as gqlDate_ } from '*.graphqls


const Date_Transform = (raw: gqlDate_): objDate_ => {
    return {
        useTimeStamp: `${raw.useTimeStamp}`,timeStamp: `${raw.timeStamp}`,year: `${raw.year}`,month: `${raw.month}`,day: `${raw.day}`,allDayEvent: `${raw.allDayEvent}`,hour: `${raw.hour}`,minute: `${raw.minute}`,timeCreated: `${raw.timeCreated}`
    }
}
        