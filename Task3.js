/*Написать функцию, которая создает пустой объект, но без прототипа.*/

function EmptyObject(nameEmptyObject) {
    nameEmptyObject = {};
    return nameEmptyObject;
}
let myObject = EmptyObject("newObject")
console.log(myObject);