// Реализуйте и экспортируйте по умолчанию функцию, которая высчитывает 
// сумму всех элементов массива, которые делятся без остатка на 3 (три).
// Примеры

// const calculateSum1 = [8, 9, 21, 19, 18, 22, 7];
// calculateSum(calculateSum1); // 48

// const calculateSum2 = [2, 0, 17, 3, 9, 15, 4];
// calculateSum(calculateSum2); // 27

// В случае пустого массива функция должна вернуть 0
//  (для этого в коде можно использовать guard expression):

// const calculateSum = [];
// calculateSum(calculateSum); // 0

const Sum = (calculateSum) => {
    // Начальное значение суммы
    let sum = 0;
    for (let i = 0; i < calculateSum.length; i += 1) {
        // элементов массива, которые делятся без остатка на 3 (три).
        if (calculateSum[i] % 3 == 0) {
            // Поочередно складываем все элементы
            sum += calculateSum[i];
        }
    }
    return sum;
};


const calculateSum1 = [8, 9, 21, 19, 18, 22, 7];
const calculateSum2 = [2, 0, 17, 3, 9, 15, 4];
const calculateSum3 = [];

const res1 = Sum(calculateSum1);
const res2 = Sum(calculateSum2);
const res3 = Sum(calculateSum3);

console.log("res1: " + res1);
console.log("res2: " + res2);
console.log("res3: " + res3);