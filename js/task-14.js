//=-==-=-=-=--=-=-=-=-=-=-=-=-=-===-
console.log(" ");
console.log("Task-14");
console.log(" ");
//=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-
/*

Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, цикл for...of.

Тесты
Объявлена функция countProps(object).
Вызов countProps({}) возвращает 0.
Вызов countProps({ name: 'Mango', age: 2 }) возвращает 2.
Вызов countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }) возвращает 3.
Функция подсчитывает только собственные свойства объекта.
Функция использует метод Object.keys() и, возможно, цикл for...of.

*/

//Task START

function countProps(object) {
  // Пиши код ниже этой строки
  let propCount = 0;

 const keys = Object.keys(object);
  
  for (const key of keys){
    propCount +=1
  }

  return propCount;
  // Пиши код выше этой строки
}

//Task END

console.log(" ");
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");


