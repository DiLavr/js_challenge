// Реализуйте и экспортируйте по умолчанию функцию, 
// которая принимает на вход в виде массива кошелёк с деньгами и название валюты и 
// возвращает сумму денег указанной валюты.

// Реализуйте данную функцию используя управляющие инструкции.

// Параметры функции:

//     Массив, содержащий купюры разных валют с различными номиналами
//     Наименование валюты

// Примеры

// const money1 = [
//   'eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5',
// ];
// getTotalAmount(money1, 'usd') // 16
 
// const money2 = [
//   'eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200',
// ];
// getTotalAmount(money2, 'eur') // 135
 
// const money3 = [
//   'eur 10', 'rub 50', 'eur 5', 'rub 10', 'rub 10', 'eur 100', 'rub 200',
// ];
// getTotalAmount(money3, 'rub') // 270


const money1 = [

    'eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5',];

    const str = money1[0];  
    console.log(str.slice(0,3));
    console.log(money1[0].slice(4));

    const Sum = (calculateSum) => {
        // Начальное значение суммы
        let sum = 0;
        for (let i = 0; i < calculateSum.length; i += 1) {
            // элементов массива, которые делятся без остатка на 3 (три).
           
                // Поочередно складываем все элементы
                sum += calculateSum[i];
            
        }
        return sum;
    };
    
    
    const calculateSum1 = [8, 9, 21, 19, 18, 22, 7];
    const calculateSum2 = [2, 0, 17, 3, 9, 15, 4];
    const calculateSum3 = [];
    
    const res1 = Sum(calculateSum1);
    const res2 = Sum(calculateSum2);
    const res3 = Sum(calculateSum3);

    console.log("res1 of: " + calculateSum1 + " = " + res1);