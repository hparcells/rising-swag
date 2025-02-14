import { getSession } from '@/util/auth';

export async function GET() {
  const session = await getSession();

  return Response.json(session);
}
