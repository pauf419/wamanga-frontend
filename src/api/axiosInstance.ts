import axios from "axios";

export const API_URL = "http://localhost:3011";
export const API_SSR_URL = "https://wamanga.ru/api/v1";

export const $api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  timeout: 4000,
});

export const $apiWithoutAuth = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  timeout: 4000,
});

export const $apiSSR = axios.create({
  baseURL: API_SSR_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  timeout: 4000,
});
