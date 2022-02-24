// Реализуйте и экспортируйте по умолчанию функцию, 
// принимающую на вход два массива и возвращающую количество общих уникальных значений в обоих массивах.
// Примеры:

// // Общие уникальные элементы: 1, 3, 2
// getSameCount([1, 3, 2, 2], [3, 1, 1, 2, 5]); // 3

// // Общие уникальные элементы: 4
// getSameCount([1, 4, 4], [4, 8, 4]); // 1

// // Общие уникальные элементы: 1, 10
// getSameCount([1, 10, 3], [10, 100, 35, 1]); // 2

// // Нет элементов
// getSameCount([], []); // 0

const getSameCount = (coll1, coll2) => { //берем 2 массива
    let count = 0; // оптерелем счетчик
    const uniqColl1 = _.uniq(coll1); // делаем 2а массива с уникальными значениями
    const uniqColl2 = _.uniq(coll2);
  
    // перебирая значения первого массива с первого до последнего, спускаемся ниже и 
    // для каждого элемента первого массива сравниваем его с элементом второго массива
    for (const item1 of uniqColl1) {
      for (const item2 of uniqColl2) {
        if (item1 === item2) { // если элементы в певом и во втором массиве равне 
          count += 1; // увеличиваем счетчик на одно значение
        }
      }
    }
  
    return count; // возвращаем значение счетчика    
  };