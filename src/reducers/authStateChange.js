export function authToState(state = {}, action) {
  switch(action.type) {
    case "AUTH_STATE_DATA":
      return {
        ...state,
        ...action.user
      }
    default:
      return state;
  }
}
