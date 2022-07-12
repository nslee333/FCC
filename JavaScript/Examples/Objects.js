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


const alpha = {
    1: "Z",
    2: "Y",
    3: "X",
    4: "W",
    //...
    24: "C",
    25: "B",
    26: "A"
};

alpha[2];
alpha[24];

const value = 2;
alpha[value];



const ourStorage = {
    "desk": {
        "drawer": "stapler"
    }, 
    "cabinet": {
        "top drawer": {
            "folder1": "a file",
            "folder2": "secrets"
        },
        "bottom drawer": "soda"
    }
};

ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;


let obj = {
    name: "freeCodeCamp",
    review: "awesome"
};

Object.freeze(obj);


const user = {name: "John Dutton", age: "55"};

const name = user.name;
const age = user.age;

const {name1, age2} = user;