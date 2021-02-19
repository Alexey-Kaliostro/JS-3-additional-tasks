//=-==-=-=-=--=-=-=-=-=-=-=-=-=-===-
console.log(" ");
console.log("Task-27");
console.log(" ");
//=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-
/*

Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

Тесты
Объявлена функция filterArray(numbers, value).
Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5].
Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5].
Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает [].
Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76].
Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76].
Вызов функции filterArray() со случайным массивом и числом возвращает правильный массив.
Функция calculateTotalPrice() использует цикл for..of.

*/

//Task START

function filterArray(numbers, value) {
  // Пиши код ниже этой строки
    
    const filteredNumbers = [];

  for (singleNumber of numbers) {
    const number = singleNumber;

    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
    
    /*
  const filteredNumbers = [];

  for (let i = 0; i < numbers.length; i += 1) {
    const number = numbers[i];

    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  */
    
  // Пиши код выше этой строки
}

//Task END

console.log(" ");
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");


