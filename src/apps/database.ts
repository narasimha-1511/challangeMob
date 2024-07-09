import { PrismaClient } from "@prisma/client";
import getEnvVar from "../env";
import { txClient, Idatabase } from "../interfaces";

export default class Database {
  client: PrismaClient | txClient;

  constructor(txClient?: txClient) {
    if (txClient != undefined) {
      this.client = txClient;
      return;
    }

    this.client = new PrismaClient({
      datasourceUrl: getEnvVar("DATABASE_URL"),
    });

    console.log("Database connection Successful");
  }
}
