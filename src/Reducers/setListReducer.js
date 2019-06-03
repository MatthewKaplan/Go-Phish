export default (state = [], action) => {
  switch (action.type) {
    case "CURRENT_SETLIST":
      return action.setlist;
    default:
      return state;
  }
};
