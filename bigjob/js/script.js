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
    console.log(JSON.parse(window.sessionStorage.getItem("presence-list")));
  });
}

/// ADMIN

function createPresence(elem) {
  let row = document.createElement("tr");
  let id = document.createElement("td");
  id.innerText = elem["id"];
  let user_id = document.createElement("td");
  user_id.innerText = elem["user_id"];
  let date = document.createElement("td");
  date.innerText = elem["date"];
  let status = document.createElement("td");
  status.innerText = elem["id"];
  let accept = document.createElement("td");
  let accept_button = document.createElement("button");
  accept_button.innerText = "ACCEPT";
  accept.appendChild(accept_button);
  let reject = document.createElement("td");
  let reject_button = document.createElement("button");
  reject_button.innerText = "REJECT";
  reject.appendChild(reject_button);
  row.appendChild(id);
  row.appendChild(user_id);
  row.appendChild(date);
  row.appendChild(status);
  row.appendChild(accept);
  row.appendChild(reject);
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
  promote_button.addEventListener("click", (event) => {
    const parent = event.target.parentElement;
    conso;
    promoteUser(parseInt(parent.firstChild.innerText));
  });
  promote.appendChild(promote_button);
  let demote = document.createElement("td");
  let demote_button = document.createElement("button");
  demote_button.innerText = "DEMOTE";
  demote_button.classList.add("demote");
  demote.appendChild(demote_button);
  row.appendChild(id);
  row.appendChild(login);
  row.appendChild(role);
  row.appendChild(promote);
  row.appendChild(demote);
  return row;
}

const adminBody = document.getElementById("admin-page");
if (adminBody) {
  const presenceTable = document.getElementById("presence-list");
  for (let elem of JSON.parse(window.sessionStorage.getItem("presence-list"))) {
    presenceTable.appendChild(createPresence(elem));
  }

  const userTable = document.getElementById("user-list");
  for (let elem of JSON.parse(window.sessionStorage.getItem("user-list"))) {
    //console.log(elem);
    userTable.appendChild(createUser(elem));
  }
}

function promoteUser(id) {
  console.log("ICI " + id);
  let userList = JSON.parse(window.sessionStorage.getItem("user-list"));
  for (let elem of userList) {
    if (elem["id"] === id) {
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
