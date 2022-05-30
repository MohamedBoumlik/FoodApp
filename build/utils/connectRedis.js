"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
const redisUrl = `redis://localhost:6379`;
const redisClient = (0, redis_1.createClient)({
    url: redisUrl,
});
const connectRedis = async () => {
    try {
        await redisClient.connect();
        console.log('Redis client connected...');
    }
    catch (err) {
        console.log(err.message);
        setTimeout(connectRedis, 5000);
    }
};
connectRedis();
redisClient.on('error', (err) => console.log(err));
exports.default = redisClient;
//# sourceMappingURL=connectRedis.js.map