import { QAssoctravelgroup as objAssoctravelgroup from '../graphqlQueriesMS/__generated__/QAssoctravelgroup }'

import { Assoctravelgroup  as gqlAssoctravelgroup } from '*.graphqls


const AssoctravelgroupTransform = (raw: gqlAssoctravelgroup): objAssoctravelgroup => {
    return {
        assocTravelGroupId: `${raw.assocTravelGroupId}`,travelGroupId: `${raw.travelGroupId}`,atAgency: `${raw.atAgency}`,timeCreated: `${raw.timeCreated}`
    }
}
        