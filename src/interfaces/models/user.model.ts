import { Prisma, User } from "@prisma/client";

import { Idatabase } from "../index";

export interface IUserModel {
  db: Idatabase;

  create(args: Prisma.UserCreateArgs): Promise<User>;

  findUniqueEmail(args: Prisma.UserFindUniqueArgs): Promise<User | null>;

  delete(args: Prisma.UserDeleteArgs): Promise<User>;
}
