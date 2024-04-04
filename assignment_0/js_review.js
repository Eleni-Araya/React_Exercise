/*1.Create a function using function declaration named sum with one parameter of Array type, the
returned result is the sum of all elements which are greater than 20.*/

function sum(arr) {
    const result = arr.filter(num => num > 20).reduce(((acc, curr) => acc + curr), 0);
    return result;
}
const x = [15, 18, 20, 25, 30, 40];
console.log(sum(x));

/*2. Create a function using function expression named getNewArray with one parameter of String
Array, return a new array which contains all string, length is greater than and equal to 5, and
contains letter ‘a’.*/

const getNewArray = function (str) {
    const result = str.filter(item => item.length >= 5 && item.includes("a"));
    return result;
}
const arr1 = ['hello', 'hi', 'apple', 'react', 'mango'];
console.log(getNewArray(arr1));

/*3. Implement an arrow function with feature below:
concat('hi', [1,2,3], ['Hello','world']) -> return result: ['h', 'i', 1,2,3, 'Hello','world']*/

const concat = (str, arr, strArr) => {
    const result = [...str, ...arr, ...strArr];
    return result;
}
console.log(concat('hi', [1, 2, 3], ['Hello', 'world']));