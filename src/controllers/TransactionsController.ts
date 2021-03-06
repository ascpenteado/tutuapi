import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { TransactionRepository } from "../repositories/TransactionRepository";

class TransactionController {
  async index(req: Request, res: Response) {
    const transactionRepository = getCustomRepository(TransactionRepository);
    const allAccounts = await transactionRepository.find();
    res.json(allAccounts);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const transactionRepository = getCustomRepository(TransactionRepository);
    const account = await transactionRepository.findOne({ id });
    res.json(account);
  }

  async create(req: Request, res: Response) {
    const { name, description, balance } = req.body;
    const transactionRepository = getCustomRepository(TransactionRepository);
    const account = transactionRepository.create({ name, description, balance });
    await transactionRepository.save(account);
    res.status(201).json(account);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, description, balance } = req.body;
    const transactionRepository = getCustomRepository(TransactionRepository);
    const account = await transactionRepository.save({ id, name, description, balance });
    res.json(account);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const transactionRepository = getCustomRepository(TransactionRepository);
    const account = await transactionRepository.delete({ id });
    res.json(account);
  }
}

export { TransactionController };
