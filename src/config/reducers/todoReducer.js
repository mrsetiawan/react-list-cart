const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: action.id, text: action.text }]
    break;

    default:
      return state;
  }

}

export default todoReducer