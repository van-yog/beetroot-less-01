function sayHi() {
  console.log(`Hi ${this.firstName}`);
}
const u1 = {
  firstName: "Bill",
};
const u2 = {
  firstName: "Tom",
};
