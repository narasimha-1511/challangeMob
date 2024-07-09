import { Prisma, PrismaClient } from "@prisma/client";
import { IUserModel } from "./models/user.model";

export type txClient = Omit<
  PrismaClient<Prisma.PrismaClientOptions, never>,
  "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends"
>;

export interface Idatabase {
  client: PrismaClient | txClient;
}

export interface IContext {
  db: Idatabase;
  users: IUserModel;
}
