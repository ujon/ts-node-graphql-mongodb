import dotenv from "dotenv";
import path from "path";

export const load = (): void => {
  const { APP_STAGE } = process.env;
  switch (APP_STAGE) {
    case "dev":
      dotenv.config({ path: path.resolve(process.cwd(), "env/.env.dev") });
      break;
    case "prod":
      dotenv.config({ path: path.resolve(process.cwd(), "env/.env.prod") });
      break;
    default:
      throw new Error(`"process.env.APP_STAGE" is required`);
  }
};
