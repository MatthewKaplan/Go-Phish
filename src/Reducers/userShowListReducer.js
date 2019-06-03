export default (state = [], action) => {
  switch (action.type) {
    case "USERS_SHOWS":
      return [...state,  action.userShows]
    default:
      return state;
  }
};
