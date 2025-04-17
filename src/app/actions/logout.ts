"use server";

import { cookies } from "next/headers";

export async function logout() {
  (await cookies()).set("session", "", { expires: new Date(0) });
  (await cookies()).set("access_token", "", { expires: new Date(0) });
  (await cookies()).set("refresh_token", "", { expires: new Date(0) });
}
