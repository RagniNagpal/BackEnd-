const { createClient } = require("redis");

async function connectRedis() {
  const client = createClient({
    url: "redis://localhost:6379"
  });

  client.on("error", (err) => console.error("Redis Client Error", err));

  await client.connect();
  console.log("Connected to Redis");

  // Simple key-value
  // await client.set("message", "Hello Redis");
  // const value = await client.get("message");
  // console.log("Stored value:", value);

  await client.del("user");
  // Hash example
  await client.hSet("user", "name", "Ragni");
  const userData = await client.hGetAll("user");
  console.log("User data from hash:", userData);

  await client.quit();
}

connectRedis();