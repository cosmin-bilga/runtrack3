function jsonValueKey(string, key) {
  const json = JSON.parse(string);
  console.log(json);
  return json[key];
}

const text_string =
  '{ "name": "La Plateforme_", "address": "8 rue d\'hozier", "city": "Marseille", "nb_staff": "11", "creation" :"2019" }';

let content = document.createElement("p");
content.innerText = jsonValueKey(text_string, "city");
document.querySelector("body").appendChild(content);
