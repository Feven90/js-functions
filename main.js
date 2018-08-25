const bananaDiv = document.getElementById('banana');
bananaDiv.innerHTML = 'im a banana';

let counter = 0;
counter += 1;
counter = counter + 1;
counter ++;
console.log ('counter: ', counter);

const greetingElement = document.getElementById('greeting');
const firstName = "Feven";
const lastName = "Mulugeta";
greetingElement.innerHTML = `Hello my name is ${firstName} ${lastName}`;

 let name = 'Feven';
 let age = '44';
// let person = {
//     name: name,
//     age: age
// };
let person = {name, age};
console.log('person:', person.name);

