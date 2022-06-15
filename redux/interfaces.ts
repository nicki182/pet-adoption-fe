//State interfaces
import { SessionI } from './session/interfaces';
import { UserI } from './user/interfaces';
export interface StateI {
  user?: UserI;
  session?: SessionI;
}
export interface ActionI {
  type: string;
  payload: any;
}
