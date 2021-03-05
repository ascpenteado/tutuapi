import request from "supertest";
import { getConnection } from "typeorm";
import { app } from "../app";

import createConnection from "../database";

describe("Accounts", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    const connection = getConnection();
    await connection.dropDatabase();
    await connection.close();
  });

  it("Should be able to create a new account", async () => {
    const response = await request(app).post("/accounts").send({
      name: "Test account",
      description: "This is test account #1",
      balance: 5.0,
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
  });

  it("Should be able to get all surveys", async () => {
    await request(app).post("/accounts").send({
      name: "Test account 2",
      description: "This is test account #2",
      balance: 15.0,
    });

    const response = await request(app).get("/accounts");

    expect(response.body.length).toBe(2);
  });
});
