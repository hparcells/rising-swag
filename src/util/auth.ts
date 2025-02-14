import { cookies } from 'next/headers';
import { getIronSession, SessionOptions } from 'iron-session';

export interface SessionData {
  isAuthenticated: boolean;
}

export const sessionOptions: SessionOptions = {
  password: process.env.IRON_SESSION_SECRET!,
  cookieName: '_auth',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production'
  }
};

export async function getSession() {
  const cookieStore = await cookies();

  return await getIronSession<SessionData>(cookieStore, sessionOptions);
}
