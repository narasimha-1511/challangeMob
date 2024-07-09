import { IContext, Idatabase } from "../interfaces";
import { IUserModel } from "../interfaces/models/user.model";
import UserModel from "./user.model";

export default class Context implements IContext {
  db: Idatabase;
  users: IUserModel;

  constructor(database: Idatabase) {
    this.db = database;
    this.users = new UserModel(database);
  }
}
