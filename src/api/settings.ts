import { $apiWithoutAuth } from "./axiosInstance";
import type { Settings } from "./types/settings";

export async function updateSettings(
  payload: Settings,
  logo: File
): Promise<Settings> {
  const formData = new FormData();

  Object.entries(payload).forEach(([key, value]) => {
    if (value instanceof Blob) {
      formData.append(key, value);
    } else {
      formData.append(
        key,
        typeof value === "object" ? JSON.stringify(value) : String(value)
      );
    }
  });

  formData.append("logo", logo);

  const res = await $apiWithoutAuth.patch("/settings", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
}
export async function getSettings(): Promise<Settings> {
  const res = await $apiWithoutAuth.get("/settings");

  return res.data;
}
