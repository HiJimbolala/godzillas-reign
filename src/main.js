// get our HTML into JavaScript
let clicker = document.getElementById("clicker")
let display = document.getElementById("display")

let score = 0

// When clicker button is pressed
clicker.addEventListener("click", function() {
    // Increase score by 1
    score ++
    // Update paragraph with score 
    display.innerText = score + " Destruction caused"
})


let buy = document.getElementById("buy")
let displayTwo = document.getElementById("displayTwo")

let purchase = 0

clicker.addEventListener("click", function() {
    
    purchase ++
     
    display.innerText = purchase + " "
})
