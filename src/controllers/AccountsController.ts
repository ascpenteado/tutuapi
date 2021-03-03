import { Request, Response } from "express";

class AccountController {
  async show(req: Request, res: Response) {
    res.send("hello, accounts!");
  }

  async create(req: Request, res: Response) {
    res.send("hello, accounts!");
  }
}

export { AccountController };
