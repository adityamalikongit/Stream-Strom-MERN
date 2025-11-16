import jwt from "jsonwebtoken";
import { ENV_VARS } from "../config/envVars.js";

export const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, ENV_VARS.JWT_SECRET, { expiresIn: "15d" });

  res.cookie("jwt-netflix", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
    httpOnly: true,
    sameSite: ENV_VARS.NODE_ENV === "production" ? "none" : "lax", // <-- allow cross-site in production
    secure: ENV_VARS.NODE_ENV === "production", // only HTTPS in prod
    domain: ENV_VARS.COOKIE_DOMAIN || undefined, // optional: set to frontend domain
  });

  return token;
};
