/*Переписать консольное приложение из предыдущего юнита на классы.*/

let currentPower = 0;
let workDevice = [];
class NewDevice {
    constructor(nameDevice, powerDevice) {
        this.name = nameDevice;
        this.power = powerDevice;
        this.switcherStatus = "Off";
    }
    turnOffOn(switcher) {
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
}

class Computer extends NewDevice {
    constructor(modelComputer, yearComputer, nameDevice, powerDevice) {
        super(nameDevice, powerDevice);
        this.model = modelComputer;
        this.year = yearComputer;
    }
}

class Lamp extends NewDevice {
    constructor(brightnessLamp, nameDevice, powerDevice) {
        super(nameDevice, powerDevice);
        this.brightness = brightnessLamp;
    }
}

let myComputer = new Computer("asus", 2020, "computer", 50);
let myLamp = new Lamp(20, "lamp", 10);

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