import { QBookingcalendar as objBookingcalendar from '../graphqlQueriesMS/__generated__/QBookingcalendar }'

import { Bookingcalendar  as gqlBookingcalendar } from '*.graphqls


const BookingcalendarTransform = (raw: gqlBookingcalendar): objBookingcalendar => {
    return {
        bookingCalendarId: `${raw.bookingCalendarId}`,contactId: `${raw.contactId}`,publisherId: `${raw.publisherId}`,createdById: `${raw.createdById}`,isActive: `${raw.isActive}`,calendarEntryId: `${raw.calendarEntryId}`,timeCreated: `${raw.timeCreated}`
    }
}
        