import actionTypes from './actions';
import { StateI, ActionI } from 'redux/interfaces';
const reducer = {
  [actionTypes.UPDATE_USER]: (state: StateI, action: ActionI) => ({
    ...state,
    user: {
      ...state.user,
      ...action.payload.user,
    },
  }),
  [actionTypes.ADD_USER]: (state: StateI, action: ActionI) => ({
    ...state,
    user: action.payload.user,
  }),
};
export default reducer;
