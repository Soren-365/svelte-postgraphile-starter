import { QUsertable as objUsertable from '../graphqlQueriesMS/__generated__/QUsertable }'

import { Usertable  as gqlUsertable } from '*.graphqls


const UsertableTransform = (raw: gqlUsertable): objUsertable => {
    return {
        userId: `${raw.userId}`,firstName: `${raw.firstName}`,lastName: `${raw.lastName}`,userEmail: `${raw.userEmail}`,atAgency: `${raw.atAgency}`,isAdmin: `${raw.isAdmin}`,atGuide: `${raw.atGuide}`,atTourist: `${raw.atTourist}`,timeCreated: `${raw.timeCreated}`,isActive: `${raw.isActive}`,isRomanian: `${raw.isRomanian}`
    }
}
        