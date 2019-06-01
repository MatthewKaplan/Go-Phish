export const yearsReducer = (state = [], action) => {
  console.log('Hello?')
  switch (action.type) {
    case 'ALL_YEARS':
      return action.years;
    default:
      return state;
  }
};