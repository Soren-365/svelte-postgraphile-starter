import { QContact as objContact from '../graphqlQueriesMS/__generated__/QContact }'

import { Contact  as gqlContact } from '*.graphqls


const ContactTransform = (raw: gqlContact): objContact => {
    return {
        contactId: `${raw.contactId}`,firstName: `${raw.firstName}`,lastName: `${raw.lastName}`,associatedCompany: `${raw.associatedCompany}`,street: `${raw.street}`,city: `${raw.city}`,postCode: `${raw.postCode}`,country: `${raw.country}`,telephone: `${raw.telephone}`,email: `${raw.email}`,isCompany: `${raw.isCompany}`,createdById: `${raw.createdById}`,belongsToType: `${raw.belongsToType}`,atId: `${raw.atId}`,timeCreated: `${raw.timeCreated}`
    }
}
        