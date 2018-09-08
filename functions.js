function nuggetizer(animal){
    return `${animal} stix`;
}
console.log('fish:', nuggetizer('fish'));
console.log('cat:', nuggetizer('cat'));
console.log('bear:', nuggetizer('bear'));

const nuggetizer2 = (animal) => {
    return `${animal} jerky`
};
console.log('deer:', nuggetizer2('deer'));

const nomnom = (name,food) => {
    return `${name} devoured ${food}`;

}
const bearSticks = nuggetizer('bear');
console.log(nomnom('Feven', bearSticks));
console.log(nomnom('Feven', 'juice'));

// const Add = (number1) => {
//     return number1 + 3;
// }
// console.log('number1: ', Add(22));

const numberAdder = (num) => {
    const finalNumber = num + 3;
    printToDom(`<h2>${finalNumber}</h2>`, 'allTheNumbers');
};

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};
numberAdder(22);



