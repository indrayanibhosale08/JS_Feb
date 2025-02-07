//generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#';

    for(let i = 0; i<6;i++){
        color+=hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

console.log(randomColor());



let intervalid
const startChangeColor = function (){
if(intervalid){
    intervalid = setInterval(changebgcolor,1000);
}
    function changebgcolor () {
        document.body.style.backgroundColor = randomColor();
    }
};

const stopChangeColor = function (){
    clearInterval(intervalid);
    intervalid=null;
}

document.querySelector("#start").addEventListener("click",startChangeColor)

document.querySelector("#stop").addEventListener("click",stopChangeColor)