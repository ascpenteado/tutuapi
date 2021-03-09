import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { Account } from "../models/Account";
import { AccountRepository } from "../repositories/AccountRepository";
import { TransactionRepository } from "../repositories/TransactionRepository";

class TransactionController {
  async index(req: Request, res: Response) {
    const transactionRepository = getCustomRepository(TransactionRepository);
    try {
      const allTransactions = await transactionRepository.find();
      res.json(allTransactions);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const transactionRepository = getCustomRepository(TransactionRepository);
    try {
      const transaction = await transactionRepository.findOne({ id });
      res.json(transaction);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  async create(req: Request, res: Response) {
    const transactionRepository = getCustomRepository(TransactionRepository);
    const accountRepository = getCustomRepository(AccountRepository);
    const { transactionType, description, amount, dueDate, accountId } = req.body;
    try {
      const account = await accountRepository.findOne(accountId);
      const transaction = transactionRepository.create({
        transactionType,
        description,
        amount,
        dueDate,
        account,
      });
      await transactionRepository.save(transaction);
      res.status(201).json(transaction);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const transactionRepository = getCustomRepository(TransactionRepository);
    const accountRepository = getCustomRepository(AccountRepository);
    const { transactionType, description, amount, dueDate, accountId } = req.body;
    try {
      const account = await accountRepository.findOne(accountId);
      const transaction = await transactionRepository.save({
        id,
        transactionType,
        description,
        amount,
        dueDate,
        account,
      });
      res.status(201).json(transaction);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const transactionRepository = getCustomRepository(TransactionRepository);
    const account = await transactionRepository.delete({ id });
    res.json(account);
  }
}

export { TransactionController };
