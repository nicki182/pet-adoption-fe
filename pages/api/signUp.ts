// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Session } from '@interfaces';
import { requestFromServer } from 'utils/server';
import { setCookie } from '../../utils/server';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Session>
) {
  const session = await requestFromServer('post', 'session/signup', req.body);
  setCookie;
  return res.json(session);
}
