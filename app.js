const colors = ["red","green","yellow","orange","#567878"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){

    let randomNumber = getRandom();
    
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent=colors[randomNumber];
})

function getRandom(){
    return Math.floor(Math.random()*colors.length);
}