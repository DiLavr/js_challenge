// strings.js

// Реализуйте функцию buildDefinitionList(), которая генерирует HTML список определений (теги <dl>, <dt> и <dd>) 
// и возвращает получившуюся строку. При отсутствии элементов в массиве функция возвращает пустую строку.
//  Экспортируйте функцию по умолчанию.
// Параметры функции

//     Список определений следующего формата:

//      const definitions = [
//       ['definition1', 'description1'],
//       ['definition2', 'description2']
//     ];

//     То есть каждый элемент входного списка сам является массивом, содержащим два элемента: термин и его определение.

// Пример использования

const definitions = [
  ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
  ['Бобр', 'Животное из отряда грызунов'],
];


const buildDefinitionList = (definitions) => {
    // При отсутствии элементов в массиве функция возвращает пустую строку
    if (definitions.length === 0) {
      return '';
    }
  
    const parts = [];
  
    for (const definition of definitions) {
    // определяем части встроенного массива для последующей работыпше ыефегы

      const name = definition[0];
      const description = definition[1];
      parts.push(`<dt>${name}</dt><dd>${description}</dd>`);
    }
  
    const innerValue = parts.join('');
    const result = `<dl>${innerValue}</dl>`;
  
    return result;
  };
  
console.log(buildDefinitionList(definitions)); 
// '<dl><dt>Блямба</dt><dd>Выпуклость, утолщение на поверхности чего-либо</dd><dt>Бобр</dt><dd>Животное из отряда грызунов</dd></dl>';

// makeCendored - вводишь text - строку, к которой по массиву stopWord - их можно заменить на '$#%!'


// пример:
// const sentence = 'When you play the game of thrones, you win or you die';
// const result = makeCensored(sentence, ['die', 'play']);
// // When you $#%! the game of thrones, you win or you $#%!

// const sentence2 = 'chicken chicken? chicken! chicken';
// const result2 = makeCensored(sentence2, ['?', 'chicken']);
// // '$#%! chicken? chicken! $#%!';


const makeCensored = (text, stopWords) => {
    const words = text.split(' ');
  
    const result = [];
    for (const word of words) {
      const newWord = stopWords.includes(word) ? '$#%!' : word;
      result.push(newWord);
    }
  
    return result.join(' ');
  };


  // END
  