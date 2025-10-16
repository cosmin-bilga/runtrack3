function showhide()
{
    //console.log(document.getElementById("citation").style.getPropertyValue("display"));
    if (document.getElementById("citation").style.getPropertyValue("display") === "none")
         document.getElementById("citation").style.display = "block";
    else
        document.getElementById("citation").style.display = "none";
}