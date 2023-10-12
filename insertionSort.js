let array = new Array(5);
for (let i = 0; i < array.length; i++) {
    let random = Math.floor(Math.random() * 100);
    while (array.includes(random)) {
        random = Math.floor(Math.random() * 100);
    }
    array.fill(random, i, i + 1);
}
console.log(array);
function insertionSort(arr) {
    let tmp;
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[i]) {
                tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
        console.log(arr);
    }
    return arr;
}
console.log(insertionSort(array));
