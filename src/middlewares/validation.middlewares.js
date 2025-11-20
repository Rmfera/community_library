import { userIdSchema } from "../schema/user.schema.js";
import { bookIdSchema } from "../schema/book.schema.js";
import { loanIdSchema } from "../schema/loan.schema.js";

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
    userIdSchema.parse({ userId: userId });
    next();
  } catch (error) {
    console.log(error.issues);
    res.status(400).json({ error: error.issues });
  }
};

const validateBookId = (req, res, next) => {
  try {
    bookIdSchema.parse({ bookId: +req.params.id });
    next();
  } catch (e) {
    res.status(400).json({ error: e.issues });
  }
};

const validateLoanId = (req, res, next) => {
  try {
    loanIdSchema.parse({ loanId: +req.params.id });
    next();
  } catch (error) {
    res.status(400).json({ error: error.issues });
  }
};
export { validate, validateUserId, validateBookId, validateLoanId };
