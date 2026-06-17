let nameInput = document.getElementById("nameInput");
let greetButton = document.getElementById("greetButton");
let output = document.getElementById("output");

function sayHello() {
  let name = nameInput.value;
  let role = roleInput.value
  output.innerText = "Welcome, " + name + " to the " + role + " partie ";
}

greetButton.onclick = sayHello;
