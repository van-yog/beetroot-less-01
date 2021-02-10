/*
1. Создать объект person с свойством firstName = "Bill"
2. Создать функцию setName(), которая
  - принимает в качестве  параметра объект ob
  - устанавливает у объекта ob свойство  firstName = "Paul"

3. Вывести в консоль значение свойства firstName объекта person
4. Вызвать функцию setName() и передать ей в качестве аргумента объект person
5. Вывести в консоль значение свойства firstName объекта person
*/

let person = {
  firstName: "Bill",
};

function setName(ob) {
  ob.firstName = "Paul";
}

console.log("person.firstName = ", person.firstName);
setName(person);
console.log("person.firstName = ", person.firstName);
