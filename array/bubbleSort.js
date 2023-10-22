let array = new Array(5);

for (let i = 0; i < array.length; i++) {
    let random = Math.floor(Math.random() * 100);

    while (array.includes(random)) {
        random = Math.floor(Math.random() * 100);
    }
    array.fill(random, i, i + 1);
}
console.log(array);

function bubbleSort() {
    let tmp;
    for (let j = 0; j < array.length; j++) {
        console.log(`j ${j}`);

        for (let i = 0; i <= array.length - j; i++) {
            console.log(`i ${i}`);

            if (array[i] > array[i + 1]) {
                console.log("ici");
                tmp = array[i + 1];
                array[i + 1] = array[i];
                array[i] = tmp;
            }
            console.log(array);
        }
    }
    return array;
}

console.log(bubbleSort());
