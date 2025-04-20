import { NextResponse, type NextRequest } from "next/server";
import { logout, updateSession } from "./app/lib";

export const adminAccessRoles = ["admin", "owner", "moderator"];

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/logout") await logout();
  const data = await updateSession(request);
  return data;
}

export const config = {
  matcher: [
    "/comics/:slug/:slug*",
    "/user",
    "/admin/:path*",
    "/reader/:path*",
    "/logout",
  ],
};
