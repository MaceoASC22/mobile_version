let buttonsRef = document.getElementById("home");
let mainRef = document.getElementById("main");
let moreButton = document.getElementById("more");
let homeButton = document.getElementById("homeB");
let jazzy = document.getElementById("jazz");

mainRef.style.display = "none";

moreButton.onclick = function() {
    mainRef.style.display = "inherit";
    buttonsRef.style.display = "none";
}

homeButton.onclick = function() {
    mainRef.style.display = "none";
    buttonsRef.style.display = "flex";
}

jazzy.onclick = function() {
    
}