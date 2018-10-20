/*
  A straight forward reducer, storing the login info
  for state so that firebase can use it later in our
  Login component. 
*/

export const emailAndPasswordToState = (state = {}, action) => {
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

export const handleErrorForLogin = (state = {}, action) => {
  switch(action.type) {
    case "HANDLE_LOGIN_ERROR":
      return {
        ...state,
        code: action.code,
        message: action.message
      }
    default:
      return state;
  }
}
