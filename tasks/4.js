/*
1. Создать объект person, присвоить его свойству firstName значение "Paul".

2. Создать функцию setName(), которая
 - принимает в качестве  параметра объект ob
 - внутри функции объекту ob присвоить новый пустой объект {}
 - свойству firstName объекта ob присвоить значение "Bill"

3. Вывести в консоль значение свойства firstName объекта person
4. Вызвать функцию setName() и передать ей в качестве аргумента объект person
5. Вывести в консоль значение свойства firstName объекта person
*/

let person = {
  firstName: "Paul",
};

function setName(ob) {
  ob = {};
  ob.firstName = "Bill";
}

console.log("person.firstName = ", person.firstName);
setName(person);
console.log("person.firstName = ", person.firstName);
