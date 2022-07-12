//string length
let string1="hello my name is shivani"
console.log(`${string1},${string1.length}`);
//position
let index=4;
console.log(`${string1.charAt(index)}`)
console.log(`${string1.at(index)}`)
console.log(`${string1.charCodeAt(index)}`)
//concat
let string2="dsv"
console.log(string1.concat('', string2))
// endsWith
console.log(string1.endsWith('best!'));
console.log(string1.includes("name"));