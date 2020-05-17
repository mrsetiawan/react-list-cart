// eslint-disable-next-line import/prefer-default-export
export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  payload: { id }
});