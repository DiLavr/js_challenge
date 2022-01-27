// Реализуйте и экспортируйте по умолчанию функцию, 
// которая принимает на вход в виде массива кошелёк с деньгами и название валюты и 
// возвращает сумму денег указанной валюты.

// Реализуйте данную функцию используя управляющие инструкции.

// Параметры функции:

//     Массив, содержащий купюры разных валют с различными номиналами
//     Наименование валюты

// Примеры

const money1 = [
  'eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5',
];
// getTotalAmount(money1, 'usd') // 16
 
const money2 = [
  'eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200',
];
// getTotalAmount(money2, 'eur') // 135
 
const money3 = [
  'eur 10', 'rub 50', 'eur 5', 'rub 10', 'rub 10', 'eur 100', 'rub 200',
];
// getTotalAmount(money3, 'rub') // 270

//правельное решение
 
   
    const getTotalAmount = (money, currency) => {
        let sum = 0;
      
        for (const bill of money) {
          const currentCurrency = bill.slice(0, 3); // обрезаем до значения валюты
          if (currentCurrency !== currency) { //если значение не равно тому, что указанно в параметре функции, то мы пропускаем это значение 
            continue;
          }
          const denomination = Number(bill.slice(4)); //у пропушенного значения обрезаем в обратную стороны до значение стоимости и переводим оператором Number в цыфровой формат
          sum += denomination; // складываем сумму и выводим значение 
        }
      
        return sum;
      };
      
      export default getTotalAmount;

      console.log(getTotalAmount(money3, 'rub')); // 270


