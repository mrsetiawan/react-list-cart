const initialState = 'ALL';

const filterReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      const newState = action.filter;
      return newState;
      break;
    default:
      return state;
  }
};

export default filterReducers;