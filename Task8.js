/*Создайте произвольный массив Map.Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».*/

let map = new Map();
map.set("red", "One");
map.set("orange", "Two");
map.set("yellow", "Three");
map.set("green", "Four");
map.set("blue", "Five");
map.set("indigo", "Six");
map.set("violet", "Seven");

for (let name of map.keys()) {
    console.log("Ключ — " + name + ", " + " значение — " + map.get(name));
}