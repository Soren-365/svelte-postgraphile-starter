import { QGuideresource as objGuideresource from '../graphqlQueriesMS/__generated__/QGuideresource }'

import { Guideresource  as gqlGuideresource } from '*.graphqls


const GuideresourceTransform = (raw: gqlGuideresource): objGuideresource => {
    return {
        guideResourceId: `${raw.guideResourceId}`,guideResourceName: `${raw.guideResourceName}`,publisherId: `${raw.publisherId}`,createdById: `${raw.createdById}`,atGuide: `${raw.atGuide}`,timeRangeId: `${raw.timeRangeId}`,priceInfoId: `${raw.priceInfoId}`,atAgency: `${raw.atAgency}`,multipleTimeRange: `${raw.multipleTimeRange}`,bookingCalendarId: `${raw.bookingCalendarId}`,isRomanian: `${raw.isRomanian}`,isActive: `${raw.isActive}`,isPrivate: `${raw.isPrivate}`,lastModified: `${raw.lastModified}`,timeCreated: `${raw.timeCreated}`
    }
}
        