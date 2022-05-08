export interface User {
  id: string;
  name?: string;
  email?: string;
}
export interface Session {
  accessToken: string;
  refreshToken: string;
  userId: string;
}
