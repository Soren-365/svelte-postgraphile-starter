import { QGeocoding as objGeocoding from '../graphqlQueriesMS/__generated__/QGeocoding }'

import { Geocoding  as gqlGeocoding } from '*.graphqls


const GeocodingTransform = (raw: gqlGeocoding): objGeocoding => {
    return {
        geoCodingId: `${raw.geoCodingId}`,locationLat: `${raw.locationLat}`,locationLng: `${raw.locationLng}`,locationType: `${raw.locationType}`,placesId: `${raw.placesId}`,formattedAdress: `${raw.formattedAdress}`,type: `${raw.type}`,viewportNorthEastLat: `${raw.viewportNorthEastLat}`,viewportNorthEastLng: `${raw.viewportNorthEastLng}`,viewportSouthWestLat: `${raw.viewportSouthWestLat}`,viewportSouthWestLng: `${raw.viewportSouthWestLng}`,createdById: `${raw.createdById}`,publishedById: `${raw.publishedById}`,lastModified: `${raw.lastModified}`,timeCreated: `${raw.timeCreated}`
    }
}
        