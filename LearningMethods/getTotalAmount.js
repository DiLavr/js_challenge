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


const money1 = ['eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5',];
const money2 = ['eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200',];

    // сначало убераем значения массива где нет нужного нам значения currence
    const cur = "rub"; // задаем значение currence
    const myCompact = (money2) => {
        const result = [];
      
        for (const item of money2) {
      
            if (item.slice(0,3) !== cur) {
            continue;
          }
      
          result.push(item);
        }
      
        return result;
      };

      console.log (myCompact(money2));
      
    //  из полученного массива выделям численные значения и переводим значения из строки в число для последующего сложения
    const justnumbers = (usdarray) => {
        const justnumberresult = [];

        for (const item of usdarray) {
           justnumberresult.push(Number(item.slice(4)));
        }
        return justnumberresult;
    };


//    складываем полученное значение
    
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



 
    console.log(Sum(justnumbers(myCompact(money2))));

    

