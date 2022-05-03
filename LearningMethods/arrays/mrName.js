// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход 
// массив и строковой префикс, и возвращает новый массив,
//  в котором к каждому элементу исходного массива добавляется переданный префикс. 
//Функция предназначена для работы со строковыми элементами. После префикса автоматически добавляется пробел.

// import addPrefix from './arrays.js';

// const names = ['john', 'smith', 'karl'];

// const newNames = addPrefix(names, 'Mr');
// console.log(newNames);
// // => ['Mr john', 'Mr smith', 'Mr karl'];

// console.log(names); // Старый массив не меняется!
// // => ['john', 'smith', 'karl'];



const names = ['john', 'smith', 'karl'];
const result = [];
const addPrefix = (array, prefex) => {
    // const result = [];
    

    for (let i = 0; i < array.length; i += 1) {
       
          const [i] = prefex + " " + array[i];

          
    } 
   return result;
}

const newNames = addPrefix(names, 'Mr');

console.log(newNames);
// => ['Mr john', 'Mr smith', 'Mr karl'];

console.log(names); // Старый массив не меняется!
// => ['john', 'smith', 'karl'];