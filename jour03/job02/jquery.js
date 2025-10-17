function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function check_children()
{
    if ($("#placement-field").children().length === 6)
    {
        let prev_src = "arc0.png";
        for (child of ($("#placement-field").children()))
        {
            let curr_src = child.src.split("/");
            curr_src = curr_src[curr_src.length - 1];
            //console.log(prev_src, curr_src);
            //console.log(prev_src > curr_src);
            if (prev_src > curr_src)
            {
                let p = $("<p>").text("Vous avez perdu");
                p.css("color","red");
                $("header").append(p);
                return;
            }
            prev_src = curr_src;
            //if (child.src())
        }
        let p = $("<p>").text("Vous avez gagné");
        p.css("color","green");
        $("header").append(p);
    }
}


$("#reset").click(function(){
    $("#placement-field").empty();
    $("header").empty();
    const order = shuffle([1,2,3,4,5,6]);
    //console.log(order);
    for (let item of order)
    {
        //console.log(item);
        let x = $("<img>").attr("src","arc" + +(+item) + ".png");
        x.attr("class","arc");
        $("#random-box").append(x);
    }
    //$("#random-box").appendChild()
});


$("#random-box").on("click",".arc", function(){ 
    $("#placement-field").append(this);
    check_children();
})



