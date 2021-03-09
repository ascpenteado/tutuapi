import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTransactions1615043624398 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "transactions",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "transactionType",
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
            name: "dueDate",
            type: "timestamp",
          },
          {
            name: "accountId",
            type: "uuid",
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updatedAt",
            type: "timestamp",
          },
        ],
        foreignKeys: [
          {
            name: "FKAccountId",
            referencedTableName: "accounts",
            referencedColumnNames: ["id"],
            columnNames: ["accountId"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("transactions");
  }
}
