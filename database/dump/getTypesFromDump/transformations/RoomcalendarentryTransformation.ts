import { QRoomcalendarentry as objRoomcalendarentry from '../graphqlQueriesMS/__generated__/QRoomcalendarentry }'

import { Roomcalendarentry  as gqlRoomcalendarentry } from '*.graphqls


const RoomcalendarentryTransform = (raw: gqlRoomcalendarentry): objRoomcalendarentry => {
    return {
        roomcalendarEntryId: `${raw.roomcalendarEntryId}`,atRoomCalendar: `${raw.atRoomCalendar}`,fromDate: `${raw.fromDate}`,toDate: `${raw.toDate}`,comment: `${raw.comment}`,timeCreated: `${raw.timeCreated}`
    }
}
        