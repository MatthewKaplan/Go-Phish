export const currentMemberReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CURRENT_MEMBER':
      return action.member;
    default:
      return state;
  }
};
