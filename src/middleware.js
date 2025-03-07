import { NextResponse } from 'next/server';

export function middleware(request) {
  const path = request.url;
  const token = request.cookies.get('AccessToken')?.value || '';

  if (!token) {
    return NextResponse.redirect(new URL('/admin/login', path));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin',
};
