import { Router } from "express";
import loanControler from "../controller/loan.controller.js";
import {
  validate,
  validateLoanId,
} from "../middlewares/validation.middlewares.js";
import { loanSchema } from "../schema/loan.schema.js";

const router = Router();

router.post("/", validate(loanSchema), loanControler.createLoanController);

router.get("/", loanControler.findAllLoansController);
router.get("/:id", validateLoanId, loanControler.findLoanByIdController);
router.delete("/:id", validateLoanId, loanControler.deleteLoanController);

export default router;
