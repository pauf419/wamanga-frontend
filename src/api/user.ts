// api/user.ts
import { $apiWithoutAuth } from "./axiosInstance";
import type { User } from "./types/user";

export async function getAllUsers(tokens: {
  accessToken?: string;
  refreshToken?: string;
}): Promise<User[]> {
  try {
    const cookieHeader = `access_token=${tokens.accessToken}; refresh_token=${tokens.refreshToken}`;

    const res = await $apiWithoutAuth.get("/user/all", {
      headers: {
        Cookie: cookieHeader,
      },
    });

    return res.data;
  } catch (e) {
    console.log(e);
    return [];
  }
}
