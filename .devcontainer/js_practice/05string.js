const nm="indrayani";
const gr="here";

console.log(`hello ${nm} ${gr}`);
console.log(nm+" " +gr);

const name = new String ('ranveer-rb');

console.log(name);
console.log(name[2]);

console.log(name.__proto__);

console.log(name.length);

console.log(name.toUpperCase());

console.log(name.charAt('4'));

console.log(name.indexOf('r'));


const newString = name.substring(0,6);

console.log(newString);

const anothername = name.slice(-8);

console.log(anothername);

const newString1 = "    indray    ";
console.log(newString1);

console.log(newString1.trim());
const url = "https://indrayani.com/indrayani%20bhosale";
console.log(url.replace('%20','-'));
console.log(url.includes());

console.log(name.split('-'))