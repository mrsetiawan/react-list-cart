/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { initDataStarted } from './initialDataStarted'
import { errorResponse } from './errorResponse'; 

let id = 4;

export const addTodoAction = (text) => {
  return dispatch => {
    dispatch(initDataStarted());
    axios.post("https://jsonplaceholder.typicode.com/posts", {id: id, text:text})
    .then(() => {
      dispatch({
        type: 'ADD_TODO',
        payload: {
          text:text,
          id:id++
        }
      })
    })
    .catch(err => errorResponse(err));
  }
};
