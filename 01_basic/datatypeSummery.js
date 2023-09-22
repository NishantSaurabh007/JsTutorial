/*
There are two categorigation of datatypes based on the holding properties in the memory or memory allocation.
JavaScript is a Dynamicaly typed language
1) Primitive
    7 Types : String, Number, Boolean, null, undefned, BigInt, Symbol(it is used to make value unique)

Refer ECMA Script for the value of datatype
    */


const score = 100;
const temp = 84.5;
const loggedStatus = true;
let email = "nishant@gmail.com"

const id = Symbol(1001);
const id2 = Symbol(1001);

console.log(typeof(id, id2));
console.log(id===id2);

const bigNum = 1234567890123456n
console.log(typeof(bigNum));

/*
2) Non-Primitive or Reference Type
    3 Types : Array, Objects, Functions
*/

const emp = ["Adarsh", "Nikki", "Nitu"]

let smartEmp = {
    name : "Prakash",
    age: 30,
    city: "Barauni"
}

const newFunc = function(){
    console.log("hello emloyees");
}

// console.log(typeof(newFunc);
//console.log(typeof(newFunc());

console.log(typeof myFunc);
console.log(newFunc);
console.log(typeof smartEmp);
console.log(typeof(emp));

