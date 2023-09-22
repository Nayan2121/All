/* Declarative Way */

// const data = ['Rakesh', 30, 'Engineer'];
// const [name, age, profession] = data;
// console.log(name);
// console.log(age);
// console.log(profession);

/* In Use React */
// const data = ['Rakesh', 30, 'Engineer'];
// const [name, age, profession] = data;
// const [count, setCount] = useState();

/* Default parameters */

// const register = (name, password, image = 'test.png') => {
//     // const img = image || 'test.png';
//     console.log(name, password, image);
// };

// register('Rakesh', 'secret', 'photo.png');
// Spread ...

// const languages = ['c', 'c++', 'javascript'];
// const newLanguages = [...languages, 'typescript'];

// const settings = {
//     volumn: 10,
//     brightness: 80,
// };

// const newSettings = { ...settings, volumn: 20 };

// console.log(newSettings);

// Rest ...

// const addItems = (...items) => {
//     console.log(items);
// };

// addItems(3, 2, 4, 10, 30);
// For of loop
// Array, string, Object, set, map

// const numbers = [2, 4, 5, 7];

// for (const num of numbers) {
//     console.log(num);
// }

// const language = 'Javascript';

// for (const char of language) {
//     console.log(char);
// }

// const person = {
//     name: 'Rakesh',
//     city: 'Moscow',
//     brand: 'apple',
// };

// for (const [key, value] of Object.entries(person)) {
//     console.log(key, value);
// }

// Promises

// function login(cb) {
//     setTimeout(() => {
//         console.log('Login..');
//         cb();
//     }, 0);
// }

// login(() => {
//     // async

//     console.log('Redirecting');
// });

// function login() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Login...');
//             reject();
//         }, 0);
//     });
// }

// login()
//     .then(() => {
//         console.log('Redirecting..');
//     })
//     .catch((err) => {
//         console.log('Error...');
//     });
// find (Array methods)

// const users = [{ name: 'Rakesh' }, { name: 'John' }];

// const user = users.find((user) => {
//     return user.name === 'John';
// });

// console.log(user);

// findIndex
// const users = [{ name: 'Rakesh' }, { name: 'John' }];

// const user = users.findIndex((user) => {
//     return user.name === 'Jane';
// });

// console.log(user);

// Set
// const uniqueNumbers = new Set();
// uniqueNumbers.add(3);
// uniqueNumbers.add(5);
// uniqueNumbers.add(6);
// uniqueNumbers.add(3);
// console.log(uniqueNumbers.has(10));

// const numbers = [4, 5, 6, 4, 7, 6];
// const uniqueNumbers = new Set(numbers);
// console.log(Array.from(uniqueNumbers));

// map (Hashtables)

// const urls = new Map();
// urls.set('development', 'dev.example.com');
// urls.set('production', 'prod.example.com');

// console.log(urls.get('production'));
// O(1)

// const urlsObj = {
//     development: 'dev.example.com',
//     production: 'prod.example.com',
// };

// for (const [key, value] of urls) {
//     console.log(key, value);
// }

// console.log(urls.size);

// order
// size

// classes

// function Person(name) {
//     this.name = name;
// }

// const rakesh = new Person('Rakesh');
// const john = new Person('John');
// rakesh.name = 'Coders Gyan';
// console.log(john);

// class Person {
//     name;

//     constructor(name) {
//         this.name = name;
//     }

//     greet() {
//         console.log('Good morning');
//     }
// }

// class GreatPerson extends Person {
//     attitude = 'cool';

//     greet() {
//         console.log('Good Evening');
//     }
// }

// // const rakesh = new Person('Rakesh');
// const john = new GreatPerson('Johny');
// // john.name = 'Joy';
// console.log(john.greet());

// ESM ( ES6 modules )
// import { libName as myLibName } from './lib.js';
// import myLogin from './lib.js';
// myLogin();
// console.log(myLibName);