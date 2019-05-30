export const venuesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ALL_VENUES':
      return action.venues;
    default:
      return state;
  }
};