// The require(file name) function imports in the file that was previously exported
let thePetsIWanted = require('./pets.js');
console.log('The Pets I Wanted:', thePetsIWanted);

function getName() {
    return 'Maia'
}

let me = getName();

console.log(`Hello ${me}, from Node`);


