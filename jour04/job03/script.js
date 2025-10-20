function jsonValueKey(string, key) {
  const json = JSON.parse(string);
  console.log(json);
  return json[key];
}

/* const text_string =
  '{ "name": "La Plateforme_", "address": "8 rue d\'hozier", "city": "Marseille", "nb_staff": "11", "creation" :"2019" }';

let content = document.createElement("p");
content.innerText = jsonValueKey(text_string, "city");
document.querySelector("body").appendChild(content); */


const readJson = async function(file) {
    const response = await fetch(file);
    if (response.ok)
    {
        return await response.json();
    }
    return false;
}

function createTableBody(jsonData)
{ 
  const body = document.querySelector("#pokemon-list");
  body.innerHTML = "";
  const filter_id = document.getElementById("pokemon-id").value;
  const filter_nom = document.getElementById("pokemon-nom").value;
  const filter_type = document.getElementById("pokemon-type").value;
  //console.log(filter_id, filter_nom, filter_type);
  for (let elem in jsonData)
  {
    //console.log(jsonData[elem].name.french);
    if (filter_id !== "" && jsonData[elem].id != filter_id)
      continue;
    if (filter_nom !== "" && !(jsonData[elem].name.french.includes(filter_nom)))
      continue;
    if (filter_type !== "" && !(jsonData[elem].type.includes(filter_type)))
      continue;
    let pokemon = document.createElement("tr");
    let td = document.createElement("td");
    td.innerText = jsonData[elem].id;
    pokemon.appendChild(td);
    td = document.createElement("td");
    td.innerText = jsonData[elem].name.french;
    pokemon.appendChild(td);
    td = document.createElement("td");
    td.innerText = jsonData[elem].type.toString();
    pokemon.appendChild(td);
    body.appendChild(pokemon);
  }
  return body;
}

function populateTypeOptions(jsonData)
{
    const type_set = [];
    for (let elem of jsonData)
    {
      //console.log(elem.type);
      for (let type of elem.type)
      {
        if (!(type_set.includes(type)))
          type_set.push(type);
      }
    }
    const select = document.querySelector("#pokemon-type");
    for (let type of type_set)
    {
      let option = document.createElement("option");
      option.innerText = type;
      option.value = type;
      select.appendChild(option);
    }
}

async function displayInfo() {
    const jsonData = await readJson("pokemon.json");
    //console.log(jsonData);
    //populateTypeOptions(jsonData);
    createTableBody(jsonData);
   
    //let content = document.createElement("p");
    //content.innerText = text;
    //document.querySelector("#pokemon-list").appendChild(content);
}

async function  buildSelect() {
  const jsonData = await readJson("pokemon.json");
  populateTypeOptions(jsonData);
}

buildSelect();

let button = document.querySelector("#button");

button.addEventListener("click", function(){
  displayInfo();
});
//displayInfo();
/* document.querySelector("body").addEventListener("click", function() {
   addExpression();
}); */