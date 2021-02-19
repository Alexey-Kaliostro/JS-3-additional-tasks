//=-==-=-=-=--=-=-=-=-=-=-=-=-=-===-
console.log(" ");
console.log("Task-25");
console.log(" ");
//=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-
/*

Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.

Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

Тесты
Объявлена функция checkFruit(fruit).
Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2].
Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2].
Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3].
Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40].
Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает [].
Вызов функции getCommonElements() со случайными двумя массивами возвращает правильный массив.
В цикле for использовались методы includes и push.

*/

//Task START

function getCommonElements(array1, array2) {
  // Пиши код ниже этой строки
let newArray = [];
  for (const num of array1) {
    if (array2.includes(num)) {
      newArray.push(num);
    }
  }
  return newArray;

  
  // Пиши код выше этой строки
}

//Task END


/*
first solution


function getCommonElements(array1, array2) {
  // Пиши код ниже этой строки
const sameNumbers = [];
let firstNumber;
let secondNumber;

for(let i = 0; i < array1.length; i++){
    firstNumber = array1[i];
    
    for(let j = 0; j < array2.length; j++){
        secondNumber = array2[j]
        
        if(firstNumber === secondNumber){
            sameNumbers.push(firstNumber);
    
        }
   
    }

}
  return sameNumbers;
  // Пиши код выше этой строки
}
*/

/*
Second solution


function getCommonElements(array1, array2) {
  // Пиши код ниже этой строки
const sameNumbers = [];
let firstNumber;
let secondNumber;

for(let i = 0; i < array1.length; i++){
    firstNumber = array1[i];
    
    for(let j = 0; j < array2.length; j++){
        secondNumber = array2[j]
        
        if (array1.includes(array2[j])){
           sameNumbers.push(array2[j]);
                    }
   
    }return sameNumbers.sort(function(a, b) {
  return a - b;
});

}

  // Пиши код выше этой строки
}



*/

console.log(" ");
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");


