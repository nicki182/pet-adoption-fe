export interface User {
  id: string;
  name?: string;
  email?: string;
  role: string;
}
export enum Role {
  Admin = 'Admin',
  User = 'User',
}
export interface Animal{
  id:string
  name:string
  type:string
  breed?:string
  age:number
  description:string
  image:string
  user:User
  dietaryDescription?:string

}
export interface Session {
  accessToken: string;
  refreshToken: string;
  userId: string;
  role: Role
}

