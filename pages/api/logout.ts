// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Session } from '@interfaces';
import { requestFromServer } from 'utils/server';
import { removeCookie } from '@utils/server';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ data: Session }>
) {
  const session = await requestFromServer('post', 'auth/logout', req.body);
  removeCookie(res, 'token');
  return res.json(session);
}
