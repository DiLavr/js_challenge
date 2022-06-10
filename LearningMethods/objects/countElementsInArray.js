const bag = [
    'apple', 'banana', 'pear',
    'apricot', 'apple', 'banana',
    'apple', 'orange', 'pear',
  ];

  const countFruits = (fruits) => {
    const result = {};
  
    for (const name of fruits) {
      // Проверка на существование
      if (result[name] === undefined) {
        result[name] = 1;
      } else {
        result[name] += 1;
      }
    }
  
    return result;
  };
  
  
  // лучше и правельней способ проверить существование свойств в объектах, использовать метод Object.hasOwn
  const countFruits1 = (fruits) => {
    const result = {};
  
    for (const name of fruits) {
      // Проверка на существование
      // The Object.hasOwn() static method returns true if the specified object has the indicated property as its own property. 
      // If the property is inherited, or does not exist, the method returns false
      if (Object.hasOwn(result, name)) {
        result[name] += 1;
      } else {
        result[name] = 1;
      }
    }
  
    return result;
  };
  

  
console.log('test');
  console.log(countFruits1(bag));