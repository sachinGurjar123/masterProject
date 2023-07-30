const joi = require("joi");

module.exports = {
  email: joi.string().max(50).messages(),
};
