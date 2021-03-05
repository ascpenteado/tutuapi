import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AccountRepository } from "../repositories/AccountRepository";

class AccountController {
  async index(req: Request, res: Response) {
    const accountRepository = getCustomRepository(AccountRepository);
    const allAccounts = await accountRepository.find();
    res.json(allAccounts);
  }

  async show(req: Request, res: Response) {}

  async create(req: Request, res: Response) {
    const { accountData } = req.body;
    const accountRepository = getCustomRepository(AccountRepository);
    const account = accountRepository.create(accountData);
    await accountRepository.save(account);
    res.json(account);
  }

  async update(req: Request, res: Response) {}

  async delete(req: Request, res: Response) {}
}

export { AccountController };
