const userRoutes = require("./users");

// all routes
const routes = async (fastify) => {
  await fastify.post("/login", userRoutes.login);
};

module.exports = routes;
