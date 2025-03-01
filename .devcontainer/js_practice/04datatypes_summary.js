//primitive datatypes

// 7 types => number,boolean,null,undefined,BigInt,symbol,string

//reference datatype

//array,object,functions

const id =Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigint = BigInt(3278336283682336);
console.log(bigint);

const a =8765434567897654;
console.log(a);

const b =987654324567890768574635243n;
console.log(b);


//arrays

const heros = ['spiderman','batman','thor'];

//object

let myobj={
    nm:'indra',
    age:20,
}
console.log(myobj,heros);

//function

const myfun = function(){
    console.log('hello js');
}
myfun()

console.log(typeof myfun);
console.log(typeof heros);



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//stack(primitive type) and heap(non-primitive)

let d ="aaaa";
let e = d;

e="bbb";
console.log(d);
console.log(e);

let userone = {
    email:"aaaa",
    upi:987654,
}

let usertwo = userone;

console.log(usertwo);

usertwo.email="kajhgfhjajk";

console.log(usertwo.email);
console.log(userone.email);