import Express, { Express as TExpress, Request, Response } from "express";
// import cookieSession from "cookie-session";
import cookies from "cookie-parser";
import logger from "../middlewares/logger.middleware";
import getEnvVar from "../env/index";
import { Idatabase } from "../interfaces";
import Context from "../models/Context";
import login, { resetPassword } from "./firebase";
import cors from "cors";
import dbbb from "./ff";
import Jwt from "@src/utils/jwt";

export default class Server {
  db: Idatabase;
  engine: TExpress;

  constructor(database: Idatabase) {
    this.db = database;
    this.engine = Express();
  }


  #registerMiddlewares() {
    const allowedOrigins = [
      "https://challengeplatform.vercel.app",
      "https://www.thechallengemob.tech",
    ];

    this.engine.use(Express.json());
    this.engine.use(logger);
    this.engine.use(
      cors({
        origin: function (origin, callback) {
          if (!origin) return callback(null, true); // Allow requests with no origin, like mobile apps or curl requests
          if (allowedOrigins.indexOf(origin) === -1) {
            const msg =
              "The CORS policy for this site does not allow access from the specified origin.";
            return callback(new Error(msg), false);
          }
          return callback(null, true);
        },
        credentials: true,
      })
    );
    this.engine.use(cookies());

    // this.engine.use(
    //   cookieSession({
    //     signed: false,
    //     secure: false,
    //   })
    // );

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
        .then(async (result) => {
          const token = Jwt.sign(username);

          res.cookie("jwt", token, {
            httpOnly: false,
            secure: true,
            sameSite: "none",
          });

          return res.json({
            message: "Logged in successfully",
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

    this.engine.get("/coursess", async (req: Request, res: Response) => {
      try {
        console.log(req.headers);
        console.log(req.cookies);
        const jwttoken = req.cookies.jwt;

        if (!jwttoken) {
          console.log("No token");
          return res.json({ message: "Unauthorized" });
        }

        const decoded = Jwt.verify(jwttoken);

        console.log(decoded);

        if (!decoded) {
          return res.json({ message: "Unauthorized" });
        }

        const courseCollectionn = await dbbb.collection("course").get();

        const courses: courseData[] = [];

        courseCollectionn.forEach((doc: any) => {
          courses.push({ ...(doc.data() as courseData) });
        });

        return res.json({ courses });
      } catch (err) {
        console.log(err);
        return res.status(400).json({ message: "Internal server error" });
      }
    });

    this.engine.get("/courses", async (req: Request, res: Response) => {
      try {
        const courseCollectionn = await dbbb.collection("course").get();

        const courses: courseData[] = [];

        courseCollectionn.forEach((doc: any) => {
          courses.push({ ...(doc.data() as courseData) });
        });

        return res.json({ courses });
      } catch (err) {
        console.log(err);
        return res.status(400).json({ message: "Internal server error" });
      }
    });

    this.engine.post("/forgotpass", async (req: Request, res: Response) => {
      try {
        const { email } = req.body;
        resetPassword(email)
          .then((ress) => {
            console.log(ress);
            return res.json({ message: "Reset email sent!" });
          })
          .catch((error) => {
            console.log(error);
            return res.json({ message: "Reset email failed!" });
          });
      } catch (err) {
        console.log("error while forgot passwordx", err);
        return res.status(400).json({ message: "Internal server error" });
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
