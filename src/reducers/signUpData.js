export function emailAndPasswordData(state = {}, action) {
  switch(action.type) {
    case "EMAIL_AND_PASSWORD_SUCCESS":
      return {
        ...state,
        ...action.data
      }
    default:
      return state;
  }
}

export function signUpFormData(state = {}, action) {
  switch(action.type) {
    case "REST_OF_FORM_SUCCESS":
      return {
        ...state,
        ...action.data
      }
    default:
      return state;
  }
}
