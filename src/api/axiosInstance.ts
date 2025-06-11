import axios from "axios";

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const API_SSR_URL = process.env.NEXT_PUBLIC_API_SSR_URL;

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
