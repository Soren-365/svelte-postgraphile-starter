const dotenv = require("dotenv");
dotenv.config({ path: "config/config.env" });

import Fastify from "fastify";
const app = Fastify({});

import { PostGraphileResponseFastify3 } from "postgraphile";

// Converts a PostGraphile handler to a Fastify v3 handler
const convertHandler = (handler) => (request, reply) =>
  handler(new PostGraphileResponseFastify3(request, reply));

const { postgraphile, makePluginHook } = require("postgraphile");
const { default: PgPubsub } = require("@graphile/pg-pubsub");

const redis = require('redis')
const  {redisCheck,  session,  RedisStore,  redisClient } = require('../helpers/redisExpressStore')



const pluginHook = makePluginHook([PgPubsub]);

const postgraphileOptionsDev = {
  watchPg: true,
  dynamicJson: true,
  setofFunctionsContainNulls: false,
  ignoreRBAC: false,
  ignoreIndexes: false,
  showErrorStack: "json",
  extendedErrors: ["hint", "detail", "errcode"],
  appendPlugins: [require("@graphile-contrib/pg-simplify-inflector"),   require("@graphile/subscriptions-lds").default],
  exportGqlSchemaPath: "schema.graphql",
  graphiql: true,
  enhanceGraphiql: true,
  allowExplain(req) {
    // TODO: customise condition!
    return true;
  },
  enableQueryBatching: true,
  legacyRelations: "omit",
  pluginHook,
//   subscriptions: true,
//   simpleSubscriptions: true,
  live: true,
  ownerConnectionString: process.env.ROOT_DATABASE_URL,
  websocketMiddlewares: [
    // Add whatever middlewares you need here, note that they should only
    // manipulate properties on req/res, they must not sent response data. e.g.:
    //
   session({
    store: new RedisStore({ client: redisClient }),
    resave: false,
    saveUninitialized: false,
    secret: 'SuNg2gGT1dhfnzvxzmmT',
    maxAge: 157248000000,
    cookie: { path: '/', httpOnly: true, secure: false, expires: 157248000000, sameSite: 'lax'},
    unset: 'destroy'
  }),
    //   require('passport').initialize(),
    //   require('passport').session(),
  ],
   pgSettings(req) {
    /* TODO */
  },
};

const postgraphileOptionsProd = {
  retryOnInitFail: true,
  dynamicJson: true,
  setofFunctionsContainNulls: false,
  ignoreRBAC: false,
  ignoreIndexes: false,
  extendedErrors: ["errcode"],
  appendPlugins: [require("@graphile-contrib/pg-simplify-inflector"),   require("@graphile/subscriptions-lds").default],
  graphiql: false,
  enableQueryBatching: true,
  disableQueryLog: true, // our default logging has performance issues, but do make sure you have a logging system in place!
  legacyRelations: "omit",
  pluginHook,
  subscriptions: true,
  simpleSubscriptions: true,
  live: true,
  ownerConnectionString: process.env.ROOT_DATABASE_URL,
  websocketMiddlewares: [
    // Add whatever middlewares you need here, note that they should only
    // manipulate properties on req/res, they must not sent response data. e.g.:
    //
    //   require('express-session')(),
    //   require('passport').initialize(),
    //   require('passport').session(),
  ],
  pgSettings(req) {
    /* TODO */
  },
};

const middleware = postgraphile(
  process.env.DATABASE_URL ||
    "postgresql://cursuri_user:cursuri_pass@localhost:5432/cursuri_db",
  "public",
  postgraphileOptionsDev
);


  app.register(require('fastify-cors'), { 
    // origin: (origin, cb) => {
    //     if(/localhost$/.test(origin)){
    //       //  Request from localhost will pass
    //       cb(null, true)
    //       return
    //     }

    //        // Generate an error on other origins, disabling access
    //     cb(new Error("Not allowed"))

  
    //   },
      origin: ["http://localhost:5000"],
      methods: ['GET', 'PUT', 'POST'],
      credentials: true,
  })  


  
//   baseUrl = req.protocol + "://" + req.headers.host;
//   baseOrigin = req.headers.origin;

//  // console.log("baseOrigin", baseOrigin)

//   res.header('Access-Control-Allow-Origin', baseOrigin);
//   //  res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Credentials', true);
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
//   next();

// OPTIONS requests, for CORS/etc
app.options(
  middleware.graphqlRoute,
  convertHandler(middleware.graphqlRouteHandler)
);

// This is the main middleware
app.post(
  middleware.graphqlRoute,
  convertHandler(middleware.graphqlRouteHandler)
);

// GraphiQL, if you need it
//console.log("options graphiql",middleware.options.graphiql)
//console.log("middleware options",middleware.options)
//console.log("middleware.graphiqlRoute",middleware.graphiqlRoute)
//console.log("middleware.graphiqlRouteHandler",convertHandler(middleware.graphiqlRouteHandler)())
if (middleware.options.graphiql) {
  if (middleware.graphiqlRouteHandler) {
    app.head(
      middleware.graphiqlRoute,
      convertHandler(middleware.graphiqlRouteHandler)
    );
    app.get(
      middleware.graphiqlRoute,
      convertHandler(middleware.graphiqlRouteHandler)
    );
  }
  // Remove this if you don't want the PostGraphile logo as your favicon!
  if (middleware.faviconRouteHandler) {
    app.get("/favicon.ico", convertHandler(middleware.faviconRouteHandler));
  }
}

// If you need watch mode, this is the route served by the
// X-GraphQL-Event-Stream header; see:
// https://github.com/graphql/graphql-over-http/issues/48
//   if (middleware.options.watchPg) {
//     if (middleware.eventStreamRouteHandler) {
//       app.options(
//         middleware.eventStreamRoute,
//         convertHandler(middleware.eventStreamRouteHandler)
//       );
//       app.get(
//         middleware.eventStreamRoute,
//         convertHandler(middleware.eventStreamRouteHandler)
//       );
//     }
// //   }
// console.log("listening on",`${process.env.CRUD_BACKEND_PORT}`)
app.listen(process.env.CRUD_BACKEND_PORT || 5001,() => console.log( "listening on",`${process.env.CRUD_BACKEND_PORT || 5001}`));

