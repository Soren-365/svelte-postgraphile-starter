import { QRoomcalendar as objRoomcalendar from '../graphqlQueriesMS/__generated__/QRoomcalendar }'

import { Roomcalendar  as gqlRoomcalendar } from '*.graphqls


const RoomcalendarTransform = (raw: gqlRoomcalendar): objRoomcalendar => {
    return {
        roomCalendarId: `${raw.roomCalendarId}`,publisherId: `${raw.publisherId}`,createdById: `${raw.createdById}`,isActive: `${raw.isActive}`,calendarentryId: `${raw.calendarentryId}`,timeCreated: `${raw.timeCreated}`
    }
}
        