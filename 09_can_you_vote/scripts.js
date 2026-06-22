// Instructions in the CSS

function checkAge () { 
  let age = document.getElementById("ageBox").value
  let message

  if (age > 100){
    message = "you're a living legend"
  } else if (age >= 18){
    message = "You can vote!";
  } else if (age >= 16){
    message = "You can pre-enrol.";
   } else if (age = 0){
    message = "Peter how are you doing that...";
   } else {
    message = "Sorry bro you can't register."
   }
      

document.getElementById("result").innerText = message
  }

document.getElementById("submit").onclick = checkAge
