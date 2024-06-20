import { getItem as getProduct } from './utils.js';
import { products } from './data.js';

const product = getProduct(3, products);
const nameOfProduct = product.name;
const productInfo = document.createElement('p');
productInfo.textContent = 'Product chosen: ' + nameOfProduct;

export default productInfo;
