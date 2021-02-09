// 1. Написать функцию map, которая будет принимать в качестве
// аргумента массив arr и функцию, которая в свою очередь будет
// осуществлять преобразование каждого элемента массива в вид
// "<li class="list-group-item">Tom</li>"
// 2. Вывести элементы трансформированного массива в ul с id="list"
// Вывод должен осуществляться в отсортированном по алфавиту виде

let arr = ["Tom", "Steve", "Bill", "Rita", "Pete", "Ashley"];
const list = document.getElementById("list");

list.innerHTML = map(arr, createList).sort().join("");

// Сигнатура map
function map(arr, fn) {
  let listArr = [];

  for (let i = 0; i < arr.length; i++) listArr.push(fn(arr[i]));

  return listArr;
}

function createList(item) {
  return `<li class="list-group-item">${item}</li>`;
}
