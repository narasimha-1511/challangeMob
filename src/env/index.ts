import { z } from "zod";
import { config } from "dotenv";

const envSchema = z.object({
  SERVER_PORT: z.string(),
  DATABASE_URL: z.string(),
  JWT_SECRET: z.string(),
});

export const parseEnv = (): void => {
  config();
  envSchema.parse(process.env);
};

const getEnvVar = (key: keyof z.infer<typeof envSchema>): string => {
  return process.env[key] as string;
};

export default getEnvVar;
