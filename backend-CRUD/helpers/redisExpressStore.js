
const redis = require('redis')
const session = require('express-session')
let RedisStore = require('connect-redis')(session)
const dotenv = require('dotenv');
dotenv.config({ path: '../config/config.env' });

let redis_host = ""
process.env.NODE_ENV ? redis_host = process.env.REDIS_HOST : redis_host = "127.0.0.1"
console.log("redis_host @: ", redis_host)

let redisClient = redis.createClient({ host: redis_host, auth_pass: process.env.REDIS_AUTH })
redisClient.auth(process.env.REDIS_AUTH)
redisClient.on("error", function (error) {
    console.error(error);
});
const redisCheck = function () {
    redisClient.set("userEmail", "Redis test OK", redis.print);
    redisClient.get("userEmail", redis.print);
}

redisCheck()
//console.log("redisCheck test", typeof (redisCheck), redisCheck)

module.exports =  
{
    redisCheck,
    session,
    RedisStore,
    redisClient
}