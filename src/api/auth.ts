import { $api } from "./axiosInstance";
import type { User } from "./types/user";

export interface SignUpResponse {
  status: string;
  tokens: Tokens;
  user: User;
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export interface VerifyResponse {
  status: string;
  tokens: Tokens;
}

export interface LoginResponse {
  status: string;
  tokens: Tokens;
  user: User;
}

export async function signUp(data: {
  email: string;
  password: string;
}): Promise<SignUpResponse> {
  const res = await $api.post("/auth/register", {
    ...data,
    username: "default",
  });

  return res.data;
}

export async function signIn(data: {
  email: string;
  password: string;
}): Promise<LoginResponse> {
  const res = await $api.post("/auth/login", { ...data });

  return res.data;
}
