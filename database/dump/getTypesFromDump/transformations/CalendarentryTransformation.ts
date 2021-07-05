import { QCalendarentry as objCalendarentry from '../graphqlQueriesMS/__generated__/QCalendarentry }'

import { Calendarentry  as gqlCalendarentry } from '*.graphqls


const CalendarentryTransform = (raw: gqlCalendarentry): objCalendarentry => {
    return {
        calendarEntryId: `${raw.calendarEntryId}`,fromTimestamp: `${raw.fromTimestamp}`,toTimestamp: `${raw.toTimestamp}`,resourceType: `${raw.resourceType}`,comment: `${raw.comment}`,timeCreated: `${raw.timeCreated}`
    }
}
        