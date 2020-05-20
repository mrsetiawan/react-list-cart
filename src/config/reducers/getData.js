const initialState = {
  data: [],
  loading: false,
  error: null
}

const getData = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA_JSON':
      return {
        ...state,
        data: [...state.data,...action.payload.data],
        loading:false
      }
    default:
      return state;
  }
}

export default getData;