async function getJson() {
  const response = await fetch("users.php");
  return response.json();
}

async function updateTable() {
  let json = await getJson();
  //console.log(json);
  const table = document.querySelector("#content");
  table.innerHTML = "";
  for (let elem of json) {
    //console.log(elem);
    let row = document.createElement("tr");
    let id = document.createElement("td");
    id.innerText = elem.id;
    row.appendChild(id);
    let nom = document.createElement("td");
    nom.innerText = elem.nom;
    row.appendChild(nom);
    let prenom = document.createElement("td");
    prenom.innerText = elem.prenom;
    row.appendChild(prenom);
    let email = document.createElement("td");
    email.innerText = elem.email;
    row.appendChild(email);
    table.appendChild(row);
  }
}

let button = document.getElementById("update");
button.addEventListener("click", async function () {
  updateTable();
});
