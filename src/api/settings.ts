import { $apiWithoutAuth } from "./axiosInstance";
import type { Settings } from "./types/settings";

export async function updateSettings(payload: Settings): Promise<Settings> {
  const res = await $apiWithoutAuth.patch("/settings", payload);

  return res.data;
}

export async function getSettings(): Promise<Settings> {
  const res = await $apiWithoutAuth.get("/settings");

  return res.data;
}
