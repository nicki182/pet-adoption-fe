import { UserI } from "./interfaces"
const actionTypes = {
    ADD_USER: 'ADD_USER',
    UPDATE_USER: 'UPDATE_USER',
}
// ACTIONS
export const updateUser = (user:UserI) => {
    return { type: actionTypes.UPDATE_USER, payload: { user } }
}
  export const addUser = (user:UserI) => {
    return { type: actionTypes.ADD_USER, payload: { user } }
}
export default actionTypes;