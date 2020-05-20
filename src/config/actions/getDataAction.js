import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const getDataAction = () => {
  return dispatch => {
    
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then((response) => {
      dispatch({
        type: "GET_DATA_JSON",
        payload: {
          data: response.data
        }
      })
    })
    .catch(err => console.log(err))
  }
};

// type: "GET_DATA_JSON"