document.addEventListener("keydown", function(event)
{
    const keylogger = document.getElementById("keylogger");
    console.log(`Key pressed: ${event.key}`);
    console.log(keylogger.value)
    if (((event.key >= "a" && event.key <= "z") || (event.key >= "A" && event.key <= "Z")) && event.key.length == 1)
        keylogger.value = keylogger.value + event.key;

});
