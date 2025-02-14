import { NextRequest, NextResponse } from 'next/server';

import { getSession } from '@/util/auth';

export async function middleware(request: NextRequest) {
  const session = await getSession();
  const redirectPath = new URL(request.url).pathname;

  if (!session.isAuthenticated) {
    return NextResponse.redirect(
      new URL(`/log-in?redirect=${encodeURIComponent(redirectPath)}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = { matcher: ['/admin/:path*'] };
