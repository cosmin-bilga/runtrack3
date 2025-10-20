const readTxt = async function() {
    const response = await fetch("expression.txt");
    if (response.ok)
    {
        return response.text();
    }
    return false;
}

async function addExpression() {
    const text = await readTxt();
    let content = document.createElement("p");
    content.innerText = text;
    document.querySelector("body").appendChild(content);
}

document.querySelector("body").addEventListener("click", function() {
   addExpression();
});