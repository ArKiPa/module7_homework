//Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем.Функция должна возвращать true или false.

function hasInObject(inputObject, inputKey) {
    for (let key in inputObject) {
        if (key == inputKey) {
            return true;
        }
    }
    return false;
}
let obj = { name: "Ivan", student: true };
console.log(hasInObject(obj, "student"));