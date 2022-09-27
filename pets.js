let typesOfPets = ['iguanas', 'chinchillas', 'hamsters', 'small alligators'];

let namesOfPets = ['Sam', 'Little Tim', 'Zooboomafoo', 'Larry'];

// I am exporting the value of the typesOfPets (sharing it to another file)
// Can put multiple variables inside array/object to export
module.exports = {
    types: typesOfPets,
    names: namesOfPets
};

function getAPet() {
    return `${namesOfPets[3]} the ${typesOfPets[3]}`;
}

        // The parentheses make it a string
module.exports = getAPet();

//The function doesn't need a name to be exported. Ex:
/*
module.exports = function() {
    return `${namesOfPets[3]} the ${typesOfPets[3]}`;
}
*/