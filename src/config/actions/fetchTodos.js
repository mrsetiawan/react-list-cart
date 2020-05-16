import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const fetchTodos = () => {
  return dispatch => {
    axios.get(" http://localhost:8080/todos")
      .then((res) => {
        dispatch({
          type: "INIT_DATA",
          todos: res.data
        })
      })
      .catch((err) => console.log(err));
  }
}

// const initData = todos => ({
//   type: "INIT_DATA",
//   todos
// });