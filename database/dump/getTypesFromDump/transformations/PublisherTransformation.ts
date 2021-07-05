import { QPublisher as objPublisher from '../graphqlQueriesMS/__generated__/QPublisher }'

import { Publisher  as gqlPublisher } from '*.graphqls


const PublisherTransform = (raw: gqlPublisher): objPublisher => {
    return {
        publisherId: `${raw.publisherId}`,publisherName: `${raw.publisherName}`,refersToId: `${raw.refersToId}`,isAgency: `${raw.isAgency}`,isTourist: `${raw.isTourist}`,isGuide: `${raw.isGuide}`,canReview: `${raw.canReview}`,canPublish: `${raw.canPublish}`,isRomanian: `${raw.isRomanian}`,isActive: `${raw.isActive}`,belongsToType: `${raw.belongsToType}`,command: `${raw.command}`,timeCommand: `${raw.timeCommand}`,timeCreated: `${raw.timeCreated}`,createdById: `${raw.createdById}`
    }
}
        