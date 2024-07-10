import getEnvVar from "@src/env";
import { sign, verify } from "jsonwebtoken";
import { CustomJWTPayload } from "@src/types/jwt.types";

export default class Jwt {
  static sign(payload: string): string {
    return sign({ id: payload }, getEnvVar("JWT_SECRET"), {
      expiresIn: "15d",
    });
  }

  static verify(token: string): CustomJWTPayload {
    return verify(token, getEnvVar("JWT_SECRET")) as CustomJWTPayload;
  }
}
