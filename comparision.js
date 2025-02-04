// always compare same datatypes
// results are unpredictable if different types are there

console.log(10 > '20'); // false
console.log('10' < 20); // true
console.log(null > 0);//false
console.log(null==0);//false
console.log(null>=0) //true
console.log(null>0) //false
console.log(undefined>=0) //false


// === strict check used for checking datatypes as well