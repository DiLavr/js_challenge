// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на 
// вход два отсортированных массива и находит их пересечение. Пересечение двух массивов A и B
//  — это массив только с теми элементами A и B, которые одновременно принадлежат обоим массивам, без дублей.
// Примеры

// getIntersectionOfSortedArrays([10, 11, 24], [10, 13, 14, 18, 24, 30]); // [10, 24]
// getIntersectionOfSortedArrays([10, 11, 24], [-2, 3, 4]); // []
// getIntersectionOfSortedArrays([], [2]); // []

// Моё решение

let a = [10, 11, 24];
let b = [10, 13, 14, 18, 24, 30];

let c = [1, 1, 1, 2, 2, 2];
let d = [1, 1, 2, 2, 3, 3];

const getIntersectionOfSortedArrays = (a, b) => {
        let t;
    if (b.length > a.length) t = b, b = a, a = t; // indexOf to loop over shorter
    return a.filter(function (e) {
        return b.indexOf(e) > -1;
    });
}

function unique (arr) { //функция уникального значения массива
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }

// Решение на ревью
const getIntersectionOfSortedArrays = (arr1, arr2) => {
    const size1 = arr1.length;
    const size2 = arr2.length;
  
    let i1 = 0;
    let i2 = 0;
    const result = [];
  
    while (i1 < size1 && i2 < size2) {
      const lastCommon = result[result.length - 1];
      if (arr1[i1] === arr2[i2] && arr1[i1] !== lastCommon) {
        result.push(arr1[i1]);
        i1 += 1;
        i2 += 1;
      } else if (arr1[i1] > arr2[i2]) {
        i2 += 1;
      } else {
        i1 += 1;
      }
    }
  
    return result;
  };



console.log(unique(getIntersectionOfSortedArrays(c, d)));

// const getIntersectionOfSortedArrays = (arrA, arrB) => {
    
// let result = arrA.filter(x => arrB.includes(x)); 
// what element included 
// let difference = arrA.filter(x => !arrB.includes(x)); // what element is different and not included in these 2 arrays
// return result;
// }

// function getInt(arrA, arrB) {
// 	let result = [];
	
// 	for (let elem of arrA) {
// 		if (inArray(elem, arrB)) {
// 			result.push(elem);
// 		}
// 	}
	
// 	return result;
// }

// function inArray(elem, arr){
// 	return arr.indexOf(elem) !== -1;

// }
// console.log(included);
// console.log(difference);

