// swap.js

// Реализуйте и экспортируйте функцию swap(), которая меняет местами первый и последний элемент массива. Если массив содержит меньше двух элементов, то он возвращается как есть.
// Примеры

// import { swap } from '../arrays';

// swap([]); // []
// swap([1]); // [1]
// swap([1, 2]); // [2, 1]
// swap(['one', 'two', 'three']); // ['three', 'two', 'one']


let array = [1];

// export 
function swap(array) {
    if (array.length < 2) {
        return array;
    } 
            let tmp = array[0];
            array[0] = array[array.length-1];
            array[array.length-1] = tmp;
            return array;  
}


// output
console.log("Input: " + array);

console.log("Output: " + swap(array));