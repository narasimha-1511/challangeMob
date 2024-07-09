import Express, { Express as TExpress, Request, Response } from "express";
import cookieSession from "cookie-session";
// import logger from "../middlewares/logger.middleware";
import getEnvVar from "../env/index";
import { Idatabase } from "../interfaces";
import Context from "../models/Context";
import login from "./firebase";
import cors from "cors";
import dbbb from "./ff";

export default class Server {
  db: Idatabase;
  engine: TExpress;

  constructor(database: Idatabase) {
    this.db = database;
    this.engine = Express();
  }

  #registerMiddlewares() {
    this.engine.use(Express.json());
    // this.engine.use(logger);
    this.engine.use(cors());

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

    const ctx = new Context(this.db);

    this.engine.post("/user", async (req: Request, res: Response) => {
      const { username, password } = req.body;

      await login(username, password)
        .then((result) => {
          return res.json({
            message: result,
            login: true,
          });
        })
        .catch((error) => {
          return res.json({
            message: error,
            login: false,
          });
        });
    });

    interface courseData {
      week: number;
      title: string;
      img_src: string;
      new_field: string;
      assests: any[];
    }

    this.engine.get("/courses", async (req: Request, res: Response) => {
      try {
        const courseCollectionn = await dbbb.collection("course").get();

        const courses: courseData[] = [];

        courseCollectionn.forEach((doc: any) => {
          courses.push({ ...(doc.data() as courseData) });
        });

        return res.json({ courses });
      } catch (err) {
        return res.json({ message: err });
      }
    });
  }

  start() {
    this.#registerMiddlewares();

    this.engine.listen(parseInt(getEnvVar("SERVER_PORT")), () => {
      console.log("Server is running on port 3000");
    });
  }
}
