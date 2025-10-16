window.addEventListener("scroll", (event) => {
    footer = document.querySelector("footer");
    //console.log(window.scrollY);
    //console.log(footer);
    percentage = (window.scrollY / (4096 - window.innerHeight)) * 100;
    footer.style.background = 'linear-gradient(to right, red ' + percentage +'% , green ' + percentage + '%)'  ;
    //console.log(footer.style.background);
});