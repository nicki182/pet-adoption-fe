import axios from 'axios'
import { NextApiResponse } from 'next'
import { CookieSerializeOptions,serialize } from 'cookie'
import { Session } from '@interfaces'
const getURL = (url:string)=>{
    return `${process.env.REACT_API}/${url}`
}
const serverError = (e:unknown)=>{
    console.error(e)
}
export const setCookie = (
    res: NextApiResponse<Session>,
    name: string,
    value: Session,
    options: CookieSerializeOptions = {}
  ) => {
    res.setHeader('Set-Cookie', serialize('token',value.accessToken, options))
  }
  
export const requestFromServer =async (type:'post'|'get',url:string,config:object)=>{
    try{
       const response = await axios[type](getURL(url),{...config})
       if(response.status !== 200) throw new Error(response.data)
       return response.data
    }
    catch(e){
        serverError(e)
    }
}