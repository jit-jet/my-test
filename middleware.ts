import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/account/noEnter")) {
    console.log("from Middleware");
    console.log(request);
    return NextResponse.rewrite(new URL("/", request.url));
  }
  if (request.nextUrl.pathname == "/account") {
    console.log('first')
    const cookie = Number(request.cookies.get("in_account_page") ?? "0");
    const response = NextResponse.next()
    // response.cookies.set('vercel', 'fast')
    // NextResponse.next().cookies.set("in_account_page", (cookie + 1).toString());
    const cookie2 = response.cookies.get('vercel')
    request.cookies.set('in_account_page','ssss')
    console.log(request.cookies.get('in_account_page'))
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/account/noEnter", "/account/noEnter/:path*", "/account"],
};
