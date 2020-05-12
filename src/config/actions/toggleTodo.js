// eslint-disable-next-line import/prefer-default-export
export const toggleTodo = (id) => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: 'TOGGLE_TODO',
      id
    });
  }, 2000);
};