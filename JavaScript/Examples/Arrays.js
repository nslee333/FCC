const ourPets = [
    {
        animalType: "cat",
        names: [
            "meowzer",
            "fluffy",
            "kit-cat"
        ]
    },
    {
        animalType: "dog",
        names: [
            "spot",
            "bowser",
            "frankie"
        ]
    }
];

ourPets[0].names[1];
ourPets[1].names[0];

const [a1, b2] = [1, 2, 3, 4, 5, 6];
console.log(a, b);

const [a2, b3,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);

const [a3, b4, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);

// Basic data structure curriculum  here down.

let array = ["today", "was", "not", "so", "great"];
array.splice(2, 2);

let array2 = ["today", "was", "great"];

let array3 = ["I", "am", "feeling", "really", "happy"];
let newArray = array.splice(3,2);

let newArray2 = ["really", "happy"];

const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice((startIndex, amountToDelete, 13, 14));
console.log(numbers);

let numbers2 = [10, 11, 12, 13, 14, 15];


let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
let todaysWeather = weatherConditions.slice(1, 3);

todaysWeather = ['snow', 'sleet'];

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];

let thisArray2 = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray2 = ['basil', 'cilantro', ...thisArray2, 'coriander'];

thatArray = ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']

let fruits = ["apples", "pears", "oranges", "peaches", "pears"];
fruits.indexOf("dates");
fruits.indexOf("oranges");
fruits.indexOf("pears");


function greaterThanTen(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);

let nestedArray = [
    ['deep'],
    [
        ['deeper'], ['deeper']
    ],
    [
        [
            ['deepest'], ['deepest']
        ],
        [
            [
                ['deepest-est?']
            ]
        ]
    ]
];