let d = new Date();
console.log(d);

console.log(d.toString());
console.log(d.toLocaleString());
console.log(d.toDateString());
console.log(typeof d);

let myCreatedDate = new Date(2025,0,23);

console.log(myCreatedDate.toString());
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());
  

let CreatedDate = new Date("2025-04-08");

console.log(CreatedDate);
console.log(CreatedDate.toDateString());
console.log(CreatedDate.toLocaleDateString());

let Created = new Date("04-08-2025");
console.log(Created);

let time = Date.now();
console.log(time);

console.log(CreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate.getHours());
console.log(newDate.getFullYear());
console.log(newDate.getMonth()+1);
console.log(newDate.getDay()+4);

newDate.toLocaleString('default',{
weekday:"long"
    })