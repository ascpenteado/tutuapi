import { Router } from "express";
import { AccountController } from "./controllers/AccountsController";

const router = Router();

const accountController = new AccountController();

router.get("/accounts", accountController.show);

export default router;
