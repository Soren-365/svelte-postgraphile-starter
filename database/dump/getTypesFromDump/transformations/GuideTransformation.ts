import { QGuide as objGuide from '../graphqlQueriesMS/__generated__/QGuide }'

import { Guide  as gqlGuide } from '*.graphqls


const GuideTransform = (raw: gqlGuide): objGuide => {
    return {
        guideId: `${raw.guideId}`,contactId: `${raw.contactId}`,hasGuideLicence: `${raw.hasGuideLicence}`,guideLicenceURL: `${raw.guideLicenceURL}`,publisherId: `${raw.publisherId}`,createdById: `${raw.createdById}`,guideFirstName: `${raw.guideFirstName}`,guideLastName: `${raw.guideLastName}`,hasOwnCompany: `${raw.hasOwnCompany}`,atAgency: `${raw.atAgency}`,languageLevelId: `${raw.languageLevelId}`,areas: `${raw.areas}`,triptype: `${raw.triptype}`,guideOfferId: `${raw.guideOfferId}`,guideBidId: `${raw.guideBidId}`,guideFavoriteId: `${raw.guideFavoriteId}`,guideDealId: `${raw.guideDealId}`,agencyReviewINIdPool: `${raw.agencyReviewINIdPool}`,touristReviewINIdPool: `${raw.touristReviewINIdPool}`,agencyReviewOUTIdPool: `${raw.agencyReviewOUTIdPool}`,touristReviewOUTIdPool: `${raw.touristReviewOUTIdPool}`,holidayCalendarId: `${raw.holidayCalendarId}`,hostIdPool: `${raw.hostIdPool}`,eventIdPool: `${raw.eventIdPool}`,accomodationIdPool: `${raw.accomodationIdPool}`,transportIdPool: `${raw.transportIdPool}`,lastModified: `${raw.lastModified}`,timeCreated: `${raw.timeCreated}`,isActive: `${raw.isActive}`
    }
}
        