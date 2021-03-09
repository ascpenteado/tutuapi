import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Transaction } from "../models/Transaction";

@Entity("accounts")
class Account {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  balance: number;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Transaction, (transaction) => transaction.account)
  transactions: Transaction[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Account };
