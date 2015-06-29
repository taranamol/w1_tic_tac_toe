// wait for the DOM to finish loading
window.addEventListener("DOMContentLoaded", function() {
  // all code goes here
alert("ready to play tic tac toe?");

var squareId1 = document.querySelector("#col1row1")
squareId1.addEventListener("click", function() {
     event.preventDefault(); 
     squareId1.style.backgroundColor = 'green'
})

var squareId2 = document.querySelector("#col2row1")
squareId2.addEventListener("click", function() {
     event.preventDefault(); 
     squareId2.style.backgroundColor = 'green'
})

var squareId3 = document.querySelector("#col3row1")
squareId3.addEventListener("click", function() {
     event.preventDefault(); 
     squareId3.style.backgroundColor = 'green'
})

var squareId4 = document.querySelector("#col1row2")
squareId4.addEventListener("click", function() {
     event.preventDefault(); 
     squareId4.style.backgroundColor = 'green'
})

var squareId5 = document.querySelector("#col2row2")
squareId5.addEventListener("click", function() {
     event.preventDefault(); 
     squareId5.style.backgroundColor = 'green'
})

var squareId6 = document.querySelector("#col3row2")
squareId6.addEventListener("click", function() {
     event.preventDefault(); 
     squareId6.style.backgroundColor = 'green'
})

var squareId7 = document.querySelector("#col1row3")
squareId7.addEventListener("click", function() {
     event.preventDefault(); 
     squareId7.style.backgroundColor = 'green'
})

var squareId8 = document.querySelector("#col2row3")
squareId8.addEventListener("click", function() {
     event.preventDefault(); 
     squareId8.style.backgroundColor = 'green'
})

var squareId9 = document.querySelector("#col3row3")
squareId9.addEventListener("click", function() {
     event.preventDefault(); 
     squareId9.style.backgroundColor = 'green'
})

});