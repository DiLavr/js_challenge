// Реализуйте и экспортируйте по умолчанию функцию, которая получает 
// на вход строку и считает, сколько символов (без учёта повторяющихся символов)
//  использовано в этой строке. Например, в строке yy используется всего один символ — y. 
//  А в строке 111yya! — используется четыре символа: 1, y, a и !.
// Примеры

// const text1 = 'yyab'; // y, a, b

// countUniqChars(text1); // 3



// const text2 = 'You know nothing Jon Snow';

// countUniqChars(text2); // 13



// // Если передана пустая строка, то функция должна вернуть `0`

// const text3 = '';

// countUniqChars(text3); // 0

const text1 = 'yyab'; // y, a, b
const text2 = 'You know nothing Jon Snow'; // 13

const unique = (text) => {
    const myArray = text.split("");

    let result = [];

    for (let str of myArray) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }

    return result.length;
};

// решение в задании

const countUniqChars = (text) => {
    const uniqChars = [];
  
    for (const char of text) { // проходим по множеству text
      if (!uniqChars.includes(char)) { // если новый массив не включает значение на переходе
        //  то добавить это значение в новый массив uniqChars
        uniqChars.push(char);
      }
    }
  
    return uniqChars.length; // вернуть длину нового массива
  };


console.log(unique(text2));