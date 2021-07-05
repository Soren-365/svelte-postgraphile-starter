import { QSimilarbytriptypeguide as objSimilarbytriptypeguide from '../graphqlQueriesMS/__generated__/QSimilarbytriptypeguide }'

import { Similarbytriptypeguide  as gqlSimilarbytriptypeguide } from '*.graphqls


const SimilarbytriptypeguideTransform = (raw: gqlSimilarbytriptypeguide): objSimilarbytriptypeguide => {
    return {
        guideIds: `${raw.guideIds}`,triptype: `${raw.triptype}`,atAgency: `${raw.atAgency}`,timeCreated: `${raw.timeCreated}`
    }
}
        