export default (state = [], action) => {
  switch (action.type) {
    case 'RANDOM_SHOW':
      return [action.show];
    default:
      return state;
  }
};
