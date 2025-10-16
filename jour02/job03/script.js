function addone()
{
    let i = document.getElementById("compteur").textContent;
    i = parseInt(i);
    document.getElementById("compteur").innerText = i + 1;
}

document.getElementById("button").onclick = addone;