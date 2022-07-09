const cat = {
    "name": "whiskers",
    "legs": 4,
    "tails": 1,
    "enemies": ["water", "Dogs"]
};

const anotherObject = {
    make: "Ford",
    5: "five",
    "model": "focus"
};

const myObject = {
    prop1: "val1",
    prop2: "val2"
};

const prop1val = myObject.prop1;
const prop2val = myObject.prop2;

const myObj = {
    "Space Name": "Kirk",
    "More Space": "Spock",
    "NoSpace": "USS Enterprise"
}

myObj["Space Name"];
myObj["More Space"];
myObj["NoSpace"];


const dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);

const someObj = {
    propName: "John"
};

function propPrefix(str) {
    const s = "prop";
    return s + str;
}

const someProp = propPrefix("Name");
console.log(someObj[someProp]);