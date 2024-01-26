function average(numbers) {

    if (numbers.length === 0) {
        return 0;



    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

const numbers = [2, 4, 6, 8, 10];
console.log(average(numbers));






function copy(arr, callback) {
    const copiedArray = arr.slice();


    for (let i = 0; i < copiedArray.length; i++) {
        copiedArray[i] = callback(copiedArray[i]);
    }
    return copiedArray;
}


const mass = [2, 3, 4];
const mass2 = copy(mass, (num) => num * num);

console.log(mass);
console.log(mass2);