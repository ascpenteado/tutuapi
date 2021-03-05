import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AccountRepository } from "../repositories/AccountRepository";

class AccountController {
  async index(req: Request, res: Response) {
    const accountRepository = getCustomRepository(AccountRepository);
    const allAccounts = await accountRepository.find();
    res.json(allAccounts);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const accountRepository = getCustomRepository(AccountRepository);
    const account = await accountRepository.findOne({ id });
    res.json(account);
  }

  async create(req: Request, res: Response) {
    const { name, description, balance } = req.body;
    const accountRepository = getCustomRepository(AccountRepository);
    const account = accountRepository.create({ name, description, balance });
    await accountRepository.save(account);
    res.json(account);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, description, balance } = req.body;
    const accountRepository = getCustomRepository(AccountRepository);
    const account = await accountRepository.save({ id, name, description, balance });
    res.json(account);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const accountRepository = getCustomRepository(AccountRepository);
    const account = await accountRepository.delete({ id });
    res.json(account);
  }
}

export { AccountController };
