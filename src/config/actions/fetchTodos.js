import axios from 'axios';
import { initDataStarted } from './initialDataStarted'
import { errorResponse } from './errorResponse'; 
// eslint-disable-next-line import/prefer-default-export
export const fetchTodos = () => {

  return dispatch => {
    dispatch(initDataStarted());

    axios.get('http://localhost:8080/todos')
      .then((res) => {
        dispatch({
          type: 'INIT_DATA',
          payload: {
            todos: res.data
          }
        });
      })
      .catch((err) => console.log(err));
  }
 
};
