import { QAccount as objAccount from '../graphqlQueriesMS/__generated__/QAccount }'

import { Account  as gqlAccount } from '*.graphqls


const AccountTransform = (raw: gqlAccount): objAccount => {
    return {
        accountId: `${raw.accountId}`,emailHash: `${raw.emailHash}`,passwordHash: `${raw.passwordHash}`,sessionId: `${raw.sessionId}`,logins: `${raw.logins}`
    }
}
        