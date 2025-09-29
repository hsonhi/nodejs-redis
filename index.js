const redis = require('redis');

// Create a Redis client
const client = redis.createClient({
  host: 'localhost', // or your Redis server host
  port: 6379,       // or your Redis server port
  password: 'your_redis_password' // if your Redis server requires authentication
});

// Handle connection events
client.on('connect', () => {
  console.log('Connected to Redis!');
});

client.on('error', (err) => {
  console.error('Redis error:', err);
});

// Example usage: setting and getting a key
async function exampleUsage() {
  await client.set('myKey', 'myValue');
  const value = await client.get('myKey');
  console.log('Value retrieved:', value);
}

exampleUsage();