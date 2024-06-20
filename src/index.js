import nameOfUser, { randomVar, randomVar2 } from './user.js';
import productInfo from './product.js';

const greeting = document.getElementById('greeting');
greeting.innerText = nameOfUser;

document.body.appendChild(productInfo);

console.log(randomVar2);
