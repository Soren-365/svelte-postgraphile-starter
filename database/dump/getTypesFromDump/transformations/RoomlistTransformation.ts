import { QRoomlist as objRoomlist from '../graphqlQueriesMS/__generated__/QRoomlist }'

import { Roomlist  as gqlRoomlist } from '*.graphqls


const RoomlistTransform = (raw: gqlRoomlist): objRoomlist => {
    return {
        roomListId: `${raw.roomListId}`,atAccomodation: `${raw.atAccomodation}`,roomNames: `${raw.roomNames}`,roomNumPeople: `${raw.roomNumPeople}`,roomCalendarId: `${raw.roomCalendarId}`,roomPrices: `${raw.roomPrices}`,roomActive: `${raw.roomActive}`
    }
}
        