import { QAssocguide as objAssocguide from '../graphqlQueriesMS/__generated__/QAssocguide }'

import { Assocguide  as gqlAssocguide } from '*.graphqls


const AssocguideTransform = (raw: gqlAssocguide): objAssocguide => {
    return {
        assocGuideId: `${raw.assocGuideId}`,guideId: `${raw.guideId}`,atAgency: `${raw.atAgency}`,timeCreated: `${raw.timeCreated}`
    }
}
        