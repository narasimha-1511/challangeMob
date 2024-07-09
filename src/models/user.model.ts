import { Prisma, User } from "@prisma/client";
import { Idatabase } from "../interfaces";
import { IUserModel } from "../interfaces/models/user.model";

export default class UserModel implements IUserModel {
  db: Idatabase;

  constructor(db: Idatabase) {
    this.db = db;
  }

  async create(args: Prisma.UserCreateArgs): Promise<User> {
    return this.db.client.user.create(args);
  }

  async findUniqueEmail(args: Prisma.UserFindUniqueArgs): Promise<User | null> {
    return this.db.client.user.findUnique(args);
  }

  async delete(args: Prisma.UserDeleteArgs): Promise<User> {
    return this.db.client.user.delete(args);
  }
}
