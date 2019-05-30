export const songsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ALL_SONGS':
      return action.songs;
    default:
      return state;
  }
};
