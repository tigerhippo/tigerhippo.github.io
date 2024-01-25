let welcomeMessage = document.querySelector("h2");
let welcomeMessageButton = document.getElementById("welcome-message-button");

function setWelcomeMessageName() {
  const name = prompt("Please enter your name.");
  if (!name) {
    setWelcomeMessageName();
  } else {
    localStorage.setItem("name", name);
    welcomeMessage.textContent = `Welcome to my personal website, ${name}!`;
  }
}  

if (!localStorage.getItem("name")) {
  setWelcomeMessageName();
} else {
  const storedName = localStorage.getItem("name");
  welcomeMessage.textContent = `Welcome to my personal website, ${storedName}!`;
}


welcomeMessageButton.onclick = () => {
  setWelcomeMessageName();
}

let coolFactButton = document.getElementById("cool-fact-button");
let coolFactText = document.getElementById("cool-fact-text");

function displayCoolFact() {
 coolFactText.style.display = "block";
}

coolFactButton.onclick = () => {
  displayCoolFact();
}