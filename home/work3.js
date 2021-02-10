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
  let args = [].slice.call(arguments, 2);
  ob.fn = fn;
  return function () {
    let argsSecond = [].slice.call(arguments);
    let arr = args.concat(argsSecond);
    if (arr.length < 3) {
      console.error("Need more arguments");
      return;
    }
    ob.fn(arr[0], arr[1], arr[2]);
  };
}

function bind(ob, fn, ...rest1) {
  ob.fn = fn;
  return (...rest2) => ob.fn(...rest1, ...rest2);
}

bind(ob, doMath, 1, 2, 3)(); // Bill adds 6
bind(ob, doMath)(1, 2, 3); // Bill adds 6
bind(ob, doMath, 1)(2, 3); // Bill adds 6
bind(ob, doMath, 1, 2)(3); // Bill adds 6
bind(ob, doMath, 1, 2, 3)(4, 5, 6); // Bill adds 6
