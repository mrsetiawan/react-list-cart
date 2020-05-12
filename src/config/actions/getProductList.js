// eslint-disable-next-line import/prefer-default-export
export const getProductList = () => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: 'GET_PRODUCT_LIST'
    });
  }, 3000);
};