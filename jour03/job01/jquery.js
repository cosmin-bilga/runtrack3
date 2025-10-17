$("#bouton").click(function() {
    console.log("da");
    const quote = $("<p>").text("Les logiciels et les cathédrales, c'est un peu la même chose - d'abord on les construit, ensuite on prie.");
    $("body").append(quote);

    const button = $("<button>").attr("class", "hide");
    button.text("Cacher tout");
    $("body").append(button);
});

/* $(".hide").click(function(){ // cette version ne marche pas car hide n'existe pas dans le DOM au chargement de la page
    //console.log("5");
    $("*").hide();
}); */

$("body").on("click", ".hide", function(){ // cette version marche car il fait le check sur body qui existe initialement dans le DOM
      $("*").hide();
})

