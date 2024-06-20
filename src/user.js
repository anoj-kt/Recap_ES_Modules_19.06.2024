import { getItem as getUser } from './utils.js';
import { users } from './data.js';

const user = getUser(3, users);
const nameOfUser = `Hello ${user.name}`;

const randomVar = 'Hello';
const randomVar2 = 'Bye';

export default nameOfUser;
export { randomVar, randomVar2 };
