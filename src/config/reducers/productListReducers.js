import image1 from '../../assets/img/image.jpg';
import image2 from '../../assets/img/image2.jpg';
import image3 from '../../assets/img/image3.jpg';
import image4 from '../../assets/img/image4.jpg';
import image5 from '../../assets/img/image5.jpg';
import image6 from '../../assets/img/image6.jpg';
import image7 from '../../assets/img/image7.jpg';
import image8 from '../../assets/img/image8.jpg';
import image9 from '../../assets/img/image9.jpg';
import image10 from '../../assets/img/image10.jpg';

const initialState = {
  product: []
};

const productListReducers = (state = initialState, action) => {
  if (action.type === 'GET_PRODUCT_LIST') {
    const newState = {
      product: [
        { id: 1, product_name: "produk 1", product_image: image1 },
        { id: 2, product_name: "produk 2", product_image: image2 },
        { id: 3, product_name: "produk 3", product_image: image3 },
        { id: 4, product_name: "produk 4", product_image: image4 },
        { id: 5, product_name: "produk 5", product_image: image5 },
        { id: 6, product_name: "produk 6", product_image: image6 },
        { id: 7, product_name: "produk 7", product_image: image7 },
        { id: 8, product_name: "produk 8", product_image: image8 },
        { id: 9, product_name: "produk 9", product_image: image9 },
        { id: 10, product_name: "produk 10", product_image: image10 }
      ]
    }

    return newState;
  }
  return state;
}

export default productListReducers;