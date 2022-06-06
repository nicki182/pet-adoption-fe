import { SessionI } from "./interfaces"
const actionTypes = {
    ADD_SESSION: 'ADD_SESSION',
    UPDATE_SESSION: 'UPDATE_SESSION',
}
// ACTIONS
export const addSession = (session:SessionI) => {
    return { type: actionTypes.ADD_SESSION, payload: { session } }
  }
  
  export const updateSession = (session:SessionI) => {
    return { type: actionTypes.UPDATE_SESSION, payload: { session } }
  }
  export const removeSession = () => {
    return { type: actionTypes.UPDATE_SESSION, payload: { session:null } }
    }
export default actionTypes;