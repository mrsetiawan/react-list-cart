const initialState = 'ALL';

const filterReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter;
      break;
    default:
      return state;
  }
};

export default filterReducers;