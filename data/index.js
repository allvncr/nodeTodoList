const Joi = require("joi");
let todos = [];

function validationData(body) {
  const schema = Joi.object({
    lib: Joi.string().min(3).required(),
    done: Joi.bool(),
  });

  return schema.validate(body);
}

module.exports = {
  todos,
  validationData,
};
