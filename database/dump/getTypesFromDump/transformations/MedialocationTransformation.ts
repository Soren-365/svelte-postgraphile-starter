import { QMedialocation as objMedialocation from '../graphqlQueriesMS/__generated__/QMedialocation }'

import { Medialocation  as gqlMedialocation } from '*.graphqls


const MedialocationTransform = (raw: gqlMedialocation): objMedialocation => {
    return {
        Id: `${raw.Id}`,mediaLocationPlacement: `${raw.mediaLocationPlacement}`,atAgency: `${raw.atAgency}`,atResource: `${raw.atResource}`,uploadLocationOriginal: `${raw.uploadLocationOriginal}`,uploadLocationThumbnail: `${raw.uploadLocationThumbnail}`,uploadLocationMobile: `${raw.uploadLocationMobile}`,uploadLocationTablet: `${raw.uploadLocationTablet}`,uploadLocationDesktop: `${raw.uploadLocationDesktop}`,uploadLocation2K: `${raw.uploadLocation2K}`,signedUrlThumbnail: `${raw.signedUrlThumbnail}`,signedUrlMobile: `${raw.signedUrlMobile}`,signedUrlTablet: `${raw.signedUrlTablet}`,signedUrlDesktop: `${raw.signedUrlDesktop}`,signedUrl2K: `${raw.signedUrl2K}`,signedUrlsUpdate: `${raw.signedUrlsUpdate}`,timeCreated: `${raw.timeCreated}`
    }
}
        