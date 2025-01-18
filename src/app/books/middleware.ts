import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Middleware function
export function middleware(request: NextRequest) {
  // Extract token from cookies
  const token = request.cookies.get("token")?.value;
  console.log(token);

  if (token) {
    // Redirect to the homepage if the token exists
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Redirect to login page if the token doesn't exist
  return NextResponse.redirect(new URL("/login", request.url));
}

// Configure the matcher for specific routes
export const config = {
  matcher: "/books/:id", // Matches routes like /books/[id]
};
