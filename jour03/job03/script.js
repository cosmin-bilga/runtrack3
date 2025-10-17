function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function swap(node1, node2)
{
    tmp = $("<div>").hide();
    node1.before(tmp);
    node2.before(node1);
    tmp.replaceWith(node2);
}

$("#reset").click(function(){
    $("#game-box").empty();
    $("header").empty();
    const order = shuffle([1,2,3,4,5,6,7,8]);
    //const order = [1,2,3,4,5,6,7,8]; //test victory
    //console.log(order);
    for (let item of order)
    {
        //console.log(item);
        let x = $("<img>").attr("src",+(+item) + ".png");
        x.attr("class","img");
        $("#game-box").append(x);
    }

    // empty box
    let x = $("<img>");
    x.attr("class","img empty");
    $("#game-box").append(x);
    //$("#random-box").appendChild()
});

function check_adjancency(node)
{
    /* console.log(node.index());
    console.log($(".empty").index()); */
    node_index = node.index();
    empty_index = $(".empty").index();
    if ((node_index + 1 === empty_index) || (node_index - 1 === empty_index) || (node_index + 3 === empty_index) ||(node_index - 3 === empty_index))
        swap(node, $(".empty"));
}

function check_victory()
{
    console.log("----");
    let count = 1;
    for (child of ($("#game-box").children()))
        {
            //console.log(child);
            if (child.src.length === 0)
                return;
            let prev_src = "0.png";
            let curr_src = child.src.split("/");
            curr_src = curr_src[curr_src.length - 1];
            //console.log(prev_src, curr_src);
            //console.log(prev_src > curr_src);
            if (prev_src > curr_src)
                return;
            prev_src = curr_src;
            //if (child.src())
            //console.log(count);
            if (curr_src === "8.png")
                if (count === 8)
                    break;
                else
                    return;
            count += 1;
        }
        //console.log("ICI");
        let p = $("<p>").text("Vous avez gagné");
        p.css("color","green");
        $("header").append(p);
}

$("#game-box").on("click",".img", function(){ 
   //console.log($(this).parent().children());
   check_adjancency($(this));
   check_victory();
   //console.log(this.parent.nodes);
})
