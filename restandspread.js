//rest
function addnumber(a, b, c, ...arg) {
  console.log(arg);
  return a + b + c;
}
const res = addnumber("2,3,4,4,5,6,6,7");
console.log(res);
//spread
var a = [1, 2, 3];
var b = [4, 5, 6];
a.forEach((element) => {
  b.forEach((element2) => {
    console.log("ans =", element + element2);
  });
});
var c = [...a, ...b];
console.log(c);
