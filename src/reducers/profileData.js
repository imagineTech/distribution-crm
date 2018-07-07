/*
  pretty straight forward reducer, we just need this
  for storing profile data to state. 
*/

export function storeProfileData(state = {}, action) {
  switch (action.type) {
    case "PROFILE_DATA":
      return {
        ...state,
        ...action.data
      };
    default:
      return state;

  }
}
