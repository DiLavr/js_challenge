// arrays.js

// Реализуйте и экспортируйте по умолчанию функцию, которая высчитывает
//  среднее арифметическое элементов переданного массива. Благодаря этой функции 
// мы наконец-то посчитаем среднюю температуру по больнице 
// Примеры

// const temperatures1 = [37.5, 34, 39.3, 40, 38.7, 41.5];

// calculateAverage(temperatures1); // 38.5

 

// const temperatures2 = [36, 37.4, 39, 41, 36.6];

// calculateAverage(temperatures2); // 38

// В случае пустого массива функция должна вернуть значение null 
// (используйте в коде для этого guard expression):

// const temperatures = [];

// calculateAverage(temperatures); // null

const calculateAverage = (coll) => {
  if (coll.length === 0) {
    return null;
  } 
    let sum = 0;
    for (const value of coll) {
      sum += value;
    }
    return sum / coll.length;
  };
  
const temperatures1 = [37.5, 34, 39.3, 40, 38.7, 41.5];

const res1 = calculateAverage(temperatures1); // 38.5

console.log ("res1; " + res1);

const temperatures2 = [36, 37.4, 39, 41, 36.6];

const res2 = calculateAverage(temperatures2); // 38

console.log ("res2; " + res2);

const temperatures3 = [];

const res3 = calculateAverage(temperatures3); // null

console.log ("res3; " + res3);
