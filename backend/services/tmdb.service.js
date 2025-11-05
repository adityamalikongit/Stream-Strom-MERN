import axios from "axios";
import { ENV_VARS } from "../config/envVars.js";

export const fetchFromTMDB = async (url) => {
  console.log("🔍 Fetching from TMDB:", url);
  console.log("TMDB Token exists?", !!ENV_VARS.TMDB_READ_ACCESS_TOKEN);

  const response = await axios.get(url, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ENV_VARS.TMDB_READ_ACCESS_TOKEN}`,
    },
  });

  return response.data;
};
