import { headers } from "next/headers";
import { $apiWithoutAuth } from "./axiosInstance";
import type { Nonce } from "./types/nonce";

export async function createChapterNonce(
  chapterId: string,
  tokens: {
    accessToken?: string;
    refreshToken?: string;
  }
): Promise<Nonce | undefined> {
  try {
    const cookieHeader = `access_token=${tokens.accessToken}; refresh_token=${tokens.refreshToken}`;
    const res = await $apiWithoutAuth.post(
      `/nonce/chapter/${chapterId}`,
      {},
      {
        headers: {
          Cookie: cookieHeader,
        },
      }
    );

    return res.data;
  } catch (e) {
    console.error(e);
    return undefined;
  }
}

export async function closeChapterNonce(nonceId: string) {
  const res = await $apiWithoutAuth.post(`/nonce/${nonceId}/chapter/close`);
  return res.data;
}
