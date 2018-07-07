/*
  Simple action for storing data from signup into a profile state
  Will have to use this in the signup and logiin components for
  the data to pull correctly
*/

export function profileData(data) {
  return {
    type: "PROFILE_DATA",
    data
  }
}
