const fastify = require("fastify");
const { initDB } = require("./database/connectDb");

const app = fastify();

// Route for user login
app.post("/", async (request, reply) => {
  reply.send({ name: "master project" });
});

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
