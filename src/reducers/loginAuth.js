/*
  A straight forward reducer, storing the login info
  for state so that firebase can use it later in our
  Login component. 
*/

export function emailAndPasswordToState(state = {}, action) {
  switch(action.type) {
    case "DATA_TO_LOGIN_WITH":
      return {
        ...state,
        ...action.data
      }
    default:
      return state;
  }
}
