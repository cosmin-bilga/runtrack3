//const combo = "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightShiftBA";
const combo = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight" , "ArrowLeft", "ArrowRight", "b", "a"];
const current_combo = [];

document.addEventListener("keydown", function(event)
{
    //const keylogger = document.getElementById("keylogger");
    //console.log(`Key pressed: ${event.key}`);
    if (current_combo.length === 10)
    {
        current_combo.shift();
    }
    current_combo.push(event.key);

    if (current_combo.toString() === combo.toString())
    {
        addContent();
    }

});

function addContent()
{
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'style.css';
    document.head.appendChild(link);

    const header = document.createElement('header');
    document.body.appendChild(header);
    const nav = document.createElement('nav');
    header.appendChild(nav);
    const link1 = document.createElement('a');
    link1.innerText = "Option1";
    nav.appendChild(link1);
    const link2 = document.createElement('a');
    link2.innerText = "Option2";
    nav.appendChild(link2);
    const link3 = document.createElement('a');
    link3.innerText = "Option3";
    nav.appendChild(link3);
    const title = document.createElement('h1');
    title.innerText = "La Plateforme";
    document.body.appendChild(title);
    const content_div = document.createElement('div');
    document.body.appendChild(content_div);
    const content = document.createElement('p');
    content.innerText = "Lorem ipsum";
    content_div.appendChild(content);

}
