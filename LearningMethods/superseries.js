// Суперсерия Канада-СССР – это 8 товарищеских хоккейных матчей, проводившихся между командами СССР и Канады в 72
//  (первая суперсерия) и в 74 годах (вторая суперсерия).
//   В этом задании вам предстоит написать функцию, которая вычисляет команду, выигравшую суперсерию.
// superseries.js

// Реализуйте и экспортируйте по умолчанию функцию, которая находит команду победителя для конкретной суперсерии.
//  Победитель определяется как команда, у которой больше побед (не количество забитых шайб) в конкретной серии.
//   Функция принимает на вход массив, в котором каждый элемент — это массив, описывающий счет в конкретной игре
//    (сколько шайб забила Канада и СССР). Результат функции – название страны: 'canada', 'ussr'.
//     Если суперсерия закончилась в ничью, то нужно вернуть null.
const scores = [
    [3, 7], // Первая игра
    [4, 1], // Вторая игра
    [4, 4], // NaN
    [3, 5],
    [4, 5],
    [3, 2],
    [4, 3],
    [6, 5],
    ];

// const getSuperSeriesWinner = scores => {
//     const matchresults = [];
//     for (const item of scores) {
//         const newItem = Math.sign(scores[item][0] - scores[item][1]);
//         {
//         matchresults.push(newItem); }
//     }
//     return matchresults;
// };


// const a = Number(scores[0][0]);
// const b = Number(scores[0][1]);
// console.log(Math.sign(scores[0][0] - scores[0][1]));
// const c = Number(a-b);

const getSuperSeriesWinner = (scores) => { // берем массив scores
    let result = 0; // объявляем начало 
    for (const score of scores) { // перебираем массив с нуля
      result += Math.sign(score[0] - score[1]); //вот эта часть не понятна - почему score, а не [score]?
    }
  
    if (result > 0) {
      return 'canada';
    }
    if (result < 0) {
      return 'ussr';
    }
  
    return null; // если нет возвращаем null
  };

console.log(getSuperSeriesWinner(scores));