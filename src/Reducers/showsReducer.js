export const showsReducer = (state = [], action) => {
  switch (action.type) {
    case 'CURRENT_SHOWS':
      return action.shows;
    default:
      return state;
  }
};
