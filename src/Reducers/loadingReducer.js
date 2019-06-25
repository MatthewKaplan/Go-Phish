export default (state = false, action) => {
  switch (action.type) {
    case "LOADING":
      return action.isLoading;
    default:
      return state;
  }
};
