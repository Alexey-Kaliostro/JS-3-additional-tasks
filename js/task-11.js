//=-==-=-=-=--=-=-=-=-=-=-=-=-=-===-
console.log(" ");
console.log("Task-11");
console.log(" ");
//=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-
/*

Задание
Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.

Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).

Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

Тесты
Объявлена функция calculateEngravingPrice(message, pricePerWord).
Вызов calculateEngravingPrice('JavaScript у меня в крови', 10) возвращает 50.
Вызов calculateEngravingPrice('JavaScript у меня в крови', 20) возвращает 100.
Вызов calculateEngravingPrice('Веб-разработка это творческая работа', 40) возвращает 160.
Вызов calculateEngravingPrice('Веб-разработка это творческая работа', 20) возвращает 80.

*/

//Task START

function calculateEngravingPrice(message, pricePerWord) {
  // Пиши код ниже этой строки

return message.split(' ').length * pricePerWord;

  // Пиши код выше этой строки
}

//Task END

console.log(" ");
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");


