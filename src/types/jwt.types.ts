import { JwtPayload } from "jsonwebtoken";

export type CustomJWTPayload = JwtPayload & {
  id: number;
};
