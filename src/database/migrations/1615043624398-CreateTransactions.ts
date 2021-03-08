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
            type: "uuid",
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
          {
            name: "accountId",
            type: "uuid",
          },
        ],
        foreignKeys: [
          {
            name: "accountId",
            referencedTableName: "accounts",
            referencedColumnNames: ["id"],
            columnNames: ["id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "transactionTypeId",
            referencedTableName: "transaction_types",
            referencedColumnNames: ["id"],
            columnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("transactions");
  }
}
