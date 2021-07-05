import { QTouristoffer as objTouristoffer from '../graphqlQueriesMS/__generated__/QTouristoffer }'

import { Touristoffer  as gqlTouristoffer } from '*.graphqls


const TouristofferTransform = (raw: gqlTouristoffer): objTouristoffer => {
    return {
        touristOfferId: `${raw.touristOfferId}`,touristResourceIdPool: `${raw.touristResourceIdPool}`
    }
}
        