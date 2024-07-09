import Server from "./apps/server";
import Database from "./apps/database";
import { parseEnv } from "./env";

parseEnv();

const database = new Database();
const server = new Server(database);
server.start();
