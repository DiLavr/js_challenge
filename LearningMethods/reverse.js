// Реализуйте и экспортируйте функцию reverse(), которая принимает на вход массив и располагает элементы внутри него в обратном порядке.
// Примеры выполнения программы


// import { reverse } from './arrays';

// const names = ['john', 'smith', 'karl'];

// reverse(names);
// console.log(names); // => ['karl', 'smith', 'john']

// reverse(names);
// console.log(names); // => ['john', 'smith', 'karl']

// Решение этой задачи подразумевает самостоятельную реализацию функции без использования встроенного метода reverse().++


function reverse(input) {
    var rev = [];
    for(var i = input.length-1; i >= 0; i--) {
        rev.push(input[i]);
    }
    
    return rev
}


function reverse1(input) {
if (input[i] != input[j]){
for ( var i = input.length-1; i => 0; i--){
    for (var j = 0; i < input.length; j++ ){
        input[i] = input[j];
    }
}
}
return input;
}


function customReverse(input) {

    let leftIndex = 0;
    let rightIndex = input.length - 1;
  
    while (leftIndex < rightIndex) {
  
      // Swap the elements with temp variable
      let temp = input[leftIndex];
      input[leftIndex] = input[rightIndex];
      input[rightIndex] = temp;
  
      // Move indices to the middle
      leftIndex++;
      rightIndex--;
    }
  }


const names = ['john', 'smith', 'karl'];
// console.log(names);
// console.log(reverse(names));
// reverse(names);
// console.log(names);
// console.log("Secont attent");
// console.log("----->" + reverse1(names));
// reverse1(names);
// console.log(names);
// console.log("Third attent");
console.log(names);
customReverse(names);
console.log(names);
customReverse(names);
console.log(names);