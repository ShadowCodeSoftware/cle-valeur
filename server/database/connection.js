const REDIS_PORT = process.env.PORT || 6379;
const redisConf = {
    host: 'localhost',
    port: '6379',
    pass: ''
}

const client = redis.createClient(redisConf);

