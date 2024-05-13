import { type NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/blog')) {
    return NextResponse.rewrite('https://oddc.link/blog');
  }
}
