// Lesson 1 -snobnus + bigNumber
var cat;
var myCat;
var myLovelyCat;

var name = 'Vasya'; // это строка
var age = 25; // это число

myCat = {
    nickname: "Рыжий",
    color: "Orange",
    paws: 4,
} // это объект
console.log(myCat, typeof myCat);
console.log("Это мой кот - " + myCat.nickname + ". У него " + myCat.paws + " лапы.");

var shoppingList = ["Хлеб", "Молоко", "Сыр"];
console.log(...shoppingList)

// для примера с Василеем
var isMan = true; // это булево значение (boolean)
var isWoman = false;

var valueInBox = null; // null

var bike; // undefined

var id = 'id123456-12345' // symbol -Тип symbol (символ) используется 
// для создания уникальных идентификаторов в объектах. 
// Мы упоминаем здесь о нём для полноты картины, изучим этот тип после объектов.

//Пример списка с ценой:

var shoppingListFor5ka = [
    {item: "Хлеб", price: 26},
    {item: "Сыр", price: 129},
    {item: "Кофе", price: 69},
    {item: "Сиги", price: 170},
];

console.dir(shoppingListFor5ka);