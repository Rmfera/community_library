import { Router } from "express";
import loanControler from "../controller/loan.controller.js";
import { validate, validateLoanId } from "../middlewares/validation.middlewares.js";
import { loanSchema } from "../schema/loan.schema.js";

const router = Router();

router.post("/loans", validate(loanSchema), loanControler.createLoanController);

router.get("/loans", loanControler.findAllLoansController);
router.get("/loans/:id", validateLoanId, loanControler.findLoanByIdController);
router.delete("/loans/:id", validateLoanId, loanControler.deleteLoanController);

export default router;
