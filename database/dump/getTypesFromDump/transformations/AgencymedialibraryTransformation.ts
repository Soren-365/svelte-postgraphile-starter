import { QAgencymedialibrary as objAgencymedialibrary from '../graphqlQueriesMS/__generated__/QAgencymedialibrary }'

import { Agencymedialibrary  as gqlAgencymedialibrary } from '*.graphqls


const AgencymedialibraryTransform = (raw: gqlAgencymedialibrary): objAgencymedialibrary => {
    return {
        Id: `${raw.Id}`,atAgency: `${raw.atAgency}`,uploadLocations: `${raw.uploadLocations}`,locationSignedUrls: `${raw.locationSignedUrls}`,signedUrlsUpdate: `${raw.signedUrlsUpdate}`,lastModifiedBy: `${raw.lastModifiedBy}`,timeCreated: `${raw.timeCreated}`,lastModified: `${raw.lastModified}`
    }
}
        