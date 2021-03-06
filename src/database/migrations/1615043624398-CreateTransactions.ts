import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTransactions1615043624398 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: "transactions",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "transaction_type",
            type: "varchar",
          },
          {
            name: "description",
            type: "text",
          },
          {
            name: "amount",
            type: "decimal",
          },
          {
            name: "due_date",
            type: "timestamp",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
