// Реализуйте и экспортируйте по умолчанию функцию, которая извлекает из массива элемент по указанному индексу, 
// если индекс существует, либо возвращает значение по умолчанию. Функция принимает на вход три аргумента:

//     Массив
//     Индекс
//     Значение по умолчанию (равно null)


// get(cities, 1); // 'london'
// get(cities, 4); // null
// get(cities, 10, 'paris'); // 'paris'
// get(cities, -1, 'oops'); // 'oops'

// My solution

const cities = ['moscow', 'london', 'berlin', 'porto'];

function get(testArr, element, param = 'default value') {

    if (testArr.length - 1 < element && param === 'default value') {
        return null;
    }



    if (testArr.length - 1 < element || element <= 0 && param != 'default value') {
        return param;
    }

    return testArr[element];
}

// more clear solution:

function get1 (testArr, element, defaultValue = null) {
    if (element >= testArr.length || element < 0) {
      return defaultValue;
    }
  
    return testArr[element];
  };
  
  
console.log(get(cities, 1));
console.log(get(cities, 4));
console.log(get(cities, 10, 'paris'));
console.log(get(cities, -1, 'oops'));
console.log(get1(cities, 1));
console.log(get1(cities, 4));
console.log(get1(cities, 10, 'paris'));
console.log(get1(cities, -1, 'oops'));