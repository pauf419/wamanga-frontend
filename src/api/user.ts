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

export async function editUserAdmin(body: User): Promise<User> {
  const res = await $apiWithoutAuth.post<User>("/user/admin/edit", body);

  return res.data;
}

export async function assignManga(
  userId: string,
  ids: string[],
  all: boolean
): Promise<User> {
  const res = await $apiWithoutAuth.post<User>(`/user/${userId}/assign`, {
    ids,
    allMangaAssigned: all,
  });

  return res.data;
}
