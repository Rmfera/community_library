import { userIdSchema } from "../schema/user.schema.js";
const validate = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    console.log(error.issues);
    res.status(400).json({ error: error.issues });
  }
};

const validateUserId = (req, res, next) => {
  try {
    // Este sinal de mais antes de req.params serve para converter o conteúdo em um número inteiro
    const userId = +req.params.id;    
    userIdSchema.parse({userId: userId})
    next();
  } catch (error) {
    console.log(error.issues);
    res.status(400).json({ error: error.issues });
  }
};

export { validate, validateUserId };
