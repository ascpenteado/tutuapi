import Faker from "faker";
import { Transaction } from "../../models/Transaction";
import { define, factory } from "typeorm-seeding";
import { Account } from "../../models/Account";
import { TransactionType } from "../../models/TransactionType";

define(Transaction, (faker: typeof Faker) => {
  const account = factory(Account)() as any;
  const transactionType = factory(TransactionType)() as any;
  const amount = Number(faker.finance.amount());
  const description = faker.finance.transactionDescription();
  const dueDate = faker.date.soon();

  const transaction = new Transaction();
  transaction.account = account;
  transaction.amount = amount;
  transaction.description = description;
  transaction.due_date = dueDate;
  transaction.transction_type = transactionType;
  return transaction;
});
