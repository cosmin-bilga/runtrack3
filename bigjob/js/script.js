// FLASH

const flashMessage = document.getElementById("flash-message");
if (flashMessage) {
  if (window.sessionStorage.getItem("message"))
    flashMessage.innerText = window.sessionStorage.getItem("message");
  window.sessionStorage.setItem("message", "");
}

// MANIPULATION JSON

async function getData(filepath) {
  let response = await fetch(filepath);
  data = await response.json();
  //console.log(userList);
  return data;
}

function addPresence(user_id, date) {
  let presenceList = JSON.parse(window.sessionStorage.getItem("presence-list"));
  let id = presenceList[presenceList.length - 1]["id"];
  id = parseInt(id) + 1;
  let data = {
    id: String(id),
    user_id: String(user_id),
    date: date,
    status: "pending",
  };
  presenceList.push(data);
  window.sessionStorage.setItem("presence-list", JSON.stringify(presenceList));
}

function addUser(user_login, user_password) {
  let userList = JSON.parse(window.sessionStorage.getItem("user-list"));
  let id = userList[userList.length - 1]["id"];
  id = parseInt(id) + 1;
  let data = {
    id: String(id),
    login: String(user_login),
    password: user_password,
    role: "user",
  };
  userList.push(data);
  window.sessionStorage.setItem("user-list", JSON.stringify(userList));
}

async function main() {
  if (
    !window.sessionStorage.getItem("user-list") ||
    !window.sessionStorage.getItem("presence-list")
  ) {
    let [userList, presenceList] = await Promise.all([
      getData("assets/data/users.json"),
      getData("assets/data/presence.json"),
    ]);

    window.sessionStorage.setItem("user-list", JSON.stringify(userList));
    window.sessionStorage.setItem(
      "presence-list",
      JSON.stringify(presenceList)
    );
  }
  /*  console.log(
    JSON.parse(window.sessionStorage.getItem("user-list")),
    JSON.parse(window.sessionStorage.getItem("presence-list"))
  ); */
}

//LOAD DATA
main();

const dateSubmit = document.getElementById("date-submit");
if (dateSubmit) {
  dateSubmit.addEventListener("click", () => {
    let datePicked = document.getElementById("date-picker");
    if (window.sessionStorage.getItem("logged_user")) {
    }
  });
}

// CONNECTION

/* const connSubmit = document.getElementById("user-conn-submit");
if (connSubmit) {
  connSubmit.addEventListener("click", () => {
    const userLogin = document.getElementById("user-conn-login");
    const userPassword = document.getElementById("user-conn-pass");
    //addUser(userLogin.value, userPassword.value);
    console.log(JSON.parse(window.sessionStorage.getItem("user-list")));
  });
} */

function checkLogin(value) {
  if (value.match("^.+@laplateforme.io$")) return true;
  return false;
}

const userConnLogin = document.getElementById("user-conn-login");
if (userConnLogin) {
  userConnLogin.addEventListener("keyup", () => {
    const loginError = document.getElementById("user-conn-login-error");
    console.log(userConnLogin.value);
    if (!checkLogin(userConnLogin.value)) {
      loginError.innerText =
        "Username must be a valid email with laplatforme.io domain";
    } else loginError.innerText = "";
  });
}

const userConnPassword = document.getElementById("user-conn-pass");
const userConnButton = document.getElementById("user-conn-submit");

if (userConnButton) {
  userConnButton.addEventListener("click", () => {
    let login = userConnLogin.value;
    let password = userConnPassword.value;
    let user_list = JSON.parse(window.sessionStorage.getItem("user-list"));
    for (let elem of user_list) {
      if (login === elem["login"] && password === elem["password"]) {
        window.sessionStorage.setItem("logged_user", login);
        window.sessionStorage.setItem("logged_user_id", elem["id"]);
        window.sessionStorage.setItem("logged_user_role", elem["role"]);
        window.sessionStorage.setItem("message", "Bienvenue " + login);
        window.location.replace("index.html");
      }
    }
  });
}

