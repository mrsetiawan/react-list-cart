/* eslint-disable import/prefer-default-export */
let id = 0;

export const addTodoAction = (text) => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: 'ADD_TODO',
      text,
      id: id++
    });
  }, 200);
};