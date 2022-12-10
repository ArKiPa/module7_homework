/*Дана строка.Необходимо вывести в консоль перевёрнутый вариант.Например, "Hello" -> "olleH".*/

let x = "Hello";
let SumStr = "";
for (let i = 1; i <= x.length; i++) {
    SumStr = SumStr + x.slice(x.length - i, x.length - i + 1);
}
console.log(x);
console.log(SumStr);