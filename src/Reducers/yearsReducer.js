export default (state = [], action) => {
  switch (action.type) {
    case 'ALL_YEARS':
      return action.years;
    default:
      return state;
  }
};