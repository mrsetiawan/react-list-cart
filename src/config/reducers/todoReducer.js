const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        { id: action.id, text: action.text, complete: false }
      ];
      break;
    case 'TOGGLE_TODO':
      return state.map((todo) => ((todo.id === action.id) ? { ...todo, complete: !todo.complete } : todo));
      break;
    default:
      return state;
  }
};

export default todoReducer;