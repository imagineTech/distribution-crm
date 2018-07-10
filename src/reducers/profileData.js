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

/*
  here we're storing the new profile data given by the
  edit profile component. Same thing as above just need
  to have them seperated. 
*/
export function storeNewProfileData(state = {}, action) {
  switch(action.type) {
    case "NEW_PROFILE_DATA":
      return {
        ...state,
        ...action.data
      }
    default:
      return state;
  }
}
