import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Account } from "../models/Account";

@Entity("transactions")
class Transaction {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  transactionType: string;

  @Column()
  description: string;

  @Column()
  amount: number;

  @Column()
  dueDate: Date;

  @ManyToOne(() => Account, (account) => account.transactions)
  account: Account;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Transaction };
