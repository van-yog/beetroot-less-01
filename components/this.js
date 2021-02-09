// Function
/* 
function sayHi() {
  console.log("Function: ", this);
}
sayHi();
 */

// Plane object
/* 
 const person = {
  sayHi() {
    console.log("Plane object: ", this);
  },
};
person.sayHi();
*/

// Class
/* 
class User {
  constructor() {
    console.log("Class: ", this);
  }
}
new User();
 */

/* == значения this  зависит от того  относительно какого объекта 
    вызываем функцию
*/

/* 
const user1 = {
  firstName: "Bill",
  sayHi: function () {
    console.log("Hi " + this.firstName);
  },
};
const user2 = {
  firstName: "John",
  sayHi: function () {
    console.log("Hi " + this.firstName);
  },
};

user1.sayHi(); // Hi Bill
user2.sayHi(); // Hi John
*/

/* this всегда указывает на ближайший объект  */
/* 
const user = {
  firstName: "Bill",
  phones: {
    homePhone: 222333,
    getHomePhone: function () {
      return `${this.firstName} has phone ${this.homePhone}`;
    },
  },
};
console.log(user.phones.getHomePhone()); // undefined has phone 222333
 */
