/*Написать функцию, которая создает пустой объект, но без прототипа.*/

function EmptyObject(nameEmptyObject) {
    nameEmptyObject = {};
    return nameEmptyObject;
}
let myObject = EmptyObject("newObject")
console.log(myObject);

//Вариант 2
function EmptyObject(nameEmptyObject) {
    return nameEmptyObject;
}
let myObject = EmptyObject({})
console.log(myObject);
