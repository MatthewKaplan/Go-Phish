export default (state = [], action) => {
  switch (action.type) {
    case 'UPCOMING_SHOWS':
      return action.upcoming;
    default:
      return state;
  }
};