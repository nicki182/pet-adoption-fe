import actionTypes from "./actions"
import { StateI,ActionI } from "redux/interfaces"
 const reducer = {
      [actionTypes.ADD_SESSION]:(state:StateI,action:ActionI)=> ({
          ...state,
          session:action.payload.session,
        }),
      [actionTypes.UPDATE_SESSION]:(state:StateI,action:ActionI)=> ( {
          ...state,
          session:{
            ...state.session,
            ...action.payload.session
          }
        })
}
export default reducer;