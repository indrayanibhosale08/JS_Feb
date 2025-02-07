var c = 300;
console.log(c);
 let a= 500;
 console.log(a);

 if(true){
    let a = 10 
    const b = 20 
    console.log("Inner: ",a);
 }
 console.log(a);
   

 function one(){
    const username = "indra";

    function two (){
        const website = "youtude";
        console.log(username);
    }
    //console.log(website);

    two();
 }
 one();


 if(true){
    const unm = "indra";
    if (unm === "indra"){
        const website = "youtube";
        console.log(unm+website);
    }
    //console.log(website);
 }
 //console.log(unm);

 //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 addone (4);
 function addone (num){
    return num+1;
 }

 addTwo(6);
const addTwo = function(num){
    return num+2
}
