// dates.js

// Реализуйте и экспортируйте функцию getWeekends(), которая возвращает массив из двух элементов – названий выходных дней на английском. Функция принимает на вход параметр – формат возврата. Всего есть два возможных значения:

// 'long' (по умолчанию) – массив содержит значения saturday и sunday
// 'short' – массив содержит значения sat и sun
// BEGIN (write your solution here)



 const getWeekends = (format) => {
    const longFormat = ['saturday', 'sunday'];
    const shortFormat = ['sat', 'sun'];
  
    switch (format) {
      case 'long':
        return longFormat;
      case 'short':
        return shortFormat;
      default:
        return longFormat;
    }
  };

console.log("input: getWeekends('long'); OUTPUT: " + getWeekends('long'));
console.log("input: getWeekends('short'); OUTPUT: " + getWeekends('short'));
//   getWeekends('long');
//   getWeekends('short');
  
  // END