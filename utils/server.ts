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
export const removeCookie = (res: NextApiResponse, name: string) => {
  const cookie = serialize(name, '', {
    maxAge: -1,
  });
  res.setHeader('Set-Cookie', cookie);
};
export const setCookie = (
  res: NextApiResponse<{ data: Session }>,
  name: string,
  value: Session,
  options: CookieSerializeOptions = {}
) => {
  res.setHeader('Set-Cookie', serialize(name, value.accessToken, options));
};

export const requestFromServer = async (
  type: 'post' | 'get',
  url: string,
  values?: string
) => {
  try {
    const response = await axios[type](getURL(url), {
      ...(values ? JSON.parse(values) : {}),
    });
    if (response.status !== 200) throw new Error(response.data);
    return response.data;
  } catch (e) {
    serverError(e);
  }
};
export const sendDataApi = async (
  values: object,
  url: string,
  config: object
) => {
  console.log(values);
  const response = await fetch(url, {
    ...config,
    body: JSON.stringify({ ...values }),
  });
  return response.json();
};
