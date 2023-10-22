let firstItem;
let secondItem;

const array = new Array(20);

// array.fill(Math.floor(Math.random() * 100), 0, 1);

for (let i = 0; i < array.length; i++) {
    let random = Math.floor(Math.random() * 100);
    while (array.includes(random)) {
        random = Math.floor(Math.random() * 100);
    }
    array.fill(random, i, i + 1);
}

console.log(array);

function selectionSort() {
    for (let j = 0; j < array.length; j++) {
        firstItem = array[j];
        for (let i = j + 1; i < array.length; i++) {
            secondItem = array[i];
            if (secondItem < firstItem) {
                firstItem = secondItem;
            }
        }

        array[array.indexOf(firstItem)] = array[j];
        array[j] = firstItem;
    }
    return array;
}
console.log(selectionSort());
