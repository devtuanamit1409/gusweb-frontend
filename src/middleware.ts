import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./routing";

const handleI18nRouting = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const localeCookie = request.cookies.get("NEXT_LOCALE");
  const locale = localeCookie ? localeCookie.value : "vi";

  if (pathname === "/") {
    if (locale === "vi") {
      request.nextUrl.pathname = "/vi";
    } else if (locale === "en") {
      const response = NextResponse.redirect(new URL("/en", request.url));
      return response;
    } else if (locale === "ko") {
      const response = NextResponse.redirect(new URL("/ko", request.url));
      return response;
    }
  }

  if (pathname === "/vi") {
    const response = NextResponse.redirect(new URL("/", request.url));
    response.cookies.set("NEXT_LOCALE", "vi");
    return response;
  }

  // if (pathname === "/en") {
  //   if (locale === "vi") {
  //     const response = NextResponse.redirect(new URL("/en", request.url));
  //     response.cookies.set("NEXT_LOCALE", "en");
  //     return response;
  //   } else {
  //     if (locale === "en") {
  //       request.nextUrl.pathname = "/en";
  //     } else {
  //       const response = NextResponse.redirect(new URL("/en", request.url));
  //       response.cookies.set("NEXT_LOCALE", "en");
  //       return response;
  //     }
  //   }
  // }

  if (pathname.startsWith("/vi")) {
    const newPathname = pathname.replace(/^\/vi/, "");
    if (locale === "en") {
      const response = NextResponse.redirect(new URL(newPathname, request.url));
      response.cookies.set("NEXT_LOCALE", "vi");
      return response;
    } else if (locale === "ko") {
      const response = NextResponse.redirect(new URL(newPathname, request.url));
      response.cookies.set("NEXT_LOCALE", "vi");
      return response;
    } else {
      return NextResponse.redirect(new URL(newPathname, request.url));
    }
  }

  if (!pathname.startsWith("/vi") && !pathname.startsWith("/en")) {
    request.nextUrl.pathname = `/vi${pathname}`;
  }

  // if (pathname.startsWith("/en")) {
  //   if (locale === "vi") {
  //     const response = NextResponse.redirect(new URL(pathname, request.url));
  //     response.cookies.set("NEXT_LOCALE", "en");
  //     return response;
  //   } else {
  //     if (locale === "en") {
  //       request.nextUrl.pathname = pathname;
  //     } else {
  //       const response = NextResponse.redirect(new URL(pathname, request.url));
  //       response.cookies.set("NEXT_LOCALE", "en");
  //       return response;
  //     }
  //   }
  // } else {
  //   if (locale === "en") {
  //     const response = NextResponse.redirect(
  //       new URL(`/en/${pathname}`, request.url)
  //     );
  //     return response;
  //   }
  // }

  return handleI18nRouting(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
