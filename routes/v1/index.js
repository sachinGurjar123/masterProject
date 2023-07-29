const userRoutes = require("./users");

// all routes
const routes = async (fastify) => {
  await fastify.get("/", userRoutes.getalldaa);
  await fastify.get("/login", userRoutes.login);
};

module.exports = routes;
