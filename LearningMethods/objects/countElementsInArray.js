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
  

  
console.log('test');
  console.log(countFruitsbag);