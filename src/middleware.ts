import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

const nextIntlMiddleware = createMiddleware(routing);
export function middleware(request: NextRequest): NextResponse {
  const response = nextIntlMiddleware(request);
  return response || NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
    "/",
    "/(en/bn)/:path*",
  ],
};
