// let username = window.prompt("ENter your name");

// console.log("Hello ",username);

let username; 

document.getElementById("myButton").onclick = function(){
    username = document.getElementById("testing").value;
    console.log(username);
    document.getElementById("Titulo").innerHTML = "Hello "+username;
}