import dotenv from "dotenv";
dotenv.config();

export const ENV_VARS = {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT || 5000,
  JWT_SECRET: process.env.JWT_SECRET,
  NODE_ENV: process.env.NODE_ENV,
  TMDB_READ_ACCESS_TOKEN: process.env.TMDB_READ_ACCESS_TOKEN,
  COOKIE_DOMAIN: process.env.COOKIE_DOMAIN, // add this
};
