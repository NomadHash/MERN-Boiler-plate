import dotenv from "dotenv";
dotenv.config();

export default {
  SERVER_PORT: process.env.SERVER_PORT,
  DB_URL: process.env.DB_URL,
  SECRET_TOKEN: process.env.SECRET_TOKEN,
};
