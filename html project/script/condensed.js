// let username = window.prompt("ENter your name");

// console.log("Hello ",username);

// let a, b; 

// document.getElementById("myButton").onclick = function(){
//     hyp = document.getElementById("testing").value;
//     console.log(hyp);
//     document.getElementById("Titulo").innerHTML = "THe hypotenuse is "+ hyp;
// }

let a = window.prompt("enter a side A");
let b;
let hyp;

document.getElementById("MyButton").onclick = function() {
    b = document.getElementById("testing").value;
    document.getElementById("Titulo").innerHTML = "Wooo!!"
}

hyp = math.sqrt((Math.pow(a, 2) + Math.pow(b, 2)));

console.log("The hypotenuse is. . . " hyp);
let rounded = Math.abs(circumference);
console.log(rounded);
