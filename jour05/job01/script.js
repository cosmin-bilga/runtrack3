function emailValidation() {
  //console.log(this);
  const email = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i
  );
  let error = document.querySelector("#email-error");
  if (this.value.length <= 0) {
    error.innerText = "Email trop court";
    this.classList.add("invalid");
  } else if (!email.test(this.value)) {
    error.innerText = "Email doit avoir la forme example@email.com";
    this.classList.add("invalid");
  } else {
    error.innerText = "";
    this.classList.remove("invalid");
  }
}

function clearEmailValidation() {
  let error = document.querySelector("#email-error");
  error.innerText = "";
}

function passwordValidation() {
  const passReg = new RegExp(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
  );
  let error = document.querySelector("#password-error");
  if (this.value.length <= 7) {
    error.innerText = "Password must have atleast 8 characters";
    this.classList.add("invalid");
  } else if (!passReg.test(this.value)) {
    error.innerText =
      "Password must contain atleast one uppercase, one lowercase, one number and one special character";
    this.classList.add("invalid");
  } else {
    error.innerText = "";
    this.classList.remove("invalid");
  }
}

function clearPasswordValidation() {
  let error = document.querySelector("#password-error");
  error.innerText = "";
}

function nomValidation() {
  let error = document.querySelector("#nom-error");
  if (this.value.length <= 2) {
    error.innerText = "Nom must have atleast 2 characters";
    this.classList.add("invalid");
  } else if (this.value.length > 50) {
    error.innerText = "Nom must have at most 50 characters";
    this.classList.add("invalid");
  } else {
    error.innerText = "";
    this.classList.remove("invalid");
  }
}

function clearNomValidation() {
  let error = document.querySelector("#nom-error");
  error.innerText = "";
}

function prenomValidation() {
  let error = document.querySelector("#prenom-error");
  if (this.value.length <= 2) {
    error.innerText = "Prenom must have atleast 2 characters";
    this.classList.add("invalid");
  } else if (this.value.length > 50) {
    error.innerText = "Prenom must have at most 50 characters";
    this.classList.add("invalid");
  } else {
    error.innerText = "";
    this.classList.remove("invalid");
  }
}

function clearPrenomValidation() {
  let error = document.querySelector("#prenom-error");
  error.innerText = "";
}

function addressValidation() {
  let error = document.querySelector("#address-error");
  if (this.value.length < 2) {
    error.innerText = "Address must have atleast 2 characters";
    this.classList.add("invalid");
  } else {
    error.innerText = "";
    this.classList.remove("invalid");
  }
}

function clearAddressValidation() {
  let error = document.querySelector("#address-error");
  error.innerText = "";
}

function postalCodeValidation() {
  const postalcode = new RegExp(/^[0-9]{5}$/);
  let error = document.querySelector("#postal-code-error");
  if (this.value.length !== 5) {
    error.innerText = "Postal code must have 5 letters.";
    this.classList.add("invalid");
  } else if (!postalcode.test(this.value)) {
    error.innerText = "Postal code should be a 5 digit number.";
    this.classList.add("invalid");
  } else {
    error.innerText = "";
    this.classList.remove("invalid");
  }
}

function clearPostalCodeValidation() {
  let error = document.querySelector("#postal-code-error");
  error.innerText = "";
}

function passwordConfirmValidation() {
  let error = document.querySelector("#password-confirm-error");
  let password = document.querySelector("#password");
  if (this.value !== password.value) error.innerText = "Passwords do not match";
  else error.innerText = "";
}

function clearPasswordConfirmValidation() {
  let error = document.querySelector("#password-confirm-error");
  error.innerText = "";
}

let email = document.querySelector("#email");
//login.addEventListener("focus", loginValidation);
email.addEventListener("blur", emailValidation);
email.addEventListener("focus", clearEmailValidation);

let password = document.querySelector("#password");
password.addEventListener("blur", passwordValidation);
password.addEventListener("focus", clearPasswordValidation);

let nom = document.querySelector("#nom");
if (nom !== null) {
  nom.addEventListener("blur", nomValidation);
  nom.addEventListener("focus", clearNomValidation);
}

let prenom = document.querySelector("#prenom");
if (prenom !== null) {
  prenom.addEventListener("blur", prenomValidation);
  prenom.addEventListener("focus", clearPrenomValidation);
}

let address = document.querySelector("#address");
if (address !== null) {
  address.addEventListener("blur", addressValidation);
  address.addEventListener("focus", clearAddressValidation);
}

let postalcode = document.querySelector("#postal-code");
if (postalcode !== null) {
  postalcode.addEventListener("blur", postalCodeValidation);
  postalcode.addEventListener("focus", clearPostalCodeValidation);
}

let passwordconfirm = document.querySelector("#password-confirm");
if (passwordconfirm !== null) {
  passwordconfirm.addEventListener("blur", passwordConfirmValidation);
  passwordconfirm.addEventListener("focus", clearPasswordConfirmValidation);
}
