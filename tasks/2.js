// Сейчас в консоль выводится
//  ReferenceError: firstName is not define
// Изменить код так, чтобы в консоль вывелась переменная firstName
function print() {
  function log() {
    firstName = "Beetroot";
  }
  log();
}

print();
console.log(firstName);
