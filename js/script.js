console.log('Hello, front end');
  var result = 0;
  var celsius = 0;
  var farenheit = 0;

function temperature() {
  var input = document.getElementById("inputButton").value;

  if(document.getElementById("f").checked) {
    console.log("Converting Farenheit to Celsius!")
    var celsius = (5/9)*(input - 32);
    celsius = Math.round(celsius);
    result = celsius.toString() + "°C";

  } else {

    console.log("Converting Celsius to Farenheit")
    var farenheit = ((input*9/5) + 32);
    farenheit = Math.round(farenheit);
    result = farenheit.toString() + "°F";
  }
  document.getElementById("answer").textContent = result;
}

document.getElementById("submission").addEventListener("click", function() {
  console.log("Submit button clicked");
  temperature();
});

document.getElementById("clearing").addEventListener("click", function() {
  console.log("Clear button clicked");
  document.getElementById("inputButton").value = "";
  result = "";
  document.getElementById("answer").textContent = "Waiting for input..";
});

// function boxColor () {
//   var backgrd = document.getElementById("inputButton").style.background-color;
//   if (celsius > 35 || farenheit > 95) {
//     backgrd = rgb(63,208,255);
//   } else if (celsius =< 0 || farenheit =< 32) {
//     backgrd = rbg(255,83,82)
//   } else {
//     backgrd = rgb(255,255,255);
//   }
// }


// function setInputAsTitle() {
//   var title = document.getElementById("title");
//   var input = document.getElementsByTagName("input")[0];
//
//   var value = input.value;
//   var result = 2 * value;
//
//   title.textContent = result;
// }
//
// document.addEventListener('DOMContentLoaded', function() {
//   console.log("DOM loaded");
//
//   // attach a click handler to the set title button
//   document.getElementById("set-title").addEventListener("click", function() {
//     console.log("set title button clicked");
//     setInputAsTitle();
//   });
//
//   // attach a click handler to the blue button
//   document.getElementById("blue").addEventListener("click", function() {
//     console.log("blue button clicked");
//     var block = document.getElementById("block");
//     block.classList.remove("red");
//     block.classList.add("blue");
//   });
//
//   // attach a click handler to the red button
//   document.getElementById("red").addEventListener("click", function() {
//     console.log("red button clicked");
//     var block = document.getElementById("block");
//     block.classList.remove("blue");
//     block.classList.add("red");
//   });
//
// });
