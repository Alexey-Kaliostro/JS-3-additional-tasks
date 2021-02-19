//=-==-=-=-=--=-=-=-=-=-=-=-=-=-===-
console.log(" ");
console.log("Task-23");
console.log(" ");
//=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-
/*

Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).

Тесты
Объявлена функция filterArray(numbers, value).
Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5].
Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5].
Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает [].
Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76].
Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76].
Вызов функции filterArray() со случайным массивом и числом возвращает правильный массив.
В цикле for использовался метод push.

*/

//Task START

function filterArray(numbers, value) {
  // Пиши код ниже этой строки
const filteredArr = [];
for (let i = 0; i <= numbers.length; i += 1){
    if (numbers[i] > value){
        filteredArr.push(numbers[i]);
    }
}
return filteredArr;
  // Пиши код выше этой строки
}

//Task END

console.log(" ");
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");


