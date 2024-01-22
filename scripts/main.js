const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/rickspringfield.jpeg") {
    myImage.setAttribute("src", "images/rickspringfield2.jpeg");
  } else {
    myImage.setAttribute("src", "images/rickspringfield.jpeg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Welcome to the World of 80s Music, ${myName}`;
    }
}  

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome to the World of 80s Music, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};  