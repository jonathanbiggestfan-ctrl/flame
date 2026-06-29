let policies = [
  "Enjoy Lifesteal SMP",
  "Stan Fymada, Lopezz and Squiddo",
  "Admit Theo is the biggest bird",
  "DO NOT bring up the death of Wifies in unstable universe",
  "DO NOT SLANDER SPOKE'S POV IN UNSTABLE UNIVERSE",
  "Lock in bru",
  "JamatoP sucks",
  "Decayed and decrepit Saparata is bald",
  "DO NOT BRING UP SUNSET TRIO EVER",
  "DO NOT SLANDER DECAYED AND DECREPIT JONATHAN INFRONT OF REI",
];

function showPolicies() {
  let list = document.getElementById("policyList");

  for (let i = 0; i < policies.length; i++) {
    let item = document.createElement("li");
    item.innerText = policies[i];
    list.appendChild(item);
  }
}

function addPolicy(){
  let policy = document.getElementById("textInput").value 
  policies.push(policy)
}

document.getElementById("showPolicies").onclick = showPolicies
document.getElementById("addPolicy").onclick = addPolicy
