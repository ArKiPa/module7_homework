//Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств.Данная функция не должна возвращать значение.

function elementsObject(inputObject) {
    for (let key in inputObject) {
        if (inputObject.hasOwnProperty(key)) {
            console.log("элемент с ключом: " + key + " и значением: " + inputObject[key]);
        }
    }
}
let obj = { name: "Ivan", student: true };
elementsObject(obj);