import { Express, Router } from "express";
import { IContext } from "../interfaces";

export default abstract class AbstractRouter {
  #router: Router;
  #engine: Express;
  #path: string;
  ctx: IContext;

  constructor(ctx: IContext, engine: Express, path: string) {
    this.ctx = ctx;
    this.#engine = engine;
    this.#path = path;
    this.#router = Router();
  }
}
