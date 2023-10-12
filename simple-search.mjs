let array = [];
const arrayLength = 100;
const numberToGuess = Math.floor(Math.random() * 100);

for (let i = 0; i < arrayLength; i++) {
    array[i] = i + 1;
}

// function result() {
//     return array.filter((e) => e == numberToGuess);
// }

let min = array[0] - 1;
let max = array.length;

function result() {
    let proposition = (min + max) / 2;
    while (proposition != numberToGuess) {
        if (proposition < numberToGuess) {
            min = proposition;
            proposition = Math.floor((min + max) / 2);

            console.log(proposition);
        } else if (proposition > numberToGuess) {
            max = proposition;
            proposition = Math.floor((min + max) / 2);
            console.log(proposition);
        }
    }
    return proposition;
}

console.log(result());
console.log(numberToGuess);
