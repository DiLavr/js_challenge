// Реализуйте и экспортируйте по умолчанию функцию, которая "нормализует" данные переданного урока. 
// То есть приводит их к определенному виду.
// Нормализация происходит путём изменения исходного объекта.

// Было:
// const lesson = {

//     name: 'ДеструКТУРИЗАЦИЯ',
  
//     description: 'каК удивитЬ колек',
  
//   };

// Стало: 
// const lesson = {

//     name: 'Деструктуризация',
  
//     description: 'как удивить колек',
  
//   };

const lesson = {
    name: 'ДеструКТУРИЗАЦИЯ',
    description: 'каК удивитЬ колек',
  };

 function normalize (aaa) {
  aaa.name = _.capitalize();
  aaa.description = aaa.description.toLowerCase();

};

  console.log (normalize (lesson));