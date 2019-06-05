export default (state = [], action) => {
  switch (action.type) {
    case "CURRENT_SHOWS":
      return action.shows.map(show => ({
        ...show
      }));
    default:
      return state;
  }
};
