//Дан массив.Нужно вывести в консоль количество чётных и нечётных элементов в массиве.Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.

let x = [1, 1, 2, 4, 1, 3, 1, 0, "п", true];
let NumberEven = 0;
let NumberOdd = 0;
let Number0 = 0;
let NumberOther = 0;
for (let i = 0; i <= x.length - 1; i++) {
    if (typeof (x[i]) == typeof (1)) {
        if (x[i] === 0) {
            Number0 = Number0 + 1;
        } else {
            if (x[i] % 2 == 1) {
                NumberOdd = NumberOdd + 1;
            } else {
                NumberEven = NumberEven + 1;
            }
        }
    } else {
        NumberOther = NumberOther + 1;
    }
}
console.log(x);
console.log("Количество нулевых элементов = " + Number0);
console.log("Количество четных элементов = " + NumberEven);
console.log("Количество нечетных элементов = " + NumberOdd);
console.log("Количество нечисловых элементов = " + NumberOther);