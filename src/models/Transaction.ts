import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Account } from "../models/Account";
import { TransactionType } from "../models/TransactionType";

@Entity("transactions")
class Transaction {
  @PrimaryColumn()
  readonly id: string;

  @ManyToOne((type) => TransactionType)
  transction_type: TransactionType;

  @Column()
  description: string;

  @Column()
  amount: number;

  @Column()
  due_date: Date;

  @ManyToOne(() => Account, (account) => account.transactions)
  account: Account;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Transaction };
