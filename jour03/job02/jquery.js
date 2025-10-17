$('button').click(function() {
    console.log("da");
    const quote = $("<p>").text("Les logiciels et les cathédrales, c'est un peu la même chose - d'abord on les construit, ensuite on prie.");
    $("body").append(quote);
});