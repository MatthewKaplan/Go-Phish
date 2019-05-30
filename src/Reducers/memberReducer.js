export const memberReducer = (state = [], action) => {
  switch (action.type) {
    case 'ALL_MEMBERS':
      return action.members;
    default:
      return state;
  }
};
