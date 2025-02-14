'use server';

import { redirect } from 'next/navigation';

import { getSession } from '@/util/auth';

export async function auth(password: string, redirectParam: string) {
  const session = await getSession();

  const shouldAuthenticate = password === process.env.IRON_SESSION_PASSWORD;
  const redirectPath = redirectParam || '/';

  session.isAuthenticated = shouldAuthenticate;

  await session.save();

  if (!shouldAuthenticate) {
    redirect(`/log-in?redirect=${encodeURIComponent(redirectPath)}`);
  }

  redirect(redirectPath.at(0) === '/' ? redirectPath : '/');
}
