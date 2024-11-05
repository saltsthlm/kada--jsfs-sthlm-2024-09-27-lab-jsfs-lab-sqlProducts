import dotenv from "dotenv";

dotenv.config();

const requiredVars = [
  "HOST",
  "USER",
  "PASSWORD",
  "DATABASE",
  "PORT"
];

requiredVars.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Environment variable ${key} is not defined`);
  }
});

export const config = {
    host: process.env.HOST as string,
    port: Number(process.env.PORT),
    user: process.env.USER as string,
    password: process.env.PASSWORD as string,
    database: process.env.DATABASE as string,
};
