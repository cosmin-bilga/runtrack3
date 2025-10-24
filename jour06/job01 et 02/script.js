function setAccueilLink() {
  let header = document.querySelector("header");
  let links = header.querySelectorAll("a");
  //console.log(links);
  for (let elem of links)
    if (elem.innerText === "Accueil") {
      elem.setAttribute("href", "https://laplateforme.io/");
      break;
    }
}

setAccueilLink();

const reboot = document.getElementById("reboot");

reboot.addEventListener("click", function () {
  const quotes = [
    "I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhauser gate. All those moments will be lost in time... like tears in rain... Time to die.",
    "Quite an experience to live in fear, isn't it? That's what it is to be a slave.",
    "Fiery the angels fell. Deep thunder rolled around their shores; burning with the fires of Orc.",
  ];
  let content = document.getElementById("jumbo-content");
  content.innerText = quotes[Math.floor(Math.random() * quotes.length)];
});

let page_number = 1;

function showPageContent() {
  const quotes = [
    "Plans made in the nursery can change the course of history",
    "Things must change, we must rearrange them or we'll have to estrange them",
    "You wear guilt like shackles on your feet like a halo in reverse ",
  ];
  console.log(page_number);
  let content = document.getElementById("jumbo-content");
  content.innerText = quotes[page_number - 1];
}

const pagePrev = document.getElementById("page-prev");
console.log(pagePrev);

pagePrev.addEventListener("click", function () {
  //console.log("la");
  if (page_number > 1) page_number -= 1;
  showPageContent();
});

const pageNext = document.getElementById("page-next");
pageNext.addEventListener("click", function () {
  if (page_number < 3) page_number += 1;
  showPageContent();
});

const pageOne = document.getElementById("page-1");
pageOne.addEventListener("click", function () {
  page_number = 1;
  showPageContent();
});

const pageTwo = document.getElementById("page-2");
pageTwo.addEventListener("click", function () {
  page_number = 2;
  showPageContent();
});

const pageThree = document.getElementById("page-3");
pageThree.addEventListener("click", function () {
  page_number = 3;
  showPageContent();
});

const progressBar = document.getElementById("progress-bar");
progressBar.style.width = "70%";

function progressBarIncrease() {
  const progressBar = document.getElementById("progress-bar");
  progressBarWidth = parseFloat(progressBar.style.getPropertyValue("width"));
  if (+progressBarWidth < 100)
    progressBar.style.width = +progressBarWidth + +10 + "%";
  //console.log(progressBar);
}

function progressBarDecrease() {
  const progressBar = document.getElementById("progress-bar");
  progressBarWidth = parseFloat(progressBar.style.getPropertyValue("width"));
  if (+progressBarWidth >= 10)
    progressBar.style.width = +progressBarWidth - +10 + "%";
  //console.log(progressBarWidth);
}

const leftButton = document.getElementById("left-button");
leftButton.addEventListener("click", function () {
  progressBarDecrease();
});

const rightButton = document.getElementById("right-button");
rightButton.addEventListener("click", function () {
  progressBarIncrease();
});

let keysPressed = "";
const keyCombo = "gcd";

document.addEventListener("keydown", function (event) {
  if (keysPressed.length < 3) keysPressed += event.key;
  else keysPressed = keysPressed.substring(1) + event.key;

  if (keysPressed.toLowerCase() === keyCombo) showFormModal();
  //console.log(keysPressed);
});

function showFormModal() {
  let modalBody = document.querySelector("#form-modal .modal-body");
  let login = document.getElementById("login");
  let password = document.getElementById("mot-de-passe");
  let internet2 = document.getElementById("internet2");
  console.ou;
  let dogecoin = document.getElementById("dogecoin");
  modalBody.innerText =
    "Login: @" +
    login.value +
    "\nPassword: " +
    password.value +
    "\n URL: https://l33t.lptf/dkwb/berlusconimkt/" +
    internet2.value +
    "\nDogeCoin" +
    dogecoin.value +
    ".00";
  let modal = new bootstrap.Modal(document.getElementById("form-modal"));
  modal.show();
}

const colorValues = ["blue", "red", "green", "yellow", "purple"];

let subForm = document.getElementById("submit-form");

subForm.addEventListener("click", function () {
  let formEmail = document.getElementById("form-email");
  let formPassword = document.getElementById("form-password");
  let spinner = document.querySelector(".spinner-border");
  console.log(formEmail.value.length, formPassword.value.length);
  if (formEmail.value.length > 0 && formPassword.value.length > 0) {
    spinner.classList.remove("text-primary");
    spinner.style.color =
      colorValues[Math.floor(Math.random() * colorValues.length)];
  }
  //
  console.log(spinner);
});
