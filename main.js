import HashMap from "./HashMap.js";

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