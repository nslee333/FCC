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



