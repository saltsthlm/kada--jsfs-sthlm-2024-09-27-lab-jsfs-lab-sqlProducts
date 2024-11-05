import dotenv from "dotenv";

dotenv.config();

const requiredVars = [
  "PGHOST",
  "PGUSER",
  "PGPASSWORD",
  "PGDATABASE",
  "PGPORT"
];

requiredVars.forEach((key) => {
  if (!process.env[key]) {
    console.error(`Missing environment variable: ${key}`);
    throw new Error(`Environment variable ${key} is not defined`);
  }
});

export const config = {
  host: process.env.PGHOST as string,
  port: Number(process.env.PGPORT),
  user: process.env.PGUSER as string,
  password: process.env.PGPASSWORD as string,
  database: process.env.PGDATABASE as string,
};
