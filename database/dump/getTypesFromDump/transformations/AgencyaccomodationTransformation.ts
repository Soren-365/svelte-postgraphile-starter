import { QAgencyaccomodation as objAgencyaccomodation from '../graphqlQueriesMS/__generated__/QAgencyaccomodation }'

import { Agencyaccomodation  as gqlAgencyaccomodation } from '*.graphqls


const AgencyaccomodationTransform = (raw: gqlAgencyaccomodation): objAgencyaccomodation => {
    return {
        agencyId: `${raw.agencyId}`,accomodationId: `${raw.accomodationId}`,lastModified: `${raw.lastModified}`,urlExperyAt: `${raw.urlExperyAt}`,urlExperyAt: `${raw.urlExperyAt}`,presentationPlacements: `${raw.presentationPlacements}`,agencyBucketUrls: `${raw.agencyBucketUrls}`,timeCreated: `${raw.timeCreated}`
    }
}
        