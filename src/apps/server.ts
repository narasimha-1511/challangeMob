import Express, { Express as TExpress } from "express";
import cookieSession from "cookie-session";
import logger from "../middlewares/logger.middleware";
import getEnvVar from "../env/index";

export default class Server {
  engine: TExpress;

  constructor() {
    this.engine = Express();
  }

  #registerMiddlewares() {
    this.engine.use(Express.json());
    this.engine.use(logger);

    this.engine.use(
      cookieSession({
        signed: false,
        secure: false,
      })
    );

    this.engine.get("/health", (_, res) => {
      return res.sendStatus(200);
    });

    this.engine.get("/", (_, res) => {
      return res.sendStatus(200);
    });
  }

  start() {
    this.#registerMiddlewares();

    this.engine.listen(parseInt(getEnvVar("SERVER_PORT")), () => {
      console.log("Server is running on port 3000");
    });
  }
}
