import { NextResponse, type NextRequest } from "next/server";
import { logout, updateSession } from "./app/lib";
import { PanelWrapper } from "./components/DonationPanel/styled";

export const adminAccessRoles = ["admin", "owner", "moderator"];

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/logout") await logout();
  const data = await updateSession(request);
  if (request.nextUrl.pathname.includes("/admin")) {
    if (!data.user) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    if (request.nextUrl.pathname === "/admin")
      return NextResponse.redirect(new URL("/admin/title", request.url));
    switch (data.user.role) {
      case "admin":
        break;
      case "owner":
        break;
      case "moderator":
        break;
      case "developer":
        break;
      case "user":
        return NextResponse.redirect(new URL("/", request.url));
      default:
        return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return data.response;
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
