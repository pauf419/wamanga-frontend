import { NextResponse, type NextRequest } from "next/server";
import { logout, updateSession } from "./app/lib";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/logout") await logout();
  return await updateSession(request);
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
