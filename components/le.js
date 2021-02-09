"use strict";
let user = "Bill";
function a() {
  let user = "Tom";
  b();
}
function b() {
  console.log(user);
}
a();
