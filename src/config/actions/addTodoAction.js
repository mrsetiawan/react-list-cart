/* eslint-disable import/prefer-default-export */
let id = 4;

export const addTodoAction = (text) => ({
  type: 'ADD_TODO',
  payload: {
    text,
    id: id++
  }
});