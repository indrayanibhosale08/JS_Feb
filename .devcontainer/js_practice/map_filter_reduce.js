//map

let a = [41,28,29];
// console.log(a);
 
let arr = a.map((value,index,array)=>{
    console.log(value,index,array);
    return value+1;
});

// console.log(arr);
arr = a.map((values)=>{
    console.log(values);
    return values-1;
});

let b = [20,93,84];
 let brr = b.forEach((value,index) => {
    console.log(value,index);
 });

 const num = [2,4,6,8,6];
 const sqr = num.map(square);

 console.log(sqr);
function square(value){
  return Math.pow(value,2);
 }
 
//  console.log(b);

 //filter method

 let crr = [20,84,10]

 let c = crr.filter((value)=>{
   return value>10;
 });
//  console.log(crr);
//  console.log(c);

 console.log(a,b,c);
console.log(arr,brr,crr);
 //reduce method


let d = [4,3,2,9,6,7]
let drr = d.reduce((h1,h2)=>{
  return h1+h2;
})
console.log(d);
console.log(drr);


const reduce_func =(d1,d2)=>{
  return d1-d2;
}
let drr1 = d.reduce(reduce_func)

console.log(drr1);


//asynchrnous handling then()
let fetchData = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data loaded"), 2000);
});

fetchData.then(response => console.log(response));