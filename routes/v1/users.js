const getalldaa = async (req, reply) => {
  await reply.send({ name: "sachin" });
};

const login = async (req, reply) => {
  await reply.send({ user: "sachin" });
};

module.exports = { getalldaa: getalldaa, login: login };
