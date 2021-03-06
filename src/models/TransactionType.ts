import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("transaction_types")
class TransactionType {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  transaction_type: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { TransactionType };
