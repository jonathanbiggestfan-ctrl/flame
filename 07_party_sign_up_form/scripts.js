function showSignupMessage() {
  let name = document.getElementById("nameInput").value;
  let region = document.getElementById("regionInput").value;
  let favMCYT = document.getElementById("favMCYTInput").value;
  let message
  if(name == ''){
    meassage = 'Please fill this in'
  } else if (reigon == ''){
    message = 'Bro I said fill it in'
  } else if (faveMCYT == ''){

  } else {
    let message = `Welcome, from ${region} by the name of ${name}. You seem to like ${favMCYT}, we'll keep note of that to track your address in the future. \nThanks for joining the partie, The Partie loves women in stem.`
  }

  let message = `Welcome, from ${region} by the name of ${name}. You seem to like ${favMCYT}, we'll keep note of that to track your address in the future. \nThanks for joining the partie, The Partie loves women in stem.`
  document.getElementById("output").innerText = message;
}


document.getElementById("signupButton").onclick = showSignupMessage
