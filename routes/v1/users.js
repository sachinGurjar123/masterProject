const login = async (request, reply, next) => {
  console.log(request.body);
};

module.exports = { login: login };
