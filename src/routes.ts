import { Router } from "express";
import { AccountController } from "./controllers/AccountsController";
import { TransactionController } from "./controllers/TransactionsController";

const router = Router();

const accountController = new AccountController();
const transactionController = new TransactionController();

router.get("/accounts", accountController.index);
router.post("/accounts", accountController.create);
router.get("/accounts/:id", accountController.show);
router.put("/accounts/:id", accountController.update);
router.delete("/accounts/:id", accountController.delete);

router.get("/transactions", transactionController.index);
router.post("/transactions", transactionController.create);
router.get("/transactions/:id", transactionController.show);
router.put("/transactions/:id", transactionController.update);
router.delete("/transactions/:id", transactionController.delete);

export default router;