// INSCRIPTION

function checkPass(value) {
  let reg =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

  if (value.match(reg)) return "";
  let msg = "Password error: ";
  reg = /(?=.*[a-z])/;
  if (!value.match(reg)) msg += "Must contain lowercase letter. ";
  reg = /(?=.*[A-Z])/;
  if (!value.match(reg)) msg += "Must contain uppercase letter. ";
  reg = /(?=.*\d)/;
  if (!value.match(reg)) msg += "Must contain a number. ";
  reg = /(?=.*[@.#$!%*?&])/;
  if (!value.match(reg))
    msg += "Must contain a special character: @.#$!%*?& . ";
  reg = /[A-Za-z\d@.#$!%*?&]{8,15}/;
  if (!value.match(reg))
    msg += "Must have atleast 8 characters and maximum 15. ";
  return msg;
}

const userRegLogin = document.getElementById("user-register-login");
if (userRegLogin) {
  userRegLogin.addEventListener("keyup", () => {
    const loginError = document.getElementById("user-conn-login-error");
    //console.log(userRegLogin.value);
    if (!checkLogin(userRegLogin.value)) {
      loginError.innerText =
        "Username must be a valid email with laplatforme.io domain";
    } else loginError.innerText = "";
  });
}

const userRegPass = document.getElementById("user-register-pass");
if (userRegPass) {
  userRegPass.addEventListener("keyup", () => {
    const loginError = document.getElementById("user-conn-pass-error");
    //console.log(userRegPass.value);
    loginError.innerText = checkPass(userRegPass.value);
  });
}

const userRegConfPass = document.getElementById("user-register-pass-conf");
if (userRegConfPass) {
  userRegConfPass.addEventListener("keyup", () => {
    const loginError = document.getElementById("user-conn-pass-error");
    //console.log(userRegPass.value);
    if (userRegPass.value !== userRegConfPass.value)
      loginError.innerText = "Passwords do not match.";
  });
}

function checkRegister(userLogin, userPassword, userPasswordConf) {
  if (userPassword.value !== userPasswordConf.value) {
    window.sessionStorage.setItem("message", "Passwords do not match.");
    return false;
  }
  let reg =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  if (!userPassword.value.match(reg)) {
    window.sessionStorage.setItem(
      "message",
      "Password must contain one lowercase, uppercase, number and special char. Minimum length is 8."
    );
    return false;
  }
  if (!userLogin.value.match("^[a-zA-Z0-9.-]+@laplateforme.io$")) {
    window.sessionStorage.setItem(
      "message",
      "Login doit etre une adresse email valide avec le domaine de La Plateforme (@laplateforme.io)"
    );
    return false;
  }
  return true;
}

const regSubmit = document.getElementById("user-register-submit");
if (regSubmit) {
  regSubmit.addEventListener("click", () => {
    const userLogin = document.getElementById("user-register-login");
    const userPassword = document.getElementById("user-register-pass");
    const userPasswordConf = document.getElementById("user-register-pass-conf");
    if (!checkRegister(userLogin, userPassword, userPasswordConf)) return;
    addUser(userLogin.value, userPassword.value);
    window.sessionStorage.setItem("message", "Registration succesful.");
    window.location.replace("connexion.html");
  });
}

/// DATE

const dateButton = document.getElementById("date-submit");
if (dateButton) {
  dateButton.addEventListener("click", () => {
    if (!window.sessionStorage.getItem("logged_user")) return;
    const datePick = document.getElementById("date-picker");
    if (!datePick.value) return;
    addPresence(
      window.sessionStorage.getItem("logged_user_id"),
      datePick.value
    );
    window.sessionStorage.setItem(
      "message",
      "Date " +
        datePick.value +
        " added for " +
        window.sessionStorage.getItem("logged_user")
    );
    console.log(JSON.parse(window.sessionStorage.getItem("presence-list")));
  });
}

/// ADMIN

const curr_date = new Date();
const year = curr_date.getFullYear();
const month = String(curr_date.getMonth() + 1).padStart(2, "0");
const day = String(curr_date.getDate()).padStart(2, "0");

const today = year + "-" + "month" + "day";

function createPresence(elem) {
  let row = document.createElement("tr");
  let id = document.createElement("td");
  id.innerText = elem["id"];
  let user_id = document.createElement("td");
  user_id.innerText = elem["user_id"];
  let date = document.createElement("td");
  date.innerText = elem["date"];
  let status = document.createElement("td");
  status.innerText = elem["status"];
  let accept = document.createElement("td");
  let accept_button = document.createElement("button");
  accept_button.innerText = "ACCEPT";
  accept_button.classList.add(
    "sm:rounded-xl",
    "bg-green-200",
    "p-0",
    "sm:p-2",
    "hover:bg-green-300"
  );
  accept.appendChild(accept_button);
  let reject = document.createElement("td");
  let reject_button = document.createElement("button");
  reject_button.innerText = "REJECT";
  reject_button.classList.add(
    "sm:rounded-xl",
    "bg-red-200",
    "p-0",
    "sm:p-2",
    "hover:bg-red-300"
  );
  reject.appendChild(reject_button);
  row.appendChild(id);
  row.appendChild(user_id);
  row.appendChild(date);
  row.appendChild(status);
  if (elem["date"] > today) {
    row.appendChild(accept);
    row.appendChild(reject);
  }

  accept_button.addEventListener("click", () => {
    //const parent = event.target.parentElement;
    /* console.log("promote");
    console.log(id.innerText); */
    acceptPresence(parseInt(id.innerText));
    displayPresenceTable();
  });
  reject_button.addEventListener("click", () => {
    //const parent = event.target.parentElement;
    /*  console.log("promote");
    console.log(id.innerText); */
    rejectPresence(parseInt(id.innerText));
    displayPresenceTable();
  });
  return row;
}

function createUser(elem) {
  let row = document.createElement("tr");
  let id = document.createElement("td");
  id.innerText = elem["id"];
  let login = document.createElement("td");
  login.innerText = elem["login"];
  let role = document.createElement("td");
  role.innerText = elem["role"];
  let promote = document.createElement("td");
  let promote_button = document.createElement("button");
  promote_button.innerText = "PROMOTE";
  promote_button.classList.add("promote");
  promote_button.classList.add(
    "sm:rounded-xl",
    "bg-green-200",
    "p-0",
    "sm:p-2",
    "hover:bg-green-300"
  );
  promote.appendChild(promote_button);
  let demote = document.createElement("td");
  let demote_button = document.createElement("button");
  demote_button.innerText = "DEMOTE";
  demote_button.classList.add("demote");
  demote_button.classList.add(
    "sm:rounded-xl",
    "bg-red-200",
    "p-0",
    "sm:p-2",
    "hover:bg-red-300"
  );
  demote.appendChild(demote_button);
  row.appendChild(id);
  row.appendChild(login);
  row.appendChild(role);
  row.appendChild(promote);
  row.appendChild(demote);

  promote_button.addEventListener("click", () => {
    //const parent = event.target.parentElement;
    /*  console.log("promote");
    console.log(id.innerText); */
    promoteUser(parseInt(id.innerText));
    displayUserTable();
  });
  demote_button.addEventListener("click", () => {
    //const parent = event.target.parentElement;
    /*  console.log("promote");
    console.log(id.innerText); */
    demoteUser(parseInt(id.innerText));
    displayUserTable();
  });
  return row;
}

function displayPresenceTable() {
  const presenceTable = document.getElementById("presence-list");
  presenceTable.innerHTML = "";
  for (let elem of JSON.parse(window.sessionStorage.getItem("presence-list"))) {
    presenceTable.appendChild(createPresence(elem));
  }
}

function displayUserTable() {
  const userTable = document.getElementById("user-list");
  userTable.innerHTML = "";
  for (let elem of JSON.parse(window.sessionStorage.getItem("user-list"))) {
    //console.log(elem);
    userTable.appendChild(createUser(elem));
  }
}

const homePage = document.getElementById("home-page");
if (homePage) {
  if (
    window.sessionStorage.getItem("logged_user") === undefined ||
    window.sessionStorage.getItem("logged_user") === "null"
  ) {
    window.sessionStorage.setItem("message", "Please log in.");
    window.location.replace("connexion.html");
  }
}

const adminBody = document.getElementById("admin-page");
if (adminBody) {
  //console.log(window.sessionStorage.getItem("logged_user_role"));
  if (window.sessionStorage.getItem("logged_user_role") === "admin") {
    displayPresenceTable();
    displayUserTable();
  } else if (
    window.sessionStorage.getItem("logged_user_role") === "moderator"
  ) {
    const userTable = document.getElementById("user-table");
    userTable.remove();
    displayPresenceTable();
  } else {
    window.sessionStorage.setItem("message", "Unauthorized Access");
    window.location.replace("connexion.html");
  }
}

function promoteUser(id) {
  //console.log("ICI " + id);
  let userList = JSON.parse(window.sessionStorage.getItem("user-list"));
  for (let elem of userList) {
    //console.log(elem["id"], id);
    if (elem["id"] == id) {
      if (elem["role"] === "user") {
        elem["role"] = "moderator";
      } else if (elem["role"] === "moderator") {
        elem["role"] = "admin";
      } else if (elem["role"] === "admin") {
        return;
      } else elem["role"] = "user";
      break;
    }
  }
  window.sessionStorage.setItem("user-list", JSON.stringify(userList));
}

function demoteUser(id) {
  //console.log("ICI " + id);
  let userList = JSON.parse(window.sessionStorage.getItem("user-list"));
  for (let elem of userList) {
    //console.log(elem["id"], id);
    if (elem["id"] == id) {
      if (elem["role"] === "moderator") {
        elem["role"] = "user";
      } else if (elem["role"] === "admin") {
        elem["role"] = "moderator";
      } else if (elem["role"] === "user") {
        return;
      } else elem["role"] = "user";
      break;
    }
  }
  window.sessionStorage.setItem("user-list", JSON.stringify(userList));
}

function acceptPresence(id) {
  //console.log("ICI " + id);
  let presenceList = JSON.parse(window.sessionStorage.getItem("presence-list"));
  for (let elem of presenceList) {
    //console.log(elem["id"], id);
    if (elem["id"] == id) {
      elem["status"] = "accepted";
      console.log(elem);
      break;
    }
  }
  window.sessionStorage.setItem("presence-list", JSON.stringify(presenceList));
}

function rejectPresence(id) {
  //console.log("ICI " + id);
  let presenceList = JSON.parse(window.sessionStorage.getItem("presence-list"));
  for (let elem of presenceList) {
    //console.log(elem["id"], id);
    if (elem["id"] == id) {
      elem["status"] = "rejected";
      break;
    }
  }
  window.sessionStorage.setItem("presence-list", JSON.stringify(presenceList));
}

// DECONNEXION

const deconnexionButton = document.getElementById("nav-deconnexion");
if (deconnexionButton) {
  deconnexionButton.addEventListener("click", () => {
    if (window.sessionStorage.getItem("logged_user") !== "null") {
      window.sessionStorage.setItem("message", "Deconnecté");
    }
    window.sessionStorage.setItem("logged_user", null);
    window.sessionStorage.setItem("logged_user_id", null);
    window.sessionStorage.setItem("logged_user_role", null);
    window.location.replace("connexion.html");
  });
}
