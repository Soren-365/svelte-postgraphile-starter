import { QTimerange as objTimerange from '../graphqlQueriesMS/__generated__/QTimerange }'

import { Timerange  as gqlTimerange } from '*.graphqls


const TimerangeTransform = (raw: gqlTimerange): objTimerange => {
    return {
        timeRangeId: `${raw.timeRangeId}`,fromTimestamp: `${raw.fromTimestamp}`,toTimestamp: `${raw.toTimestamp}`,timeCreated: `${raw.timeCreated}`
    }
}
        