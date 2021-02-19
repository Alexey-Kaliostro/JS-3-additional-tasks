//=-==-=-=-=--=-=-=-=-=-=-=-=-=-===-
console.log(" ");
console.log("Task-21");
console.log(" ");
//=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-
/*

Напиши фукцнию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

Тесты
Объявлена функция findLongestWord(string).
Вызов функции findLongestWord('The quick brown fox  jumped over the lazy dog') возвращает jumped.
Вызов функции findLongestWord('Google do a roll') возвращает Google.
Вызов функции findLongestWord('May the force be with you') возвращает force.
Вызов функции findLongestWord() со случайной строкой возвращает правильное значение.

*/

//Task START

function findLongestWord(string) {
  // Пиши код ниже этой строки
   let longestWord = ' ';
  
  for(let i = 0; i < string.split(' ').length; i++){
      
      if (longestWord.length < string.split(' ')[i].length){
          longestWord = string.split(' ')[i];
  }
  
}
  return longestWord;
    // Пиши код выше этой строки
}

//Task END

console.log(" ");
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");


