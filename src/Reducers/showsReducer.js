export const showsReducer = (state = [], action) => {
  switch (action.type) {
    case "CURRENT_SHOWS":
      return action.shows.map(show => ({
        ...show,
        showSaved: action.showSaved
      }));
    default:
      return state;
  }
};
