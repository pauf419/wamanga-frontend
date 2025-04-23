import type { User } from "@/api/types/user";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const secretKey = "hiyp*9VD~q";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10 h from now")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function logout() {
  (await cookies()).set("session", "", { expires: new Date(0) });
}

export async function getSession() {
  const cookie = await cookies();
  const session = cookie.get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function getTokens() {
  const cookie = await cookies();
  const accessToken = cookie.get("access_token")?.value;
  const refreshToken = cookie.get("refresh_token")?.value;

  return {
    accessToken,
    refreshToken,
  };
}

export async function updateSession(request: NextRequest): Promise<{
  response: NextResponse;
  user: User | undefined;
}> {
  const accessToken = request.cookies.get("access_token")?.value;
  const oldRefreshToken = request.cookies.get("refresh_token")?.value;

  const response = NextResponse.next();
  response.headers.set("x-current-path", request.nextUrl.pathname);

  if (!oldRefreshToken || !accessToken)
    return {
      response,
      user: undefined,
    };

  try {
    const refreshResponse = await fetch(
      "http://69.55.49.138:3011/auth/refresh-token",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refreshToken: oldRefreshToken }),
      }
    );

    if (!refreshResponse.ok)
      return {
        response,
        user: undefined,
      };

    const { accessToken, refreshToken } = await refreshResponse.json();

    response.cookies.set("access_token", accessToken, {
      httpOnly: true,
      path: "/",
    });
    response.cookies.set("refresh_token", refreshToken, {
      httpOnly: true,
      path: "/",
    });

    const session = accessToken;
    if (!session)
      return {
        response,
        user: undefined,
      };

    const parsed = await decrypt(session);
    parsed.expires = new Date(Date.now() + 60 * 60 * 10 * 1000);
    response.cookies.set("session", await encrypt(parsed), {
      httpOnly: true,
      expires: parsed.expires,
    });

    return {
      response,
      user: parsed,
    };
  } catch (e) {
    console.error(e);
    return {
      response,
      user: undefined,
    };
  }
}
