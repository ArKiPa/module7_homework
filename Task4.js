//Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео.Реализуйте его на прототипах.

//Определите иерархию электроприборов.Включите некоторые в розетку.Посчитайте суммарную потребляемую мощность всех включенных приборов(передайте аргумент).

//Таких приборов должно быть как минимум два(например, настольная лампа и компьютер).Выбрав прибор, подумайте, какими свойствами он обладает.

//План:

//Определите родительскую функцию с методами, которые включают / выключают прибор из розетки.
//Создайте делегирующую связь[[Prototype]] для двух конкретных приборов.
//У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
//Создайте экземпляры каждого прибора.
//Выведите в консоль и посмотрите на результаты работы, можете гордиться собой:)

let currentPower = 0;
let workDevice = [];
function NewDevice(nameDevice, powerDevice) {
    this.name = nameDevice;
    this.power = powerDevice;
    this.switcherStatus = "Off";
}
NewDevice.prototype.turnOffOn = function (switcher) {
    if (switcher === true || switcher === 1 || switcher === "On") {
        this.switcherStatus = "On";
        currentPower = currentPower + this.power;
        workDevice.push(this.name);
    } else {
        this.switcherStatus = "Off";
        currentPower = currentPower - this.power;
        for (let i = 0; i <= workDevice.length - 1; i++) {
            if (workDevice[i] == this.name) {
                workDevice.splice(i, 1);
            }
        }
    }
}

function computer(modelComputer, yearComputer) {
    this.model = modelComputer;
    this.year = yearComputer;
}

function lamp(brightnessLamp) {
    this.brightness = brightnessLamp;
}

computer.prototype = new NewDevice("computer", 50)
let myComputer = new computer("asus", 2020);
lamp.prototype = new NewDevice("lamp", 10);
let myLamp = new lamp(20);

myComputer.turnOffOn(1);
myLamp.turnOffOn(1);
console.log("приборы " + workDevice + " потребляют " + currentPower);
myComputer.turnOffOn(0);
console.log("приборы " + workDevice + " потребляют " + currentPower);
myComputer.turnOffOn(1);
myLamp.turnOffOn(0);
console.log("приборы " + workDevice + " потребляют " + currentPower);
console.log(myComputer);
console.log(myLamp);