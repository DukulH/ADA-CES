
const retrieveData = JSON.parse(localStorage.getItem("loggedInUserData"));
const loggedReducer = (
  state = {
    name:retrieveData?.name || null,
    email: retrieveData?.email || null,
    type:retrieveData?.type || null,
    isLogged:retrieveData?.isLogged || false
  },
  action
) => {
  switch (action.type) {
    case "SignIn":
      return state;

    default:
      return state;
  }
};
export default loggedReducer;
