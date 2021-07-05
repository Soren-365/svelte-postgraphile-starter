import { QAssocaccomodation as objAssocaccomodation from '../graphqlQueriesMS/__generated__/QAssocaccomodation }'

import { Assocaccomodation  as gqlAssocaccomodation } from '*.graphqls


const AssocaccomodationTransform = (raw: gqlAssocaccomodation): objAssocaccomodation => {
    return {
        assocAccomodationId: `${raw.assocAccomodationId}`,accomodationId: `${raw.accomodationId}`,atAgency: `${raw.atAgency}`,timeCreated: `${raw.timeCreated}`
    }
}
        