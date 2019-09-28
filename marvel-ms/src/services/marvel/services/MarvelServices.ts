import { Md5Generator } from "../utils";
import axios from "axios";

// Declate KEYS
const {
  PUBLIC_KEY,
  MARVEL_URL,
  PRIVATE_KEY,
  TS
} = require("../../../config/config");

// Generate md5 hash
const HASH = Md5Generator(TS, PRIVATE_KEY, PUBLIC_KEY);

export const marvelServiceAPI = (PATH: String) => {
  return axios.get(
    `${MARVEL_URL}/${PATH}?ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`
  );
};
