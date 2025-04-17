import type { AxiosResponse } from "axios";
import type { LoginResponse, SignUpResponse } from "./auth";
import { $api } from "./axiosInstance";
import type { ComicComment } from "./types/comic-comment";

export async function signUp(data: {
  email: string;
  password: string;
}): Promise<SignUpResponse> {
  const res = await $api.post("http://localhost:3001/auth/register", {
    ...data,
    username: "default",
  });

  return res.data;
}

export async function signIn(data: {
  email: string;
  password: string;
}): Promise<LoginResponse> {
  const res = await $api.post("http://localhost:3001/auth/login", { ...data });

  return res.data;
}

export async function getComments(
  type: "comic" | "chapter",
  id: string
): Promise<ComicComment[]> {
  let res: AxiosResponse<ComicComment[]>;
  switch (type) {
    case "comic":
      res = await $api.get(`http://localhost:3001/comments/manga/${id}`);
      break;
    case "chapter":
      res = await $api.get(`http://localhost:3001/comments/chapter/${id}`);
      break;
    default:
      throw new Error("Invalid type");
  }

  return res.data;
}
