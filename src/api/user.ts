// api/user.ts
import { $apiWithoutAuth } from "./axiosInstance";
import type { Comic, ProcessingManga } from "./types/comic";
import type { Team } from "./types/team";
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

export interface HomePageResponse {
  rec: Comic[];
  team: Team[];
  recently: Comic[];
  top: Comic[];
  topChupter: Comic[];
  random: Comic[];
}

export async function getHomePage(tokens: {
  accessToken?: string;
  refreshToken?: string;
}): Promise<HomePageResponse> {
  try {
    const cookieHeader = `access_token=${tokens.accessToken}; refresh_token=${tokens.refreshToken}`;

    const res = await $apiWithoutAuth.get("/user/homePage", {
      headers: {
        Cookie: cookieHeader,
      },
    });
    return res.data;
  } catch (e) {
    console.error(e);
    return {
      rec: [],
      team: [],
      topChupter: [],
      top: [],
      random: [],
      recently: [],
    };
  }
}

export async function toggleUserSettings(fieldName: string): Promise<User> {
  const res = await $apiWithoutAuth.post<User>(
    `/user/settings/toggle/${fieldName}`
  );

  return res.data;
}

export async function getProcessingMangas(tokens: {
  accessToken?: string;
  refreshToken?: string;
}): Promise<ProcessingManga[] | undefined> {
  try {
    const cookieHeader = `access_token=${tokens.accessToken}; refresh_token=${tokens.refreshToken}`;

    const res = await $apiWithoutAuth.get("/user/processing", {
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

export async function getUserInfo(userId: string): Promise<User> {
  const res = await $apiWithoutAuth.get<User>(`/user/${userId}`);

  return res.data;
}
