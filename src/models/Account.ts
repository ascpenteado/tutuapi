import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("accounts")
class Account {
  @PrimaryColumn() readonly id: string;

  @Column() name: string;

  @Column() description: string;

  @Column() balance: number;

  @CreateDateColumn() created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Account };
