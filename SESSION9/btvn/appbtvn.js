let click = document.getElementById("click")
let div = document.getElementById("thinh")
click.onclick = function(){
        if( div.style.display !== "none" ){
            div.style.display = "none";
        }
        else{
            div.style.display = "block"
        }
}


let btn = document.getElementById("btn");
let div1 = document.getElementById("exercise");

btn.onclick = function(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let color = `rgb(${r} , ${g} , ${b}) `;

    div1 .style.backgroundColor = color ;
};

// rgb (r , g , b)
// r , g , b = [0 -- 255]

let chanGe = document.getElementById("chanGe");
let changeblock = document.getElementById("changeblock");
let changeblock2 = document.getElementById("changeblock2");

chanGe.onclick = function (){
    let a ="";

    a = changeblock.innerHTML;
    changeblock.innerHTML = changeblock2.innerHTML;
    changeblock2.innerHTML = a;
}

let fontsize2 = document.getElementById("fontsize");
let fontsize1 = document.getElementById("fontsize1");
let up = "14";
fontsize2.onclick = function (){
    up = Number(up) + 1 ;
    fontsize1.style.fontSize = `${up}px`;
}

