import axios from 'axios';

export const getProductList = () => {
  return dispatch => {
    axios.get("http://localhost:4000/list")
    .then((res) => {
      dispatch({
        type: "GET_DATA_LIST",
        list:res.data
      })
    })
    .catch((err) => console.log(err))
  }
};