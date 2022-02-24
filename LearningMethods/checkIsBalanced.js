// Необходимо реализовать функцию, которая проверяет, что парные скобки сбалансированы.

const checkIsBalanced = (expression) => {
    // Инициализация стека
    const stack = [];
    // Проходим по каждому символу в строке
    for (const symbol of expression) {
      // Смотрим открывающий или закрывающий
      if (symbol === '(') {
        stack.push(symbol);
      } else if (symbol === ')') {
        // Если для закрывающего не нашлось открывающего, значит баланса нет
        if (!stack.pop()) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  };

  console.log(checkIsBalanced('((())((())))')); //true
  console.log(checkIsBalanced('((())())')); //true
  console.log(checkIsBalanced('((()())')); //false
  console.log(checkIsBalanced('(')); //false
  console.log(checkIsBalanced('')); //false