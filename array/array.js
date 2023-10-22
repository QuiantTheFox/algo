class MyArray {
    constructor() {
        this.value = new Array(0);
    }
    addItemBeginning(item) {
        const newArray = new Array(this.value.length + 1);
        newArray[0] = item;
        for (let i = 0; i < this.value.length; i++) {
            newArray[i + 1] = this.value[i];
        }
        this.value = newArray;
    }
    removeAtBeginning() {
        const newArray = new Array(this.value.length - 1);
        for (let i = 1; i < this.value.length; i++) {
            newArray[i - 1] = this.value[i];
        }
        this.value = newArray;
    }

    addItemEnd(item) {
        const newArray = new Array(this.value.length + 1);
        let i = 0;
        while (i < this.value.length) {
            newArray[i] = this.value[i];
            i++;
        }
        newArray[i] = item;
        this.value = newArray;
    }
    removeAtEnd() {
        const newArray = new Array(this.value.length - 1);
        for (let i = 0; i < this.value.length - 1; i++) {
            newArray[i] = this.value[i];
        }
        this.value = newArray;
    }

    addItemPosition(item, position) {
        const newArray = new Array(this.value.length + 1);
        let i = 0;

        if (position < 0 || position > this.value.length) {
            throw new Error();
        } else {
            while (i < position) {
                for (let j = 0; j < position; j++) {
                    newArray[j] = this.value[j];
                    i++;
                }
            }
            newArray[i] = item;
            i = position + 1;

            for (let j = position; j < this.value.length; j++) {
                newArray[j + 1] = this.value[j];
                i++;
            }
        }

        this.value = newArray;
    }
    removeAtPosition(index) {
        const newArray = new Array(this.value.length - 1);
        for (let i = 0; i < this.value.length - 1; i++) {
            if (i < index) {
                newArray[i] = this.value[i];
            } else {
                newArray[i] = this.value[i + 1];
            }
        }
        this.value = newArray;
    }
}

const myArr = new MyArray();
myArr.addItemBeginning("a");
// console.log(myArr);
myArr.addItemEnd("b");
// console.log(myArr);
myArr.addItemEnd("c");
myArr.addItemEnd("d");
// console.log(myArr);
myArr.addItemEnd("e");
// console.log(myArr);
// myArr.removeAtBeginning();
console.log(myArr);
// myArr.removeAtEnd();
// console.log(myArr);
myArr.removeAtPosition(4);
console.log(myArr);
