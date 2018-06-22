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
