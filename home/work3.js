function doMath(a, b, c) {
  console.log(`${this.firstName} adds ${a + b + c}`);
}

const ob = {
  firstName: "Bill",
};

/*
Реализовать функцию bind которая будет возвращать
нижеприведенный результат
Создать 2 реализации - с использованием ES 5, и ES 6 
*/

function bind(ob, fn) {
  // todo
}

bind(ob, doMath, 1, 2, 3)(); // Bill adds 6
bind(ob, doMath)(1, 2, 3); // Bill adds 6
bind(ob, doMath, 1)(2, 3); // Bill adds 6
bind(ob, doMath, 1, 2)(3); // Bill adds 6
bind(ob, doMath, 1, 2, 3)(4, 5, 6); // Bill adds 6
