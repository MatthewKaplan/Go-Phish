export default (state = [], action) => {
  switch (action.type) {
    case 'ALL_TOURS':
      return action.tours;
    default:
      return state;
  }
};