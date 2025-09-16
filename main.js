import HashMap from "./HashMap.js";
import HashSet from "./HashSet.js";

const test = new HashMap();
 test.set('apple', 'red');
 test.set('banana', 'yellow');
 test.set('carrot', 'orange');
 test.set('dog', 'brown');
 test.set('elephant', 'gray');
 test.set('frog', 'green');
 test.set('grape', 'purple');
 test.set('hat', 'black');
 test.set('ice cream', 'white');
 test.set('jacket', 'blue');
 test.set('kite', 'pink');
 test.set('lion', 'golden');
 test.set('moon', 'silver');
 test.set('Some','More');
 test.set('Some','More');
 test.set('Some1','More');
 test.set('Some2','More');

console.log("----Testing get()----");
console.log(test.get('moon'));
console.log(test.get('dog'));
console.log(test.get('Soup'));

console.log("\n----Testing has()----");
console.log(test.has('jacket'));
console.log(test.has('dog'));
console.log(test.has('bread'));

console.log("\n----Testing remove()----");
console.log(test._size);
console.log(test.remove('jacket'));
console.log(test.remove('dog'));
console.log(test.remove('bread'));
console.log("-------------------------")
console.log(test.has('jacket'));
console.log(test.has('dog'));
console.log(test.length());

console.log("\n----Testing keys()----");
console.log(test.keys())

console.log("\n----Testing values()----");
console.log(test.values())

console.log("\n----Testing entries()----");
console.log(test.entries())

console.log("\n----Testing clear()----");
test.clear();
console.log(test.buckets);

const hstest = new HashSet();
hstest.set('Table');
hstest.set('Glass');
hstest.set('Glass');
hstest.set('Wallpaper');
hstest.set('Golfball');
hstest.set('Fish');
hstest.set('Apple');
hstest.set('Laptop');
hstest.set('CD-player');
hstest.set('Tray');
hstest.set('Ash');
hstest.set('Goldfish');
hstest.set('Guppy');
hstest.set('Fish');
hstest.set('Pencil');
hstest.set('House');
hstest.set('Car');
hstest.set('Dog');
// console.log(hstest.buckets);
console.log(hstest.length())
// console.log(hstest.remove('Vormin'))
// console.log(hstest.remove('Table'));
// console.log(hstest.remove('Glass'));
// console.log(hstest.remove('Glass'));
// console.log(hstest.remove('Wallpaper'));
// console.log(hstest.remove('Golfball'));
// console.log(hstest.remove('Fish'));
// console.log(hstest.remove('Apple'));
// console.log(hstest.remove('Laptop'));
// console.log(hstest.remove('CD-player'));
// console.log(hstest.remove('Tray'));
// console.log(hstest.remove('Ash'));
// console.log(hstest.remove('Goldfish'));
// console.log(hstest.remove('Guppy'));
// console.log(hstest.remove('Fish'));
// console.log(hstest.remove('Pencil'));
// console.log(hstest.remove('House'));
// console.log(hstest.remove('Car'));
// console.log(hstest.remove('Dog'));

// console.log(hstest.length())
// console.log(hstest.buckets)
// console.log(hstest.keys())