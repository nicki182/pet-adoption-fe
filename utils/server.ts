import axios from 'axios';
import { NextApiResponse } from 'next';
import { CookieSerializeOptions, serialize } from 'cookie';
import { Session } from '@interfaces';
const getURL = (url: string) => {
  return `${process.env.API_HOST}/${url}`;
};
const serverError = (e: unknown) => {
  console.error(e);
};
export const setCookie = (
  res: NextApiResponse<Session>,
  name: string,
  value: Session,
  options: CookieSerializeOptions = {}
) => {
  res.setHeader('Set-Cookie', serialize(name, value.accessToken, options));
};

export const requestFromServer = async (
  type: 'post' | 'get',
  url: string,
  config: object
) => {
  try {
    const response = await axios[type](getURL(url), {...JSON.parse(config.data) });
    if (response.status !== 200) throw new Error(response.data);
    return response.data;
  } catch (e) {
    serverError(e);
  }
};
