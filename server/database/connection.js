const redis = require('redis');


const REDIS_PORT = process.env.PORT || 6379;
const redisConf = {
    host: 'localhost',
    port: '6379',
    pass: ''
}

const client = redis.createClient(redisConf);

(async () => {
    await client.connect();
})();
  
console.log("Connecting to the Redis");
  
client.on("ready", () => {
    console.log("Connected!");
});
  
client.on("error", (err) => {
    console.log("Error in the Connection");
});

module.exports = client