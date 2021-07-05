import { QPresentation as objPresentation from '../graphqlQueriesMS/__generated__/QPresentation }'

import { Presentation  as gqlPresentation } from '*.graphqls


const PresentationTransform = (raw: gqlPresentation): objPresentation => {
    return {
        presentationId: `${raw.presentationId}`,headline: `${raw.headline}`,publisherId: `${raw.publisherId}`,createdById: `${raw.createdById}`,resourceType: `${raw.resourceType}`,resourceTypeId: `${raw.resourceTypeId}`,isActive: `${raw.isActive}`,lastModified: `${raw.lastModified}`,timeCreated: `${raw.timeCreated}`
    }
}
        