const fastify = require("fastify");
const { initDB } = require("./database/connectDb");
const routes = require("./routes/v1");
const app = fastify();
app.register(require("@fastify/cors"));
app.register(routes);

// Start the server
const start = async () => {
  try {
    await initDB();
    await app.listen(3000);
    console.log("Server running on port 3000");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
start();
