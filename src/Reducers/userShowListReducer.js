export default (state = [], action) => {
  switch (action.type) {
    case "USERS_SHOWS":
      return action.userShows;
    default:
      return state;
  }
};
