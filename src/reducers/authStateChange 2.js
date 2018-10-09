/*
  This is still under testing, will
  update comments later.

  This file is for storing user into an object
  for state to later reference thanks to
  this reducer. 
*/

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
