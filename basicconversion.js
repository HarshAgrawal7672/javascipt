let score=null

console.log(typeof score);

// conversion

let valnumber=Number(score);
console.log(typeof valnumber)
console.log(valnumber) 
// it gives NaN if there is alphabet
// it gives zero if we convert null
// it gives NaN if we convert undefined

let isloggedin="harsh";
let boolloggedin= Boolean(isloggedin)
console.log(boolloggedin)
// 1 == true, 0 == false
// ""== false
// null==false
// undefined==false
// "string"==true