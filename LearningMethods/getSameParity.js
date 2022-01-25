// Реализуйте функцию getSameParity, которая принимает
//  на вход массив чисел и возвращает новый, состоящий из элементов, 
//  у которых такая же чётность, как и у первого элемента входного массива.
//   Экспортируйте функцию по умолчанию.
// Примеры

// getSameParity([]);        // []
// getSameParity([1, 2, 3]); // [1, 3]
// getSameParity([1, 2, 8]); // [1]
// getSameParity([2, 2, 8]); // [2, 2, 8]


// Подсказки

//     Проверка чётности - остаток от деления: item % 2 === 0 — чётное число.
//     Если на вход функции передан пустой массив, то она должна вернуть пустой массив.
//     Для работы с отрицательными числами может понадобиться функция нахождения модуля Math.abs


const compact = (coll) => {
    if (coll.length === 0) {
      return [];
    }
  
    const result = [];
    const remainder = Math.abs(coll[0] % 2);
  
    for (const item of coll) {
      if (Math.abs(item % 2) === remainder) {
        result.push(item);
      }
    }
  
    return result;
  };
   
    
const coll1 = [];        // []
const coll2 = [1, 2, 3]; // [1, 3]
const coll3 = [1, 2, 8]; // [1]
const coll4 = [2, 2, 8]; // [2, 2, 8]

const res1 = compact(coll1);
const res2 = compact(coll2);
const res3 = compact(coll3);
const res4 = compact(coll4);

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
