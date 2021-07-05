import { QLanguagelevel as objLanguagelevel from '../graphqlQueriesMS/__generated__/QLanguagelevel }'

import { Languagelevel  as gqlLanguagelevel } from '*.graphqls


const LanguagelevelTransform = (raw: gqlLanguagelevel): objLanguagelevel => {
    return {
        languageLevelId: `${raw.languageLevelId}`,langauges: `${raw.langauges}`,langaugesSkill: `${raw.langaugesSkill}`,isActive: `${raw.isActive}`,createdById: `${raw.createdById}`,publisherId: `${raw.publisherId}`,timeCreated: `${raw.timeCreated}`
    }
}
        