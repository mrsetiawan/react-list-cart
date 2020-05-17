const initialState = {
  data: [],
  loading: false,
  error: null
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_DATA':
      return {
        loading: false,
        data: [...state.data, ...action.payload.todos]
      };
    case 'INIT_DATA_STARTED':
      return {
        ...state,
        loading: !state.loading
      };
    case 'ADD_TODO':
      return {
        ...state,
        data: [...state.data,
          {
            id: action.payload.id,
            text: action.payload.text,
            complete: false
          }
        ]
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        data: state.data.map((todo) => (
          (todo.id === action.payload.id) ? { ...todo, complete: !todo.complete } : todo))
      };
    default:
      return state;
  }
};

export default todoReducer;
