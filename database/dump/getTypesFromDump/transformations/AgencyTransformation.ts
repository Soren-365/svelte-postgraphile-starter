import { QAgency as objAgency from '../graphqlQueriesMS/__generated__/QAgency }'

import { Agency  as gqlAgency } from '*.graphqls


const AgencyTransform = (raw: gqlAgency): objAgency => {
    return {
        agencyId: `${raw.agencyId}`,agencyName: `${raw.agencyName}`,contactId: `${raw.contactId}`,activeInsurance: `${raw.activeInsurance}`,insuranceURL: `${raw.insuranceURL}`,insuranceExpery: `${raw.insuranceExpery}`,publisherId: `${raw.publisherId}`,createdById: `${raw.createdById}`,isActive: `${raw.isActive}`,agencyBidId: `${raw.agencyBidId}`,agencyFavoriteId: `${raw.agencyFavoriteId}`,agencyOfferId: `${raw.agencyOfferId}`,agencyDealId: `${raw.agencyDealId}`,trustedPartnerIdPool: `${raw.trustedPartnerIdPool}`,extendedNetworkIdPool: `${raw.extendedNetworkIdPool}`,guideReviewINIdPool: `${raw.guideReviewINIdPool}`,agencyReviewINIdPool: `${raw.agencyReviewINIdPool}`,touristReviewINIdPool: `${raw.touristReviewINIdPool}`,guideReviewOUTIdPool: `${raw.guideReviewOUTIdPool}`,agencyReviewOUTIdPool: `${raw.agencyReviewOUTIdPool}`,touristReviewOUTIdPool: `${raw.touristReviewOUTIdPool}`,agencyMediaLibraryId: `${raw.agencyMediaLibraryId}`,isRomanian: `${raw.isRomanian}`,holidayCalendarId: `${raw.holidayCalendarId}`,specializedAgency: `${raw.specializedAgency}`,lastModified: `${raw.lastModified}`,timeCreated: `${raw.timeCreated}`
    }
}
        